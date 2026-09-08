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
│       └── logo/                # Logo als Vektor, 4 Varianten
│           ├── logo-primary.svg     # Badge: YU + FESTIVAL im Rahmen
│           ├── logo-horizontal.svg  # Querformat (Header)
│           ├── logo-stacked.svg     # YU über FESTIVAL, ohne Rahmen
│           └── logo-yu.svg          # nur das Signet
├── src/
│   ├── components/
│   │   ├── Logo.astro       # Logo-Komponente (variant/width/label)
│   │   ├── BrandText.astro  # schützt Eigennamen vor der unicase-Schrift
│   │   ├── Deco.astro       # Gestaltungselemente: Mäander, Zahn-Kapsel, Pille
│   │   ├── Header.astro     # Logo + Navigation (mobil + aktiver Reiter)
│   │   ├── Footer.astro
│   │   └── Hero.astro
│   ├── data/
│   │   └── site.ts          # ★ zentrale Inhalte: Navigation, Säulen, Events, Partner
│   ├── layouts/
│   │   └── BaseLayout.astro # Grundgerüst (head, Fonts, Header, Footer)
│   ├── pages/               # ★ jede Datei = eine URL/ein Reiter
│   │   ├── index.astro           # Start                  → /
│   │   ├── programm.astro        # Programm-Übersicht     → /programm
│   │   ├── programm/[slug].astro # Event-Detailseiten     → /programm/<event>
│   │   ├── timetable.astro       # Ablauf / Timeline      → /timetable
│   │   ├── partner.astro         # Partner                → /partner
│   │   ├── about.astro           # Über das Festival      → /about
│   │   ├── awareness.astro       # Awareness              → /awareness
│   │   ├── faq.astro             # FAQ                    → /faq
│   │   └── kontakt.astro         # Kontakt                → /kontakt
│   └── styles/
│       └── global.css       # ★ Design-Tokens – die CI
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Häufige Aufgaben

- **Texte/Programm ändern:** vieles steht zentral in `src/data/site.ts`
  (Navigation, Säulen, Events inkl. Gast-Bios, Partner, Kontakt).
- **Event hinzufügen:** Eintrag im `events`-Array in `src/data/site.ts` ergänzen
  – Übersicht, Detailseite und Timetable werden automatisch erzeugt.
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

- **Blob ist unicase**: Kleinbuchstaben werden als Großbuchstaben gezeichnet.
  Eigennamen wie „kiU“ oder „KoLab“ würden dadurch falsch geschrieben. Dagegen
  gibt es zwei Werkzeuge:
  - Klasse `.brand-name` – stellt ein ganzes Element auf Helvetica Rounded um
    (z. B. Partnernamen).
  - Komponente `<BrandText text="..." />` – lässt den Text in Blob, setzt aber
    enthaltene Eigennamen einzeln in Helvetica Rounded. Wird bei Event-Titeln
    genutzt, damit aus „kiU Talk“ kein „KIU TALK“ wird. Welche Namen geschützt
    sind, ergibt sich automatisch aus `partners` in `src/data/site.ts`.
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
