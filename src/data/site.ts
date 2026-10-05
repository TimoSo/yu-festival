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
    'YU Festival – ein Festival für digitale Medien zwischen kritischem Blick und Gestaltungslust. Diskurs, Performance und Musik, Workshops. Eintritt frei.',
};

// Hauptnavigation. `children` erzeugt ein aufklappbares Untermenü.
export const nav: {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}[] = [
  { label: 'Start', href: '/' },
  { label: 'Programm', href: '/programm' },
  { label: 'Partner', href: '/partner' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Festival', href: '/about' },
      { label: 'Team', href: '/about/team' },
    ],
  },
  { label: 'FAQ', href: '/faq' },
  { label: 'Kontakt', href: '/kontakt' },
];

// Die drei inhaltlichen Säulen des Festivals (Startseite).
export const pillars: { title: string; text: string; accent: string }[] = [
  {
    title: 'Diskurs',
    text: 'Talks, Panels und Gespräche über die Gestaltungsmöglichkeiten digitaler Medien – für das Individuum und für das „Wir" als Kollektivgedanken.',
    accent: 'var(--lavender)',
  },
  {
    title: 'Performance und Musik',
    text: 'Bühne frei für audiovisuelle Performances, Konzerte und Klangwelten, die digitale Medien erfahrbar machen.',
    accent: 'var(--coral)',
  },
  {
    title: 'Workshops',
    text: 'Selbst gestalten, ausprobieren, mitmachen – Workshops in Kooperation mit dem kiU und dem KoLab.',
    accent: 'var(--lime)',
  },
];

// ------------------------------------------------------------
//  PROGRAMM
//  Drei Tracks mit jeweils eigenen Kategorien und Farben.
//  Die Filterleiste auf /programm schaltet zwischen ihnen um.
// ------------------------------------------------------------

export type TrackId = 'festival' | 'konferenz' | 'hackathon';

export const tracks: {
  id: TrackId;
  label: string;
  intro: string;
  categories: { name: string; accent: string }[];
}[] = [
  {
    id: 'festival',
    label: 'Festival',
    intro:
      'Diskurs, Performance und Musik sowie Workshops – zu je einem Drittel.',
    categories: [
      { name: 'Diskurs', accent: 'var(--lavender)' },
      { name: 'Performance und Musik', accent: 'var(--coral)' },
      { name: 'Workshop', accent: 'var(--lime)' },
    ],
  },
  {
    id: 'konferenz',
    label: 'Konferenz',
    intro: 'Fachlicher Austausch in Podien, Präsentationen und Workshops.',
    categories: [
      { name: 'Podium', accent: 'var(--lavender)' },
      { name: 'Präsentation', accent: 'var(--coral)' },
      { name: 'Workshop', accent: 'var(--lime)' },
    ],
  },
  {
    id: 'hackathon',
    label: 'Hackathon',
    intro: 'Gemeinsam bauen, ausprobieren und zeigen.',
    // Platzhalter-Kategorien – bitte ersetzen, sobald der Ablauf steht.
    categories: [
      { name: 'Kickoff', accent: 'var(--lavender)' },
      { name: 'Hacking', accent: 'var(--lime)' },
      { name: 'Showcase', accent: 'var(--coral)' },
    ],
  },
];

// Festivaltage – Daten eintragen, sobald sie feststehen.
export const days: { nr: number; label: string; date: string }[] = [
  { nr: 1, label: 'Tag 1', date: 'tba' },
  { nr: 2, label: 'Tag 2', date: 'tba' },
  { nr: 3, label: 'Tag 3', date: 'tba' },
  { nr: 4, label: 'Tag 4', date: 'tba' },
];

export type ProgrammEvent = {
  id: string;
  track: TrackId;
  day: number;
  time: string;
  category: string;
  title: string;
  description: string;
  guest?: string;
  bio?: string;
  partner?: string;
  location?: string;
};

// Programmpunkte. Beim Anklicken klappen sie auf /programm auf.
export const events: ProgrammEvent[] = [
  // ---------- Festival ----------
  {
    id: 'kiu-talk-tobias-biesecke',
    track: 'festival',
    day: 1,
    time: 'tba',
    category: 'Diskurs',
    title: 'kiU Talk mit Tobias Biesecke',
    description:
      'Gespräch über digitale Medien und ihre Gestaltungsräume, präsentiert vom kiU.',
    guest: 'Tobias Biesecke',
    bio: 'Kurzbio folgt – Platzhalter.',
    partner: 'kiU',
  },
  {
    id: 'panel-wir-gestalten-das-digitale',
    track: 'festival',
    day: 1,
    time: 'tba',
    category: 'Diskurs',
    title: 'Panel: Wir gestalten das Digitale',
    description: 'Platzhalter – Programmpunkt und Gäste folgen.',
  },
  {
    id: 'audiovisuelle-performance',
    track: 'festival',
    day: 2,
    time: 'tba',
    category: 'Performance und Musik',
    title: 'Audiovisuelle Performance',
    description: 'Platzhalter – Programmpunkt folgt.',
  },
  {
    id: 'workshop-kolab',
    track: 'festival',
    day: 2,
    time: 'tba',
    category: 'Workshop',
    title: 'Workshop mit dem KoLab',
    description:
      'Hands-on-Workshop mit dem Digitalen Koproduktionslabor der Stadt Dortmund.',
    partner: 'KoLab',
  },
  {
    id: 'live-set',
    track: 'festival',
    day: 3,
    time: 'tba',
    category: 'Performance und Musik',
    title: 'Live-Set',
    description: 'Platzhalter – Programmpunkt folgt.',
  },
  {
    id: 'workshop-kiu',
    track: 'festival',
    day: 4,
    time: 'tba',
    category: 'Workshop',
    title: 'Workshop in Kooperation mit dem kiU',
    description: 'Platzhalter – Programmpunkt folgt.',
    partner: 'kiU',
  },

  // ---------- Konferenz (Platzhalter) ----------
  {
    id: 'konf-podium-digitale-teilhabe',
    track: 'konferenz',
    day: 1,
    time: 'tba',
    category: 'Podium',
    title: 'Podium: Digitale Teilhabe',
    description: 'Platzhalter – Thema und Teilnehmende folgen.',
  },
  {
    id: 'konf-podium-wem-gehoert-das-digitale',
    track: 'konferenz',
    day: 2,
    time: 'tba',
    category: 'Podium',
    title: 'Podium: Wem gehört das Digitale?',
    description: 'Platzhalter – Thema und Teilnehmende folgen.',
  },
  {
    id: 'konf-praesentation-forschung',
    track: 'konferenz',
    day: 2,
    time: 'tba',
    category: 'Präsentation',
    title: 'Präsentation: Aus der Forschung',
    description: 'Platzhalter – Beitrag folgt.',
  },
  {
    id: 'konf-praesentation-projekte',
    track: 'konferenz',
    day: 3,
    time: 'tba',
    category: 'Präsentation',
    title: 'Präsentation: Projekte aus der Stadt',
    description: 'Platzhalter – Beitrag folgt.',
  },
  {
    id: 'konf-workshop-methoden',
    track: 'konferenz',
    day: 3,
    time: 'tba',
    category: 'Workshop',
    title: 'Workshop: Methoden der Koproduktion',
    description: 'Platzhalter – Konferenz-Workshop, Inhalt folgt.',
  },
  {
    id: 'konf-workshop-werkzeuge',
    track: 'konferenz',
    day: 4,
    time: 'tba',
    category: 'Workshop',
    title: 'Workshop: Digitale Werkzeuge im Alltag',
    description: 'Platzhalter – Konferenz-Workshop, Inhalt folgt.',
  },

  // ---------- Hackathon (Platzhalter) ----------
  {
    id: 'hack-kickoff',
    track: 'hackathon',
    day: 1,
    time: 'tba',
    category: 'Kickoff',
    title: 'Kickoff und Teambildung',
    description: 'Platzhalter – Auftakt, Aufgabenstellung und Gruppenfindung.',
  },
  {
    id: 'hack-session-1',
    track: 'hackathon',
    day: 2,
    time: 'tba',
    category: 'Hacking',
    title: 'Hacking-Session I',
    description: 'Platzhalter – gemeinsames Arbeiten an den Projekten.',
  },
  {
    id: 'hack-session-2',
    track: 'hackathon',
    day: 3,
    time: 'tba',
    category: 'Hacking',
    title: 'Hacking-Session II',
    description: 'Platzhalter – gemeinsames Arbeiten an den Projekten.',
  },
  {
    id: 'hack-showcase',
    track: 'hackathon',
    day: 4,
    time: 'tba',
    category: 'Showcase',
    title: 'Showcase der Ergebnisse',
    description: 'Platzhalter – Projekte werden vorgestellt.',
  },
];

// Durchgehende Arbeiten: laufen über alle vier Tage und stehen
// deshalb über dem Zeitstrahl, unabhängig vom gewählten Track.
export const ongoing: {
  id: string;
  title: string;
  description: string;
  period: string;
  location?: string;
}[] = [
  {
    id: 'installation-1',
    title: 'Kunstinstallation I',
    description:
      'Platzhalter – durchgehende Performance bzw. ausgestellte Installation. Titel, Künstler:in und Beschreibung folgen.',
    period: 'durchgehend · alle vier Tage',
  },
  {
    id: 'installation-2',
    title: 'Kunstinstallation II',
    description:
      'Platzhalter – durchgehende Performance bzw. ausgestellte Installation. Titel, Künstler:in und Beschreibung folgen.',
    period: 'durchgehend · alle vier Tage',
  },
];

// ------------------------------------------------------------
//  PARTNER & FÖRDERNDE
// ------------------------------------------------------------

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

// Logos für die Fußleiste, in zwei Zeilen.
// `logo` zeigt auf eine Datei in public/images/partner/.
// Fehlt die Datei, zeigt die Fußleiste automatisch den Namen als Text.
export const footerLogos: {
  heading: string;
  items: { name: string; logo?: string; url?: string }[];
}[] = [
  {
    heading: 'Ein Festival von',
    items: [
      { name: 'U', logo: '/images/partner/u.svg' },
      { name: 'Digitale Kultur', logo: '/images/partner/digitale-kultur.svg' },
      { name: 'Smart City', logo: '/images/partner/smart-city.svg' },
    ],
  },
  {
    heading: 'Partner',
    items: [
      { name: 'kiU', logo: '/images/partner/kiu.svg' },
      { name: 'KoLab', logo: '/images/partner/kolab.svg' },
      { name: 'vki', logo: '/images/partner/vki.svg' },
      { name: 'Atem Bienal', logo: '/images/partner/atem-bienal.svg' },
    ],
  },
];

// YU Team – Platzhalter, bitte ergaenzen.
export const team: {
  name: string;
  role: string;
  note?: string;
}[] = [
  { name: 'Platzhalter', role: 'Festivalleitung' },
  { name: 'Platzhalter', role: 'Programm' },
  { name: 'Platzhalter', role: 'Kommunikation' },
  { name: 'Platzhalter', role: 'Technik & Produktion' },
];

// Impressum – Pflichtangaben nach TMG, bitte ausfuellen.
export const impressum = {
  anbieter: 'tba',
  strasse: 'tba',
  plz: 'tba',
  ort: 'tba',
  vertreten: 'tba',
  email: 'info@yufestival.de',
  telefon: 'tba',
  registergericht: '',
  registernummer: '',
  ustId: '',
};

// Kontaktdaten.
export const contact = {
  email: 'info@yufestival.de',
  instagram: '',
  note: 'Du erreichst uns am besten per E-Mail. Social-Media-Kanäle folgen.',
};

// ------------------------------------------------------------
//  Eigennamen-Schutz fuer die Headline-Schrift
//  Blob ist unicase: Kleinbuchstaben werden als Grossbuchstaben
//  gezeichnet, aus "kiU" wuerde also "KIU". splitBrands() zerlegt
//  einen Text so, dass Eigennamen separat ausgezeichnet und in
//  Helvetica Rounded gesetzt werden koennen (siehe BrandText.astro).
// ------------------------------------------------------------

/** Namen, die exakt so geschrieben bleiben muessen. */
export const brandNames: string[] = partners.map((p) => p.name);

export function splitBrands(
  text: string
): { text: string; isBrand: boolean }[] {
  // laengste zuerst, damit bei gleicher Position der laengere Name gewinnt
  const namen = [...brandNames].sort((a, b) => b.length - a.length);
  const teile: { text: string; isBrand: boolean }[] = [];
  let rest = text;

  while (rest.length > 0) {
    let position = -1;
    let treffer = '';
    for (const name of namen) {
      const i = rest.indexOf(name);
      if (i !== -1 && (position === -1 || i < position)) {
        position = i;
        treffer = name;
      }
    }
    if (position === -1) {
      teile.push({ text: rest, isBrand: false });
      break;
    }
    if (position > 0) {
      teile.push({ text: rest.slice(0, position), isBrand: false });
    }
    teile.push({ text: treffer, isBrand: true });
    rest = rest.slice(position + treffer.length);
  }

  return teile;
}
