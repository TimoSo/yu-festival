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
│       ├── partner/             # Logos für die Fußleiste (siehe README dort)
│       └── logo/                # Logo als Vektor, 4 Varianten
│           ├── logo-primary.svg     # Badge: YU + FESTIVAL im Rahmen
│           ├── logo-horizontal.svg  # Querformat (Header)
│           ├── logo-stacked.svg     # YU über FESTIVAL, ohne Rahmen
│           └── logo-yu.svg          # nur das Signet
├── src/
│   ├── components/
│   │   ├── Logo.astro       # Logo-Komponente (variant/width/label)
│   │   ├── EventCard.astro  # aufklappbarer Programmpunkt
│   │   ├── RichText.astro   # Absätze mit automatisch verlinkten Mails/URLs
│   │   ├── Deco.astro       # Gestaltungselemente: Mäander, Zahn-Kapsel, Pille
│   │   ├── Header.astro     # Logo + Navigation (mobil + aktiver Reiter)
│   │   ├── Footer.astro
│   │   └── Hero.astro
│   ├── data/
│   │   ├── site.ts          # ★ Texte: Start, About, Team, Partner, FAQ, Kontakt
│   │   └── programm.ts      # ★ das komplette Programm (Bereiche, Tage, Punkte)
│   ├── lib/
│   │   └── linkify.ts       # erkennt E-Mail-Adressen und URLs im Text
│   ├── layouts/
│   │   └── BaseLayout.astro # Grundgerüst (head, Fonts, Header, Footer)
│   ├── pages/               # ★ jede Datei = eine URL/ein Reiter
│   │   ├── index.astro           # Start                  → /
│   │   ├── programm.astro        # Programm mit Zeitplan  → /programm
│   │   ├── partner.astro         # Partner                → /partner
│   │   ├── about.astro           # About › Festival       → /about
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

- **Texte ändern:** Start, About, Team, Partner, FAQ, Impressum und Kontakt
  stehen in `src/data/site.ts`, das Programm in `src/data/programm.ts`.
  E-Mail-Adressen und URLs in den Texten werden automatisch verlinkt.
- **Programm:** `/programm` hat drei Bereiche (`tracks`): Festival, Konferenz,
  Hackathon – jeder mit eigenen drei Kategorien und Farben. Die Filterleiste
  oben schaltet um; ein Klick auf einen Programmpunkt klappt ihn auf.
- **Programmpunkt hinzufügen:** Eintrag im `events`-Array in
  `src/data/programm.ts` ergänzen – mit `track` (festival/konferenz/hackathon),
  `day` (1 = Do 22.10. … 4 = So 25.10.), `start`/`end` und `category` (muss zu
  den Kategorien des Bereichs passen, sonst fehlt die Farbe). Innerhalb eines
  Tages wird automatisch nach Uhrzeit sortiert.
- **Anmeldung:** `registration: true` zeigt „Anmeldung erforderlich“ samt
  Mail-Button (Betreff wird mit dem Titel vorbefüllt), `false` zeigt
  ausdrücklich „keine Anmeldung erforderlich“.
- **Texte, die mehrfach vorkommen** (z. B. „Unter Haut“ läuft viermal, Bios,
  Hackathon-Hinweis) stehen oben in `programm.ts` einmal als Konstante –
  Korrekturen also nur dort.
- **Ausstellungen** (alle vier Tage) stehen im Array `ongoing` und erscheinen
  über dem Zeitplan – in allen Bereichen.
- **Fußleisten-Logos:** Dateien nach `public/images/partner/` legen
  (Dateinamen siehe README dort). Fehlt eine Datei, steht der Name als
  Platzhalter da.
- **Logo einsetzen:** `<Logo variant="horizontal" width="200px" />`. Das SVG ist
  einfarbig (`fill="currentColor"`) – die Farbe kommt vom `color` des
  Elternelements.
- **Bilder:** in `public/images/` ablegen, einbinden als `/images/datei.jpg`.
  Für den CI-Look gibt es `.media` (runder Rahmen) und `.media--blob`
  (organische Maske wie in den Mood-Vorlagen).

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
Noch offen: echte Fotos, Termine/Uhrzeiten, Gast-Bios, Anbindung des
Kontaktformulars, Lizenz-Webfonts. Platzhalter sind mit „tba“ bzw.
„Platzhalter“ markiert.
