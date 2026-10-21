// Das Programm in der gewünschten Sprache: Deutsch kommt unverändert aus
// programm.ts, für Englisch werden die Texte aus programm.en.ts über die
// deutschen Einträge gelegt (Zeiten, Bereiche, Bilder bleiben gleich).
import * as de from './programm';
import * as en from './programm.en';
import type { Lang } from '../i18n';

function uebersetze<T extends de.Inhalt>(eintrag: T, u?: en.Uebersetzung): T {
  if (!u) return eintrag;
  const { bildAlt, ...texte } = u;
  return {
    ...eintrag,
    ...texte,
    bild: eintrag.bild && bildAlt ? { ...eintrag.bild, alt: bildAlt } : eintrag.bild,
  };
}

export function programm(lang: Lang) {
  if (lang === 'de') {
    return {
      days: de.days,
      tracks: de.tracks,
      events: de.events,
      ongoing: de.ongoing,
      anmeldung: de.anmeldung,
      kategorie: (name: string) => name,
    };
  }
  return {
    days: de.days.map((tag) => ({ ...tag, ...en.tage[tag.nr] })),
    tracks: de.tracks.map((track) => {
      const u = en.tracks[track.id];
      const { linkLabel, ...intro } = u.intro;
      return {
        ...track,
        label: u.label,
        intro: {
          ...track.intro,
          ...intro,
          link: track.intro.link && { ...track.intro.link, label: linkLabel ?? track.intro.link.label },
        },
      };
    }),
    events: de.events.map((e) => uebersetze(e, en.events[e.id])),
    ongoing: de.ongoing.map((a) => uebersetze(a, en.ongoing[a.id])),
    anmeldung: { ...de.anmeldung, ...en.anmeldung },
    kategorie: (name: string) => en.kategorien[name] ?? name,
  };
}
