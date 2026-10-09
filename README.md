# YU Festival – Website

Website für das **YU Festival** – _Medien.Kunst.Diskurs_ / _media.art.society_.
Ein kostenloses Festival rund um digitale Medien: kritischer Blick, vor allem
aber Gestaltungslust – für das Individuum und das „Wir“ als Kollektiv.

Gebaut mit [Astro](https://astro.build/).

## Schnellstart

```bash
npm install      # einmalig: Abhängigkeiten installieren
npm run dev      # Entwicklungsserver auf http://localhost:4321
```

Weitere Befehle:

| Befehl            | Wirkung                                        |
| ----------------- | ---------------------------------------------- |
| `npm run build`   | Baut die fertige Seite nach `dist/`            |
| `npm run preview` | Zeigt den `build`-Output lokal in der Vorschau |

## Aufbau

```text
B:\YU_Festival
├── public/
│   ├── favicon.svg              # YU-Signet auf Lavendel
│   ├── fonts/                   # CI-Schriften als WOFF2
│   └── images/
│       ├── header/              # Social-Media-Header (Originale) + Muster
│       ├── personen/            # Porträts der Kurzvorstellung (400 × 400, WebP)
│       ├── programm/            # Bilder in den Programmpunkten (WebP)
│       ├── foerderer/           # Fußleisten-Logos, weiß aufbereitet (Web-Versionen)
│       ├── YU_EinFestivalVon_Logos/ # Originale dieser Logos (schwarz)
│       └── logo/                # Logo als Vektor, 4 Varianten
│           ├── logo-primary.svg     # Badge: YU + FESTIVAL im Rahmen
│           ├── logo-horizontal.svg  # Querformat (Header)
│           ├── logo-stacked.svg     # YU über FESTIVAL, ohne Rahmen
│           └── logo-yu.svg          # nur das Signet
├── src/
│   ├── components/
│   │   ├── Logo.astro       # Logo-Komponente (variant/width/label)
│   │   ├── EventCard.astro  # aufklappbarer Programmpunkt
│   │   ├── Kurzvorstellung.astro # schwebende Profil-Blasen auf der Startseite
│   │   ├── PageHeader.astro # gleich hoher Seitenkopf aller Unterseiten
│   │   ├── RichText.astro   # Absätze mit automatisch verlinkten Mails/URLs
│   │   ├── Deco.astro       # Gestaltungselemente: Mäander, Zahn-Kapsel, Pille
│   │   ├── Header.astro     # Logo + Navigation (mobil + aktiver Reiter)
│   │   ├── Footer.astro
│   │   └── Hero.astro
│   ├── data/
│   │   ├── site.ts          # ★ Texte: Start, About, Team, Partner, FAQ, Kontakt
│   │   ├── programm.ts      # ★ das komplette Programm (Bereiche, Tage, Punkte)
│   │   └── impressum.ts     # ★ Impressum und Rechtstexte
│   ├── lib/
│   │   └── linkify.ts       # erkennt E-Mail-Adressen und URLs im Text
│   ├── layouts/
│   │   └── BaseLayout.astro # Grundgerüst (head, Fonts, Header, Footer)
│   ├── pages/               # ★ jede Datei = eine URL/ein Reiter
│   │   ├── index.astro           # Start                  → /
│   │   ├── programm.astro        # Programm mit Zeitplan  → /programm
│   │   ├── partner.astro         # Partner                → /partner
│   │   ├── about/festival.astro  # About › Festival       → /about/festival
│   │   ├── about/team.astro      # About › Team           → /about/team
│   │   ├── faq.astro             # FAQ                    → /faq
│   │   ├── kontakt.astro         # Kontakt                → /kontakt
│   │   └── impressum.astro       # Impressum              → /impressum
│   └── styles/
│       └── global.css       # ★ Design-Tokens – die CI
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Häufige Aufgaben

- **Texte ändern:** Start, About, Team, Partner, FAQ und Kontakt stehen in
  `src/data/site.ts`, das Programm in `src/data/programm.ts`, Impressum und
  Rechtstexte in `src/data/impressum.ts` (dort bewusst in der Sie-Form).
  E-Mail-Adressen und URLs in den Texten werden automatisch verlinkt.
- **Programm:** `/programm` hat drei Bereiche (`tracks`): Festival, Konferenz,
  Hackathon. Jeder Bereich hat eine Leitfarbe (`farbe`), abgestimmt mit dem
  Instagram-Feed: Festival Coral, Konferenz Deep Purple, Hackathon Lavender.
  Die Filterleiste oben schaltet um, der Schieber nimmt die Farbe des Bereichs
  an; ein Klick auf einen Programmpunkt klappt ihn auf.
- **Programmpunkt hinzufügen:** Eintrag im `events`-Array in
  `src/data/programm.ts` ergänzen – mit `track` (festival/konferenz/hackathon),
  `day` (1 = Do 22.10. … 4 = So 25.10.), `start`/`end` und `category` (steht
  als Text auf der Pille, z. B. „Workshop“). Innerhalb eines Tages wird
  automatisch nach Uhrzeit sortiert.
- **Anmeldung:** `registration: true` zeigt „Anmeldung erforderlich“ samt
  Mail-Button (Betreff wird mit dem Titel vorbefüllt), `false` zeigt
  ausdrücklich „keine Anmeldung erforderlich“. Alles rund um die Anmeldung
  ist in Lime gehalten (`.anmeldung`, `.btn--anmelden`, `.pill-anmeldung`
  in `global.css`) – Lime ist die Farbe für „besondere Aufmerksamkeit“.
- **Anrede:** durchgehend „du“ – weder „ihr“ noch „Sie“.
- **Texte, die mehrfach vorkommen** (z. B. „Unter Haut“ läuft viermal, Bios,
  Hackathon-Hinweis) stehen oben in `programm.ts` einmal als Konstante –
  Korrekturen also nur dort.
- **Ausstellungen** (alle vier Tage) stehen im Array `ongoing` und erscheinen
  im Bereich Festival ganz oben, vor dem ersten Tag.
- **Partner:** Jeder Partner hat eine `id`. Die Kacheln auf der Startseite
  springen damit direkt zum Partner auf `/partner` (z. B. `/partner#kolab`).
- **Fußleisten-Logos** („Ein Festival von“): weiße, zugeschnittene Versionen
  liegen in `public/images/foerderer/`, die Originale in
  `public/images/YU_EinFestivalVon_Logos/`. Die Höhe je Logo steht in
  `footerLogos` in `src/data/site.ts` (gleicht die Proportionen optisch aus).
- **Header (Grafik: Canê):** Die Originale `YU_Header.png` (gestapelt) und
  `YU_Header2.png` (quer) liegen in `public/images/header/`. Daraus erzeugt:
  `yu-muster.webp` (logofreier oberer Streifen des queren Headers) – der
  Hintergrund aller Seitenköpfe inklusive Startseite, Klasse `.section--muster`
  in `global.css`.
- **Kurzvorstellung (Startseite):** Personen im Array `spotlight` in
  `src/data/site.ts` (aktuell neun). Fotos als quadratischer Ausschnitt
  (400 × 400 px) nach `public/images/personen/` – ohne Foto zeigt der Kreis
  Initialen. `fotoCredit` erscheint in der Karte und im Impressum unter
  „Bildnachweise“. Die Ruheplätze der Kreise stehen in `HEIM` in
  `Kurzvorstellung.astro` (für neun Personen ausgelegt).
- **Bild im Programmpunkt:** `bild` mit `src`, `alt`, `breite` und `hoehe`
  (Pixelmaße der Datei) – erscheint oben im aufgeklappten Punkt.
- **Rohmaterial:** Originalfotos und Word-Dateien gehören nach `material/`
  (per `.gitignore` ausgeschlossen), **nicht** nach `public/` – alles in
  `public/` wird beim Bauen mit ausgeliefert. Die Seite nutzt nur die
  optimierten Fassungen in `public/images/personen/` und `programm/`.
- **Logo einsetzen:** `<Logo variant="horizontal" width="200px" />`. Das SVG ist
  einfarbig (`fill="currentColor"`) – die Farbe kommt vom `color` des
  Elternelements.
- **Bilder:** in `public/images/` ablegen, einbinden als `/images/datei.jpg`.
  Für den CI-Look gibt es `.media` (runder Rahmen) und `.media--blob`
  (organische Maske wie in den Mood-Vorlagen).

## Online stellen (IONOS)

Die Seite ist rein statisch: `npm run build` erzeugt den fertigen Ordner
`dist/`, der auf jedem Webspace läuft.

- **Webspace per SFTP:** `npm run build`, dann den **Inhalt** von `dist/`
  (nicht den Ordner selbst) per SFTP in das Verzeichnis laden, auf das die
  Domain zeigt. Bei jeder Änderung: neu bauen und erneut hochladen.
- **IONOS Deploy Now:** verbindet das GitHub-Repo und baut bei jedem Push
  auf `main` automatisch neu (wie bisher Vercel). Build-Befehl
  `npm run build`, Ausgabeordner `dist`.

## CI

Umgesetzt nach `YU_CI_small.pdf` (CI Preview): rund, flach, kontrastreich –
Farbflächen statt Grau.

**Farben** (CSS-Variablen im `:root`-Block in `src/styles/global.css`):

| Name        | Hex       | Einsatz                              |
| ----------- | --------- | ------------------------------------ |
| Light Lime  | `#c2ff55` | Akzente, Flächen, aktive Zustände    |
| Lavender    | `#894ef7` | Primärfarbe, Hero, Rahmen            |
| Deep Purple | `#432494` | Header/Footer, Headlines auf Hell    |
| Pure Coral  | `#f17569` | Akzentfläche                         |
| Deep Black  | `#000000` | Fließtext                            |
| White       | `#ffffff` | Grundfläche, Text auf Dunkel         |

Farbflächen setzt man per Klasse: `.section--lavender`, `.section--lime`,
`.section--coral`, `.section--purple`. Jede Fläche definiert Text- und
Akzentfarbe automatisch mit.

> Hinweis zum Kontrast: Auf Coral steht der Text **schwarz**, nicht weiß –
> Weiß auf Coral erreicht nur ~2,8:1 und wäre nicht barrierefrei lesbar.

**Schriften** – die Original-Schriften der CI, lokal als WOFF2 in
`public/fonts/`, eingebunden per `@font-face` in `src/styles/global.css`:

| Schrift                              | Gewicht | Rolle          |
| ------------------------------------ | ------- | -------------- |
| **Blob Regular**                     | 400     | Headlines      |
| **Helvetica Rounded LT Std Black**   | 900     | Subline / Lead |
| **Helvetica Rounded LT Std Bold**    | 700     | Fließtext      |

Es gibt **nur diese drei Schnitte**. Verwende ausschließlich `font-weight`
400, 700 oder 900 – bei anderen Werten rechnet der Browser einen unschönen
Fett-Schnitt hoch.

Zwei Eigenheiten von Blob, die man kennen muss:

- **Blob nur für große Überschriften** (h1/h2). Alles andere – Fließtext,
  Programmpunkte, Zwischenüberschriften (h3/h4) – steht in Helvetica Rounded.
  Blob ermüdet als Lesetext und ihm fehlen Zeichen wie `&` und `@`.
- **Blob ist unicase**: Kleinbuchstaben werden als Großbuchstaben gezeichnet.
  Eigennamen wie „kiU“ oder „KoLab“ würden dadurch falsch geschrieben. Da Blob
  nur noch in großen Überschriften steht, betrifft das kaum noch etwas –
  Partnernamen sind deshalb bewusst in Helvetica Rounded gesetzt. Für Einzelfälle
  gibt es die Klasse `.brand-name`.
- **Blob fehlen einige Zeichen**: `ß`, `&`, `%`, `@`, `€`, `§` und die
  typografischen Anführungszeichen. Für solche Zeichen greift automatisch
  Helvetica Rounded (steht als Fallback in `--font-display`). Sichtbar z. B.
  bei „Performance & Musik“ und „33 %“.

> Die Schriften sind lizenzpflichtig. Die Quelldateien (`.otf`) liegen in
> `ci/Fonts/` und sind über `.gitignore` vom Repo ausgeschlossen; ausgeliefert
> werden nur die daraus erzeugten WOFF2-Dateien.

## Status

CI umgesetzt: Farben, Schriften, Logo, Formensprache, alle Seiten.
Noch offen: Partnertext storyLab kiU.

Die Seite setzt keine Cookies: Schriften liegen lokal, es gibt kein
Tracking und kein Kontaktformular – Kontakt läuft per Mail-Link.
