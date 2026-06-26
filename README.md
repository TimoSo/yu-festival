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
├── public/                  # statische Dateien (1:1 ausgeliefert)
│   ├── favicon.svg          # Favicon (Weintor-Kachel)
│   └── images/              # Bilder, Logos, Grafiken
├── src/
│   ├── components/          # wiederverwendbare Bausteine
│   │   ├── Header.astro     # Logo + Navigation (mobil + aktiver Reiter)
│   │   ├── Footer.astro
│   │   └── Hero.astro       # großer Kopfbereich der Startseite
│   ├── data/
│   │   └── site.ts          # ★ zentrale Inhalte: Navigation, Säulen, Events, Partner
│   ├── layouts/
│   │   └── BaseLayout.astro # gemeinsames Grundgerüst (head, Fonts, Header, Footer)
│   ├── pages/               # ★ jede Datei = eine URL/ein Reiter
│   │   ├── index.astro          # Start / Landing Page   → /
│   │   ├── programm.astro       # Programm-Übersicht      → /programm
│   │   ├── programm/[slug].astro# Event-Detailseiten      → /programm/<event>
│   │   ├── timetable.astro      # Ablauf / Timeline       → /timetable
│   │   ├── partner.astro        # Partner                 → /partner
│   │   ├── about.astro          # Über das Festival       → /about
│   │   ├── awareness.astro      # Awareness               → /awareness
│   │   ├── faq.astro            # FAQ                     → /faq
│   │   └── kontakt.astro        # Kontakt                 → /kontakt
│   └── styles/
│       └── global.css       # ★ Design-Tokens (Farben/Schriften) – die CI
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Häufige Aufgaben

- **Texte/Programm ändern:** vieles steht zentral in `src/data/site.ts`
  (Navigation, Säulen, Events inkl. Gast-Bios, Partner, Kontakt). Längere
  Fließtexte direkt in den Dateien unter `src/pages/`.
- **Event hinzufügen:** Eintrag im `events`-Array in `src/data/site.ts` ergänzen
  – Übersicht, Detailseite und Timetable werden automatisch erzeugt.
- **Neuen Reiter hinzufügen:** Datei in `src/pages/` anlegen und im `nav`-Array
  in `src/data/site.ts` eintragen.
- **Bilder:** in `public/images/` ablegen und als `/images/datei.jpg` einbinden.
  Für den Briefing-Look gibt es fertige Utilities: `.media-grayscale` (Graustufen)
  und `.duotone` (Graustufen + Weintor/Petrol-Tint).

## CI / Design

Umgesetzt nach Briefing (positiv, experimentell, verspielt; Farbkontraste statt
schwarzer Texte; Fotos in Graustufen/Duoton).

**Farben** (CSS-Variablen im `:root`-Block in `src/styles/global.css`):

| Rolle              | Farbe   | Hex                                   |
| ------------------ | ------- | ------------------------------------- |
| Hintergrund / Weiß | Weiß    | `#EFEDE8`                             |
| Primär-Akzent      | Weintor | `#8B1D5C`                             |
| Sekundär-Akzent    | Petrol  | `#1C7A78`                             |
| Text               | Schwarz | `#211019` (Pflaumen-Schwarz)          |
| Leuchtende Akzente  | div.    | Pink, Violett, Grün, Gelb, Blau       |

**Schriften** (selbst gehostet via Fontsource, in `BaseLayout.astro` geladen):

- `Space Grotesk` – Headlines / Display (`--font-display`)
- `Inter` – Fließtext (`--font-sans`)
- `Space Mono` – Labels, Zeiten, Untertitel (`--font-mono`)

> Die Schriften sind lizenzfreie Web-Entsprechungen zu den Briefing-Beispielen
> (Cybersky, Galiver etc.) und jederzeit austauschbar.

## Status

Grundgerüst mit CI-Umsetzung (Farben, Schriften, Layout). Inhalte sind teils
Platzhalter (als „tba" / „Platzhalter" markiert) und werden ergänzt. Noch offen:
echtes Logo, finale Fotos, Anbindung des Kontaktformulars, echte Termine/Uhrzeiten.
