# Schriften (Quelldateien)

Hier liegen die **lizenzpflichtigen Schriftdateien** der CI. Der Ordner wird
**nicht** von der Website ausgeliefert – anders als `public/`, dessen Inhalt
1:1 in den Build (`dist/`) kopiert und damit öffentlich herunterladbar wäre.

Die Binärdateien selbst sind über `.gitignore` (`*.otf`, `*.ttf`) vom Repo
ausgeschlossen, damit sie nicht über GitHub verteilt werden.

## Stand

| Schrift                          | vorhanden | gebraucht für     |
| -------------------------------- | --------- | ----------------- |
| Helvetica Rounded LT Std **Bold** | ja        | Fließtext         |
| Helvetica Rounded LT Std **Heavy**| nein      | Subline / Lead    |
| **Blob Regular**                 | nein      | Headlines         |

Aktuell laufen auf der Website lizenzfreie Entsprechungen:
**Baloo 2** (Headlines) und **Nunito** (Subline/Text), geladen in
`src/layouts/BaseLayout.astro`.

## Einbinden, sobald eine Webfont-Lizenz vorliegt

Wichtig: Eine **Desktop-Lizenz reicht nicht** – für die Auslieferung auf einer
Website braucht es eine Webfont-Lizenz.

1. Vom Anbieter die Webfont-Dateien (`.woff2`) beziehen – nicht die
   `.otf`/`.ttf` von hier umwandeln, sofern die Lizenz das nicht erlaubt.
2. Dateien nach `public/fonts/` legen.
3. In `src/styles/global.css` per `@font-face` einbinden, z. B.:

   ```css
   @font-face {
     font-family: 'Blob';
     src: url('/fonts/blob-regular.woff2') format('woff2');
     font-weight: 400;
     font-display: swap;
   }
   ```

4. Im `:root`-Block die Variablen umstellen:

   ```css
   --font-display: 'Blob', 'Baloo 2', sans-serif;
   --font-sans: 'Helvetica Rounded', 'Nunito Variable', sans-serif;
   ```

5. In `BaseLayout.astro` die Fontsource-Imports entfernen und
   `npm uninstall @fontsource/baloo-2 @fontsource-variable/nunito`.
