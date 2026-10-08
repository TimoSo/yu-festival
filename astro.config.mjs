import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Domain der Seite (wird u. a. für Sitemap/Canonical genutzt)
  site: 'https://yufestival.de',
  // Die Festival-Seite lag früher unter /about – alte Links leiten weiter
  redirects: {
    '/about': '/about/festival',
  },
});
