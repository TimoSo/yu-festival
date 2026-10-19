// Erzeugt zu jeder Partikel-Form (public/images/partikel/*.svg) eine
// weichgezeichnete Fassung mit Filmkorn: public/images/partikel/weich/
// <name>-weich.webp. Dazu src/data/partikel-weich.json mit den Maßen, die
// Partikel.astro braucht.
//
// Aufruf im Projektordner (nach dem Austauschen der SVGs):
//   node scripts/partikel-weich.mjs
// Optional Stärke von Weichzeichnung und Korn: node scripts/partikel-weich.mjs 5 24
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const QUELLE = 'public/images/partikel';
const ZIEL = path.join(QUELLE, 'weich');
const LISTE = 'src/data/partikel-weich.json';

const LAENGSTE_SEITE = 260; // px der Form ohne Rand (≈ 1,5 × größte Anzeige)
const SIGMA = Number(process.argv[2] ?? 5); // Weichzeichnung in px
const KORN = Number(process.argv[3] ?? 24); // Stärke des Korns (0–255)

// normalverteilte Zufallszahl (Box-Muller)
function gauss() {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

async function erzeuge(datei) {
  const name = path.basename(datei, '.svg');
  const svg = fs.readFileSync(path.join(QUELLE, datei), 'utf8');
  // Hauptfarbe = erste Farbangabe in der Datei
  const farbe = (svg.match(/#[0-9a-fA-F]{6}\b/) ?? ['#000000'])[0];
  const rand = Math.ceil(SIGMA * 3);
  const groesse = { width: LAENGSTE_SEITE, height: LAENGSTE_SEITE, fit: 'inside' };

  // 1) Form mit Transparenz → Alpha-Maske
  const mitAlpha = await sharp(Buffer.from(svg), { density: 300 })
    .resize(groesse)
    .extend({ top: rand, bottom: rand, left: rand, right: rand, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: W, height: H } = mitAlpha.info;

  // 2) dieselbe Form auf ihrer Hauptfarbe: so hat auch der Rand die
  //    richtige Farbe und die Unschärfe bekommt keinen dunklen Saum
  const mitGrund = svg.replace(
    /(<svg[^>]*>)/,
    `$1<rect x="-5000" y="-5000" width="20000" height="20000" fill="${farbe}"/>`
  );
  const farbeRoh = await sharp(Buffer.from(mitGrund), { density: 300 })
    .resize(groesse)
    .extend({ top: rand, bottom: rand, left: rand, right: rand, background: farbe })
    .removeAlpha()
    .blur(SIGMA)
    .raw()
    .toBuffer();

  const alpha = Buffer.alloc(W * H);
  for (let i = 0; i < W * H; i++) alpha[i] = mitAlpha.data[i * 4 + 3];
  // extractChannel: sharp liefert sonst drei Kanäle zurück
  const alphaWeich = await sharp(alpha, { raw: { width: W, height: H, channels: 1 } })
    .blur(SIGMA)
    .extractChannel(0)
    .raw()
    .toBuffer();

  // 3) Korn: fein + etwas gröber (2 × 2 px); an den Kanten zusätzlich
  //    leicht gesprenkelt, innen bleibt die Fläche geschlossen
  const gb = Math.ceil(W / 2);
  const grob = new Float32Array(gb * Math.ceil(H / 2)).map(gauss);
  const out = Buffer.alloc(W * H * 4);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = y * W + x;
      const n = 0.65 * gauss() + 0.35 * grob[(y >> 1) * gb + (x >> 1)];
      const a = alphaWeich[i] / 255;
      for (let c = 0; c < 3; c++) {
        out[i * 4 + c] = Math.max(0, Math.min(255, farbeRoh[i * 3 + c] + n * KORN));
      }
      const kante = 4 * a * (1 - a);
      out[i * 4 + 3] = Math.round(255 * Math.max(0, Math.min(1, a + n * 0.32 * kante)));
    }
  }

  await sharp(out, { raw: { width: W, height: H, channels: 4 } })
    .webp({ quality: 82, alphaQuality: 90 })
    .toFile(path.join(ZIEL, `${name}-weich.webp`));

  // rand: um so viel ist die weiche Datei größer als die Form selbst
  const formBreite = W - 2 * rand;
  return [name, { breite: W, hoehe: H, rand: +(W / formBreite).toFixed(4) }];
}

fs.mkdirSync(ZIEL, { recursive: true });
for (const f of fs.readdirSync(ZIEL)) fs.unlinkSync(path.join(ZIEL, f));
const dateien = fs.readdirSync(QUELLE).filter((f) => f.endsWith('.svg')).sort();
const liste = {};
for (const d of dateien) {
  const [name, masse] = await erzeuge(d);
  liste[name] = masse;
  console.log(`${name}-weich.webp`.padEnd(30), `${masse.breite}×${masse.hoehe}`);
}
fs.writeFileSync(LISTE, JSON.stringify(liste, null, 2) + '\n');
console.log(`→ ${LISTE}`);
