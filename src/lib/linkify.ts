// Zerlegt einen Fliesstext in Teile und erkennt dabei E-Mail-Adressen
// und Web-Adressen, damit sie als Links ausgegeben werden koennen.
// So bleiben die Texte in den Datendateien schlichter Text.

export type Teil = { text: string; href?: string; extern?: boolean };

const MUSTER =
  /(https?:\/\/[^\s]+|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;

// Satzzeichen am Ende einer URL gehoeren meist zum Satz, nicht zur Adresse
const SATZENDE = /[.,;:!?)]$/;

export function linkify(text: string): Teil[] {
  const teile: Teil[] = [];
  let bis = 0;

  for (const m of text.matchAll(MUSTER)) {
    const start = m.index ?? 0;
    let treffer = m[0];
    let rest = '';

    if (treffer.startsWith('http')) {
      while (SATZENDE.test(treffer)) {
        rest = treffer.slice(-1) + rest;
        treffer = treffer.slice(0, -1);
      }
    }

    if (start > bis) teile.push({ text: text.slice(bis, start) });

    if (treffer.startsWith('http')) {
      teile.push({ text: treffer, href: treffer, extern: true });
    } else {
      teile.push({ text: treffer, href: `mailto:${treffer}` });
    }
    if (rest) teile.push({ text: rest });

    bis = start + m[0].length;
  }

  if (bis < text.length) teile.push({ text: text.slice(bis) });
  return teile;
}
