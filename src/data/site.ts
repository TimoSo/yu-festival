// ============================================================
//  Zentrale Inhalts- & Konfigurationsdatei
//  Hier werden Festival-Eckdaten, Navigation, Partner und die
//  inhaltlichen Säulen gepflegt. Texte einmal hier ändern,
//  überall aktualisiert.
// ============================================================

export const site = {
  name: 'YU Festival',
  subtitle: 'Medien.Kunst.Diskurs',
  subtitleAlt: 'media.art.society',
  free: true,
  // Kurzbeschreibung für <meta description> & Social Sharing
  description:
    'YU Festival – ein Festival für digitale Medien zwischen kritischem Blick und Gestaltungslust. Diskurs, Performance & Musik und Workshops. Eintritt frei.',
};

// Hauptnavigation (Reiter). Reihenfolge = Reihenfolge im Menü.
export const nav: { label: string; href: string }[] = [
  { label: 'Start', href: '/' },
  { label: 'Programm', href: '/programm' },
  { label: 'Awareness', href: '/awareness' },
  { label: 'FAQ', href: '/faq' },
];

// Die drei inhaltlichen Säulen (je ~33 %).
export const pillars: { title: string; share: string; text: string }[] = [
  {
    title: 'Diskurs',
    share: '33 %',
    text: 'Talks, Panels und Gespräche über die Gestaltungsmöglichkeiten digitaler Medien – für das Individuum und für das „Wir“ als Kollektivgedanken. Mit dabei: der kiU Talk mit Tobias Biesecke.',
  },
  {
    title: 'Performance & Musik',
    share: '33 %',
    text: 'Bühne frei für audiovisuelle Performances, Konzerte und Klangwelten, die digitale Medien erfahrbar machen.',
  },
  {
    title: 'Workshops',
    share: '33 %',
    text: 'Selbst gestalten, ausprobieren, mitmachen – Workshops in Kooperation mit dem kiU und dem KoLab, dem Digitalen Koproduktionslabor der Stadt Dortmund.',
  },
];

// Kooperations- & Programmpartner.
export const partners: { name: string; role: string; note?: string }[] = [
  {
    name: 'kiU',
    role: 'Programm- & Workshop-Partner',
    note: 'kiU Talk mit Tobias Biesecke',
  },
  {
    name: 'KoLab',
    role: 'Workshop-Partner',
    note: 'Digitales Koproduktionslabor der Stadt Dortmund',
  },
];
