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

| Befehl            | Wirkung                                              |
| ----------------- | ---------------------------------------------------- |
| `npm run build`   | Baut die fertige Seite nach `dist/`                  |
| `npm run preview` | Zeigt den `build`-Output lokal in der Vorschau       |

## Aufbau

```text
B:\YU_Festival
├── public/                  # statische Dateien (1:1 ausgeliefert)
│   ├── favicon.svg          # Platzhalter-Favicon
│   └── images/              # Bilder, Logos, Grafiken
├── src/
│   ├── components/          # wiederverwendbare Bausteine
│   │   ├── Header.astro     # Logo + Navigation (mobil + aktiver Reiter)
│   │   ├── Footer.astro
│   │   └── Hero.astro       # großer Kopfbereich der Startseite
│   ├── data/
│   │   └── site.ts          # ★ zentrale Inhalte: Name, Navigation, Säulen, Partner
│   ├── layouts/
│   │   └── BaseLayout.astro  # gemeinsames Grundgerüst (head, Header, Footer)
│   ├── pages/               # ★ jede Datei = eine URL/ein Reiter
│   │   ├── index.astro      # Start / Landing Page  → /
│   │   ├── programm.astro   # Programm              → /programm
│   │   ├── awareness.astro  # Awareness             → /awareness
│   │   └── faq.astro        # FAQ                    → /faq
│   └── styles/
│       └── global.css       # ★ Design-Tokens (Farben/Schriften) für die CI
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Häufige Aufgaben

- **Texte ändern:** Inhalte stehen größtenteils in `src/data/site.ts` und direkt
  in den jeweiligen Dateien unter `src/pages/`.
- **Neuen Reiter hinzufügen:** Datei in `src/pages/` anlegen (z. B. `lineup.astro`)
  und in `src/data/site.ts` im `nav`-Array eintragen.
- **CI / Design einbauen (später):** Im Block `:root` in
  `src/styles/global.css` Farben (`--color-…`) und Schriften (`--font-…`)
  anpassen. Die ganze Seite zieht automatisch nach.

## Farbschema (CI)

| Rolle              | Farbe   | Hex       |
| ------------------ | ------- | --------- |
| Hintergrund / Weiß | Weiß    | `#EFEDE8` |
| Primär-Akzent      | Weintor | `#8B1D5C` |
| Sekundär-Akzent    | Petrol  | `#1C7A78` |
| Text               | Schwarz | `#1C1A17` |

Definiert als CSS-Variablen im `:root`-Block in `src/styles/global.css`.

## Status

Grundgerüst / Skeleton. Farbschema gesetzt, Schriften & Logo folgen noch.
Inhalte sind teils Platzhalter und werden nach und nach ergänzt.
