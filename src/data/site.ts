// ============================================================
//  Zentrale Inhalts- & Konfigurationsdatei
//  Texte einmal hier ändern → überall aktualisiert.
//  Das Programm steht in einer eigenen Datei: src/data/programm.ts
// ============================================================

// Kontaktdaten (steht oben, weil weitere Texte darauf verweisen)
export const contact = {
  email: 'info@yufestival.de',
  instagram: '',
  note: 'Du erreichst uns am besten per E-Mail. Social-Media-Kanäle folgen.',
};

export const site = {
  name: 'YU Festival',
  subtitle: 'Medien.Kunst.Diskurs',
  subtitleAlt: 'media.art.society',
  free: true,
  date: '22.–25. Oktober 2026',
  location: 'Dortmunder U',
  description:
    'YU Festival – Medien.Kunst.Diskurs: vom 22. bis 25. Oktober 2026 im Dortmunder U. Performances, Workshops, Talks, Konferenz und Hackathon rund um digitale Räume und Gemeinschaft. Eintritt frei.',
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

// ------------------------------------------------------------
//  STARTSEITE
// ------------------------------------------------------------

export const landing = {
  intro: [
    'Beim YU Festival stehen die Gestaltungsmöglichkeiten, die digitale Medien eröffnen, im Zentrum – für das Individuum genauso wie für das „Wir“ als Kollektivgedanken. Wir gehen kreativ, experimentell und verspielt mit digitalen Elementen um und fragen: Wie wollen wir das Digitale gestalten?',
    'Das YU Festival wirft einen positiven, aufgeschlossenen Blick auf Digitalität. Den kritischen Blick vergessen wir nicht – unser Fokus liegt aber auf den Gestaltungsmöglichkeiten, die das Individuum und das „Wir“ als Kollektivgedanken haben.',
  ],
  worum: {
    lead: 'Was wäre, wenn digitale Räume anders aussehen könnten? Offener, kreativer, gemeinschaftlicher? Wenn wir nicht nur Nutzer*innen wären, sondern selbst mitentscheiden und neue Formen des Miteinanders entwickeln würden?',
    text: 'Das YU Festival schafft Raum für genau diese Fragen – und für Ideen, die noch keine fertige Antwort haben.',
  },
};

// Die drei inhaltlichen Säulen des Festivals (Startseite).
export const pillars: { title: string; text: string; accent: string }[] = [
  {
    title: 'Diskurs',
    text: 'Talks, Vorträge und Podien über die Gestaltungsmöglichkeiten digitaler Medien – für das Individuum und für das „Wir“ als Kollektivgedanken.',
    accent: 'var(--lavender)',
  },
  {
    title: 'Performance und Musik',
    text: 'Bühne frei für audiovisuelle Performances, Konzerte und Klangwelten, die digitale Medien erfahrbar machen.',
    accent: 'var(--coral)',
  },
  {
    title: 'Workshops',
    text: 'Selbst gestalten, ausprobieren, mitmachen – von Zines über Creative Coding bis zur Zukunftswerkstatt.',
    accent: 'var(--lime)',
  },
];

// ------------------------------------------------------------
//  KURZVORSTELLUNG (Startseite)
//  Fotos: Datei unter `foto` ablegen (public/images/kurzvorstellung/),
//  dann erscheint sie automatisch. Bis dahin zeigt der Kreis Initialen.
//  `farbe` ist die Farbe des Rings bzw. später des Kartenrahmens.
// ------------------------------------------------------------

export const kurzvorstellung = {
  eyebrow: 'Wer dabei ist',
  titel: 'Kurzvorstellung',
  text: 'Vier Tage, drei Formate, viele Perspektiven: Beim YU Festival treffen Wissenschaft, Kunst und Community aufeinander – in Keynote und Podium, Performances und Ausstellungen, Workshops und einem Hackathon. Lernt einige der Menschen kennen, die das Programm prägen.',
  hinweis: 'Ein Klick auf einen Kreis verrät mehr.',
};

export const spotlight: {
  name: string;
  /** was die Person auf dem Festival macht */
  rolle: string;
  wann: string;
  /** Kurzbio, 1–2 Sätze */
  bio: string;
  foto?: string;
  farbe: string;
}[] = [
  {
    name: 'Dr. Jennifer Eickelmann',
    rolle: 'Keynote der YU Konferenz',
    wann: 'Freitag, 23.10. · ab 10:00 Uhr',
    bio: 'Juniorprofessorin für Digitale Transformation in Kultur und Gesellschaft an der FernUniversität in Hagen. Sie forscht zu digitaler Öffentlichkeit, digitaler Gewalt und generativer KI.',
    foto: '/images/kurzvorstellung/jennifer-eickelmann.jpg',
    farbe: 'var(--lime)',
  },
  {
    name: 'Nhi Le',
    rolle: 'Podium der YU Konferenz',
    wann: 'Freitag, 23.10. · Block 1',
    bio: 'Journalistin, Moderatorin und Autorin mit den Schwerpunkten digitale Medienkultur, Pop und Politik. Die ZEIT zählt sie zu den 100 wichtigsten jungen Ostdeutschen.',
    foto: '/images/kurzvorstellung/nhi-le.jpg',
    farbe: 'var(--coral)',
  },
  {
    name: 'Sam Hopkins',
    rolle: 'Ausstellung BAZE und Talk „Community Visions“',
    wann: '22.–25.10. im Foyer · Talk Samstag, 18:00 Uhr',
    bio: 'Künstler und Lehrender an der Kunsthochschule für Medien Köln. Mit BAZE bringt er die Wärme der Nachbarschaft ins digitale Leben – als Offline-Sammlung zum Stöbern und Teilen.',
    foto: '/images/kurzvorstellung/sam-hopkins.jpg',
    farbe: 'var(--lavender)',
  },
  {
    name: 'Julie C. Stamm',
    rolle: 'Performance „Unter Haut“ und Movement-Workshop',
    wann: 'Donnerstag bis Sonntag im Foyer',
    bio: 'Arbeitet an der Schnittstelle von Choreografie und Medienkunst und untersucht, wie digitale Tracking-Technologien unsere Bewegungen und kollektiven Choreografien mitformen.',
    foto: '/images/kurzvorstellung/julie-c-stamm.jpg',
    farbe: 'var(--lime)',
  },
  {
    name: 'Camilla Scholz',
    rolle: 'Ausstellung „Collective Mess“, Creative Coding und Coding Jam',
    wann: '22.–25.10. · Workshops Donnerstag und Samstag',
    bio: 'Medienkünstlerin und Creative Technologist aus Dortmund. Mit Creative Coding und Physical Computing entwickelt sie interaktive Installationen und immersive Erlebnisse.',
    foto: '/images/kurzvorstellung/camilla-scholz.jpg',
    farbe: 'var(--coral)',
  },
];

// ------------------------------------------------------------
//  ABOUT
// ------------------------------------------------------------

export const about = {
  lead: 'Das YU Festival ist ein Festival für digitale Medien. Es wirft einen positiven, optimistischen und aufgeschlossenen Blick auf Digitalität – ohne den kritischen Blick zu verlieren.',
  frage:
    'Wie wollen wir in Zukunft digital zusammenleben? Und wie können wir digitale Räume gemeinsam gestalten?',
  text: [
    'Das YU Festival „New Communities“ lädt dazu ein, genau darüber nachzudenken, zu diskutieren und Dinge auszuprobieren. Denn ein großer Teil unseres Lebens findet heute auch digital statt: Wir informieren uns online, tauschen uns in sozialen Netzwerken aus, spielen, lernen, arbeiten und bleiben über Messenger mit anderen verbunden. Dabei entstehen neue Gemeinschaften, neue Formen von Nähe und Zugehörigkeit, aber auch neue Konflikte, Ausschlüsse und Machtstrukturen.',
    'Das Festival richtet den Blick auf die Menschen und Communities, die digitale Räume mit Leben füllen. Wir fragen, wie digitale Gemeinschaften inklusiver, respektvoller und demokratischer gestaltet werden können. Welche Möglichkeiten bieten digitale Räume für Beteiligung und Vernetzung? Wer wird gehört und wer bleibt unsichtbar? Und wie können wir selbst aktiv mitgestalten, wie wir miteinander digital leben wollen?',
    'Das YU Festival ist ein Ort zum Ausprobieren, Mitmachen und Begegnen. Workshops, Gespräche, künstlerische Arbeiten, Performances und interaktive Formate eröffnen unterschiedliche Zugänge zu den Themen. Wissenschaftliche, kulturelle und kreative Perspektiven treffen aufeinander und bringen neue Ideen ins Gespräch.',
    'Wir wollen digitale Räume nicht einfach hinnehmen, wie sie sind. Wir wollen sie hinterfragen, neu denken und gemeinsam gestalten – kritisch, kreativ, experimentell und manchmal auch spielerisch.',
    'Das YU Festival bringt unterschiedliche Menschen, Communities und Perspektiven zusammen. Egal, ob ihr bereits tief in digitalen Themen steckt oder einfach neugierig seid: Kommt vorbei, lernt neue Menschen kennen, probiert etwas aus und werdet Teil des Gesprächs über unsere gemeinsame digitale Zukunft.',
  ],
};

// Wer das Festival trägt – erscheint auf der Team-Seite und im FAQ.
export const kooperation = [
  'Das YU Festival ist ein Kooperationsprojekt der Abteilung Digitale Kultur im Dortmunder U und der Koordinierungsstelle Digital- und Medienkompetenz aus dem Team Smart City Dortmund.',
  'Unterstützt wird das Festival von vielen tollen Partnern: dem Digitalen Koproduktionslabor, VKII e. V., dem storyLab kiU der Fachhochschule Dortmund, ATEM – Alternative Thoughts on the Emerging Metaverse und dem Mono Listening Café.',
];

// YU Team
export const team: { role: string; names: string }[] = [
  {
    role: 'Organisation und Kuration',
    names: 'Valentin Boczkowski und Sarah Niesius',
  },
  { role: 'Koordination und Kommunikation', names: 'Aliza Austenfeld' },
  { role: 'Veranstaltungsleitung', names: 'Valentin Boczkowski' },
  {
    role: 'Projektkoordinatorin Digital- und Medienkompetenz aus dem Team Smart City Dortmund',
    names: 'Michelle Lange',
  },
  { role: 'Assistenz in der Festivalkoordination', names: 'Alia Brunschier' },
  { role: 'Verwaltung', names: 'Dr. Claudia Beck' },
  { role: 'Grafikdesign Social Media', names: 'Jana Uso' },
  { role: 'Webdesign', names: 'Timo Sodenkamp' },
  { role: 'CI und Logodesign', names: 'Marc Kemper' },
];

// ------------------------------------------------------------
//  PARTNER
// ------------------------------------------------------------

/** Beschreibung des VKII – wird auch im Programm verwendet. */
export const vkiiText = [
  'Der VKII Ruhrbezirk e. V. setzt sich für gesellschaftliche Teilhabe, Empowerment und ein gleichberechtigtes Zusammenleben in einer vielfältigen Gesellschaft ein. Ein besonderer Schwerpunkt liegt auf der Arbeit mit Menschen aus afrikanischen und migrantischen Communities sowie mit Kindern und Jugendlichen.',
  'Mit Bildungsangeboten, Jugendgruppen, Workshops, Beratungen und Veranstaltungen schafft der Verein Räume, in denen Menschen eigene Perspektiven einbringen, Kompetenzen entwickeln und gesellschaftliche Prozesse aktiv mitgestalten können. Dabei verbindet der VKII Community-Arbeit mit politischer Bildung, Medienkompetenz und der Zusammenarbeit mit zivilgesellschaftlichen und öffentlichen Institutionen.',
  'Im Projekt Ankoppeln entwickelt der VKII gemeinsam mit Partnervereinen neue Wege, um insbesondere junge Menschen zu stärken und Zugänge zu gesellschaftlicher und politischer Teilhabe zu schaffen. Digitale Räume werden dabei sowohl als Chance für Vernetzung und Selbstorganisation als auch als Bildungsraum verstanden, in dem ein kritischer Umgang mit Informationen, Technologien und gesellschaftlichen Machtverhältnissen immer wichtiger wird.',
];

export const partners: {
  name: string;
  /** Kurzform für die Logo-Kachel */
  short: string;
  /** ausgeschriebener Name / Zusatz */
  full?: string;
  text: string[];
  url?: string;
}[] = [
  {
    name: 'KoLab',
    short: 'KoLab',
    full: 'Digitales Koproduktionslabor',
    text: [
      'Das Digitale Koproduktionslabor (KoLab) ist eine Reaktion auf den schnell steigenden Bedarf an Expertise und Entfaltungsräumen für den Bereich der digitalen Kunst und Kultur in Nordrhein-Westfalen.',
      'Durch die Komplexität und teils Unzugänglichkeit der Tools in Bereichen wie XR, Coding, VFX etc. und die daraus resultierenden künstlerischen Möglichkeiten benötigen Künstler*innen sowohl in der Konzeptions- als auch in der Umsetzungsphase externe Expertise.',
      'Hier bietet das KoLab verschiedene Unterstützungsmöglichkeiten: von Beratung über die Bereitstellung von Technik bis zu Koproduktionen.',
    ],
  },
  {
    name: 'ATEM Biennial',
    short: 'ATEM',
    full: 'Alternative Thoughts on the Emerging Metaverse',
    text: [
      'ATEM – Alternative Thoughts on the Emerging Metaverse – ist eine Biennale für audiovisuelle Live-Coding- und immersive Kunst, die vollständig im Metaverse stattfindet. Das Besondere: Die virtuellen Räume sind nicht bloß Schauplatz, sondern werden selbst zum künstlerischen Medium.',
      'Im Zentrum stehen Live-Coding-Performances, in denen Code in Echtzeit zu Musik, Bildern und audiovisuellen Welten wird, sowie immersive Arbeiten, die neue Formen von Raum, Klang und Interaktion erfahrbar machen. Internationale Künstler:innen und Kreative nutzen die Möglichkeiten des Metaverse, um Kunst jenseits physischer Grenzen zu denken und neue Formen des Erlebens zu erproben.',
      'Performances, Installationen, Workshops, ArtLabs und eine Konferenz verbinden künstlerische Praxis mit Austausch und Experiment. So entsteht ein ungewöhnlicher Begegnungsraum für alle, die entdecken möchten, wie Kunst in virtuellen Welten aussehen, klingen und erfahrbar sein kann.',
    ],
  },
  {
    name: 'VKII Ruhrbezirk e. V.',
    short: 'VKII',
    text: vkiiText,
  },
  {
    name: 'storyLab kiU',
    short: 'kiU',
    full: 'Fachhochschule Dortmund',
    text: [],
  },
  {
    name: 'Mono Listening Café',
    short: 'Mono',
    text: [],
  },
];

// Logos in der Fußleiste („Ein Festival von“).
// Die Dateien in public/images/foerderer/ sind weiße, zugeschnittene
// Web-Versionen der Originale aus public/images/YU_EinFestivalVon_Logos/.
// `hoehe` gleicht die sehr unterschiedlichen Proportionen optisch aus
// (breite Wortmarken niedriger, das fast quadratische Logo höher).
// Fehlt eine Datei, zeigt die Fußleiste den Namen als Text.
export const footerLogos: {
  heading: string;
  items: { name: string; logo?: string; hoehe?: string; url?: string }[];
}[] = [
  {
    heading: 'Ein Festival von',
    items: [
      { name: 'Dortmunder U', logo: '/images/foerderer/dortmunder-u.png', hoehe: '1.6rem' },
      { name: 'digitale kultur', logo: '/images/foerderer/digitale-kultur.png', hoehe: '3.4rem' },
      { name: 'Smart City Dortmund', logo: '/images/foerderer/smart-city.png', hoehe: '1.9rem' },
      { name: 'Stadt Dortmund', logo: '/images/foerderer/stadt-dortmund.png', hoehe: '2.1rem' },
    ],
  },
];

// ------------------------------------------------------------
//  FAQ
// ------------------------------------------------------------

export const faq: { q: string; a: string[] }[] = [
  {
    q: 'Was kostet der Eintritt?',
    a: [
      'Nichts – das YU Festival ist kostenlos. Für manche Veranstaltungen ist allerdings eine Anmeldung notwendig. Dies seht ihr bei den einzelnen Veranstaltungsbeschreibungen.',
    ],
  },
  {
    q: 'Wo und wann findet das Festival statt?',
    a: [
      'Das YU Festival findet vom 22. bis 25. Oktober 2026 in verschiedenen Veranstaltungsräumen im Dortmunder U statt. 😊',
      'Bei Veranstaltungen, für die ihr euch anmelden müsst, erfahrt ihr den genauen Veranstaltungsort nach eurer Anmeldung.',
      'Während des Festivals hilft euch auch der Empfang im Dortmunder U gerne dabei, den richtigen Veranstaltungsraum zu finden.',
      `Wenn ihr noch Fragen habt, meldet euch jederzeit gerne bei uns unter ${contact.email}!`,
    ],
  },
  {
    q: 'Muss ich mich für Workshops anmelden?',
    a: [
      'Ja, für die Konferenz und die Workshops ist eine Anmeldung notwendig. 😊 Das YU Festival selbst ist kostenlos – bei den jeweiligen Veranstaltungen seht ihr, ob ihr euch vorher anmelden müsst.',
    ],
  },
  {
    q: 'Wie barrierefrei sind die Veranstaltungsorte?',
    a: [
      'Die meisten Veranstaltungs- und Workshopräume sind mit dem Rollstuhl und über den Fahrstuhl erreichbar. Wir möchten allen Interessierten die Teilnahme am YU Festival ermöglichen und unterstützen euch gerne dabei.',
      `Wenn ihr Fragen zur Barrierefreiheit einer bestimmten Veranstaltung habt oder besondere Bedürfnisse besprechen möchtet, schreibt uns gerne an ${contact.email}. 😊`,
    ],
  },
  {
    q: 'Für wen ist das YU Festival?',
    a: [
      'Für alle, die sich kritisch und kreativ mit dem Digitalen, digitalen Räumen und unserer gemeinsamen digitalen Zukunft beschäftigen – und vor allem für alle, die diese Zukunft selbst mitgestalten möchten. 💜',
      'Das Festival ist für kreative und experimentierfreudige Menschen, für alle, die Lust haben, Neues zu lernen, Dinge auszuprobieren und spannende Menschen kennenzulernen. Egal, ob ihr schon tief im Thema steckt oder einfach neugierig seid: Beim YU Festival seid ihr willkommen!',
    ],
  },
  {
    q: 'Wer steckt hinter dem Festival?',
    a: [
      ...kooperation,
      'Das Besondere am YU Festival ist der kooperative Charakter: Wir bringen unterschiedliche Communities, Perspektiven und Akteur*innen zusammen, um gemeinsam neue Ideen, Formate und Räume zu schaffen. Dabei soll das Festival vor allem ein Ort des Austauschs, Mitmachens und Vernetzens sein. 💜',
    ],
  },
];

// ------------------------------------------------------------
//  IMPRESSUM – Pflichtangaben, bitte vor dem Launch ausfüllen
// ------------------------------------------------------------

export const impressum = {
  anbieter: 'tba',
  strasse: 'tba',
  plz: 'tba',
  ort: 'tba',
  vertreten: 'tba',
  email: contact.email,
  telefon: 'tba',
  registergericht: '',
  registernummer: '',
  ustId: '',
};
