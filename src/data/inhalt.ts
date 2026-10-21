// Texte der Seite in der passenden Sprache: inhalt('de') → site.ts,
// inhalt('en') → site.en.ts. Beide Dateien haben dieselbe Struktur.
import * as de from './site';
import * as en from './site.en';
import type { Lang } from '../i18n';

export type Inhalt = Omit<typeof de, 'seiten'> & { seiten: typeof de.seiten };

export const inhalt = (lang: Lang): Inhalt => (lang === 'en' ? en : de);
