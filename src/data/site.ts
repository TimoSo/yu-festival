// ============================================================
//  Zentrale Inhalts- & Konfigurationsdatei
//  Texte einmal hier ändern → überall aktualisiert.
//  Platzhalter sind als „tba" / „Platzhalter" markiert.
// ============================================================

export const site = {
  name: 'YU Festival',
  subtitle: 'Medien.Kunst.Diskurs',
  subtitleAlt: 'media.art.society',
  free: true,
  // Eckdaten – sobald bekannt, hier eintragen:
  date: 'tba',
  location: 'tba',
  description:
    'YU Festival – ein Festival für digitale Medien zwischen kritischem Blick und Gestaltungslust. Diskurs, Performance & Musik und Workshops. Eintritt frei.',
};

// Hauptnavigation (Reihenfolge = Reihenfolge im Menü).
export const nav: { label: string; href: string }[] = [
  { label: 'Start', href: '/' },
  { label: 'Programm', href: '/programm' },
  { label: 'Timetable', href: '/timetable' },
  { label: 'Partner', href: '/partner' },
  { label: 'About', href: '/about' },
  { label: 'Awareness', href: '/awareness' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Kontakt', href: '/kontakt' },
];

// Die drei inhaltlichen Säulen (je ~33 %).
export const pillars: {
  title: string;
  share: string;
  text: string;
  accent: string; // CSS-Variable für den Farbtupfer
}[] = [
  {
    title: 'Diskurs',
    share: '33 %',
    text: 'Talks, Panels und Gespräche über die Gestaltungsmöglichkeiten digitaler Medien – für das Individuum und für das „Wir" als Kollektivgedanken.',
    accent: 'var(--lavender)',
  },
  {
    title: 'Performance & Musik',
    share: '33 %',
    text: 'Bühne frei für audiovisuelle Performances, Konzerte und Klangwelten, die digitale Medien erfahrbar machen.',
    accent: 'var(--coral)',
  },
  {
    title: 'Workshops',
    share: '33 %',
    text: 'Selbst gestalten, ausprobieren, mitmachen – Workshops in Kooperation mit dem kiU und dem KoLab.',
    accent: 'var(--lime)',
  },
];

// Programm-Events. Jedes Event kann später eine eigene Unterseite
// bekommen (slug) und wird mit Bild + Kurzbio der Gäste beworben.
export const events: {
  slug: string;
  title: string;
  category: 'Diskurs' | 'Performance & Musik' | 'Workshop';
  guest?: string;
  bio?: string;
  description: string;
  partner?: string;
}[] = [
  {
    slug: 'kiu-talk-tobias-biesecke',
    title: 'kiU Talk mit Tobias Biesecke',
    category: 'Diskurs',
    guest: 'Tobias Biesecke',
    bio: 'Kurzbio folgt – Platzhalter.',
    description:
      'Gespräch über digitale Medien und ihre Gestaltungsräume, präsentiert vom kiU.',
    partner: 'kiU',
  },
  {
    slug: 'panel-wir-gestalten-das-digitale',
    title: 'Panel: Wir gestalten das Digitale',
    category: 'Diskurs',
    description: 'Platzhalter – Programmpunkt und Gäste folgen.',
  },
  {
    slug: 'audiovisuelle-performance',
    title: 'Audiovisuelle Performance',
    category: 'Performance & Musik',
    description: 'Platzhalter – Programmpunkt folgt.',
  },
  {
    slug: 'live-set',
    title: 'Live-Set',
    category: 'Performance & Musik',
    description: 'Platzhalter – Programmpunkt folgt.',
  },
  {
    slug: 'workshop-kolab',
    title: 'Workshop mit dem KoLab',
    category: 'Workshop',
    description:
      'Hands-on-Workshop mit dem Digitalen Koproduktionslabor der Stadt Dortmund.',
    partner: 'KoLab',
  },
  {
    slug: 'workshop-kiu',
    title: 'Workshop in Kooperation mit dem kiU',
    category: 'Workshop',
    description: 'Platzhalter – Programmpunkt folgt.',
    partner: 'kiU',
  },
];

// Kooperations- & Programmpartner.
export const partners: {
  name: string;
  role: string;
  description: string;
  url?: string;
}[] = [
  {
    name: 'kiU',
    role: 'Programm- & Workshop-Partner',
    description:
      'Mit dem kiU entsteht u. a. der kiU Talk mit Tobias Biesecke sowie ein gemeinsamer Workshop.',
  },
  {
    name: 'KoLab',
    role: 'Workshop-Partner',
    description:
      'Das KoLab – Digitales Koproduktionslabor der Stadt Dortmund – gestaltet Workshops zum Mitmachen.',
  },
];

// Kontaktdaten (Platzhalter – bitte ergänzen).
export const contact = {
  email: 'hallo@yu-festival.de',
  instagram: '',
  note: 'Du erreichst uns am besten per E-Mail. Social-Media-Kanäle folgen.',
};
