// ============================================================
//  Zentrale Inhalts- & Konfigurationsdatei
//  Texte einmal hier ändern → überall aktualisiert.
//  Das Programm steht in einer eigenen Datei: src/data/programm.ts
// ============================================================

// Kontaktdaten (steht oben, weil weitere Texte darauf verweisen)
export const contact = {
  email: 'info@yufestival.de',
  instagram: 'https://www.instagram.com/yufestival/',
  instagramName: '@yufestival',
  note: 'Du erreichst uns am besten per E-Mail. Neuigkeiten gibt es auf Instagram.',
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
    href: '/about/festival',
    children: [
      { label: 'Festival', href: '/about/festival' },
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
  intro:
    'Beim YU Festival stehen die Gestaltungsmöglichkeiten, die digitale Medien eröffnen, im Zentrum – für das Individuum genauso wie für das „Wir“ als Kollektivgedanken. Wir gehen kreativ, experimentell und verspielt mit digitalen Elementen um und fragen: Wie wollen wir das Digitale gestalten?',
  worum: {
    lead: 'Was wäre, wenn digitale Räume anders aussehen könnten? Offener, kreativer, gemeinschaftlicher? Wenn wir nicht nur Nutzer*innen wären, sondern selbst mitentscheiden und neue Formen des Miteinanders entwickeln würden?',
    text: 'Das YU Festival schafft Raum für genau diese Fragen – und für Ideen, die noch keine fertige Antwort haben.',
  },
};

// Die drei inhaltlichen Säulen des Festivals (Startseite). `accent` ist der
// Farbbalken unter der Karte – kein Lime, die Säulen stehen auf Lime.
export const pillars: { title: string; text: string; accent: string }[] = [
  {
    title: 'Diskurs',
    text: 'Talks, Vorträge und Podien über die Gestaltungsmöglichkeiten digitaler Medien – für das Individuum und für das „Wir“ als Kollektivgedanken.',
    accent: 'var(--lavender)',
  },
  {
    title: 'Workshops',
    text: 'Selbst gestalten, ausprobieren, mitmachen – von Zines über Creative Coding bis zur Zukunftswerkstatt.',
    accent: 'var(--deep-purple)',
  },
  {
    title: 'Digitale Kunst und Performances',
    text: 'Audiovisuelle Performances, digitale Kunst und Installationen machen digitale Medien erlebbar.',
    accent: 'var(--coral)',
  },
];

// ------------------------------------------------------------
//  KURZVORSTELLUNG (Startseite)
//  Fotos: quadratischer Ausschnitt unter `foto` (public/images/personen/),
//  dann erscheint sie automatisch. Bis dahin zeigt der Kreis Initialen.
//  `farbe` ist die Farbe des Rings bzw. später des Kartenrahmens.
// ------------------------------------------------------------

export const kurzvorstellung = {
  eyebrow: 'Wer ist dabei',
  titel: 'Kurzvorstellung',
  text: 'Vier Tage, drei Formate, viele Perspektiven: Beim YU Festival treffen Wissenschaft, Kunst und Community aufeinander – in Keynote und Podium, Performances und Ausstellungen, Workshops und einem Hackathon. Lerne einige der Menschen kennen, die das Programm prägen.',
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
  /** Bildnachweis, erscheint in der Karte und im Impressum */
  fotoCredit?: string;
  farbe: string;
}[] = [
  {
    name: 'Darbyn Luisa Kalkuhl',
    rolle: 'Workshop „Cyberfeministische Strategien“ und Talk „Community Visions“',
    wann: 'Samstag, 24.10. · 14:00 und 18:00 Uhr',
    bio: 'Intermediale_r Künstler_in zwischen Sozialwissenschaft, Medienkunst und performativer Kunst und Gründer_in des Queeren Theater Kollektivs. Darbyn entwickelt eine kritische KI-Methodik für Kunstschaffende.',
    foto: '/images/personen/darbyn-luisa-kalkuhl.webp',
    farbe: 'var(--lime)',
  },
  {
    name: 'Nhi Le',
    rolle: 'Podium der YU Konferenz',
    wann: 'Freitag, 23.10. · Block 1',
    bio: 'Journalistin, Moderatorin und Autorin mit den Schwerpunkten digitale Medienkultur, Pop und Politik. Die ZEIT zählt sie zu den 100 wichtigsten jungen Ostdeutschen.',
    foto: '/images/personen/nhi-le.webp',
    fotoCredit: 'Julia Sang Nguyen',
    farbe: 'var(--coral)',
  },
  {
    name: 'Suraj Mailitafi',
    rolle: 'Podium der YU Konferenz',
    wann: 'Freitag, 23.10. · Block 1',
    bio: 'Politischer Aktivist und Content Creator. Er setzt sich für Antirassismus, Antifaschismus und Chancengerechtigkeit ein und erreicht auf Instagram und TikTok monatlich bis zu 12 Millionen Menschen.',
    foto: '/images/personen/suraj-mailitafi.webp',
    fotoCredit: 'Johannes Bichmann',
    farbe: 'var(--lavender)',
  },
  {
    name: 'Camilo Sandoval',
    rolle: 'Ausstellung „Collective Mess“, Creative Coding, Coding Jam und Talk „Community Visions“',
    wann: '22.–25.10. · Workshops Donnerstag und Samstag',
    bio: 'Multidisziplinärer Künstler mit Schwerpunkt auf experimenteller Informatik, lebt zwischen Köln und Bogotá. Unter dem Pseudonym Janus zeigt er audiovisuelle Performances.',
    foto: '/images/personen/camilo-sandoval.webp',
    farbe: 'var(--lime)',
  },
  {
    name: 'Dr. Tong-Jin Smith',
    rolle: 'Kurzvortrag „Mündig mit Medien“ und Podium der YU Konferenz',
    wann: 'Freitag, 23.10. · Block 1',
    bio: 'Professorin für Journalismus an der Media University of Applied Sciences in Berlin und Mitgründerin des Center for Media and Information Literacy an der FU Berlin. Sie forscht zu Medienmündigkeit und Nachrichtenkompetenz.',
    foto: '/images/personen/tong-jin-smith.webp',
    fotoCredit: 'Tim Gassauer',
    farbe: 'var(--coral)',
  },
  {
    name: 'Schnellhefter*innen',
    rolle: 'Speed-Zine- und Zine-Workshops',
    wann: 'Freitag bis Sonntag',
    bio: 'Dortmunder Workshop-Kollektiv rund um die Do-it-yourself-Ästhetik der Zine-Kultur: Lisa Fischer, Max Rüthers und Luis F. Düllberg. Kunst und Gestaltung müssen für sie kein Profi-Terrain sein.',
    foto: '/images/personen/schnellhefterinnen.webp',
    farbe: 'var(--lavender)',
  },
  {
    name: 'Dr. Jennifer Eickelmann',
    rolle: 'Keynote und Podium der YU Konferenz',
    wann: 'Freitag, 23.10. · ab 10:00 Uhr',
    bio: 'Juniorprofessorin für Digitale Transformation in Kultur und Gesellschaft an der FernUniversität in Hagen. Sie forscht zu digitaler Öffentlichkeit, digitaler Gewalt und generativer KI.',
    foto: '/images/personen/jennifer-eickelmann.webp',
    farbe: 'var(--lime)',
  },
  {
    name: 'Camilla Scholz',
    rolle: 'Ausstellung „Collective Mess“, Creative Coding und Coding Jam',
    wann: '22.–25.10. · Workshops Donnerstag und Samstag',
    bio: 'Medienkünstlerin und Creative Technologist aus Dortmund. Mit Creative Coding und Physical Computing entwickelt sie interaktive Installationen und immersive Erlebnisse.',
    foto: '/images/personen/camilla-scholz.webp',
    farbe: 'var(--coral)',
  },
  {
    name: 'Raphaël de Courville',
    rolle: 'Talk „Community Visions“',
    wann: 'Samstag, 24.10. · 18:00 Uhr',
    bio: 'Arbeitet zwischen Kunst und Design mit generativen Systemen, Mustern, Interaktivität und Zeit – aus Paris, heute in Berlin. Raphaël hat Creative Code Berlin mitgegründet und ist seit 2022 Processing Community Lead der Processing Foundation.',
    foto: '/images/personen/raphael-de-courville.webp',
    farbe: 'var(--lavender)',
  },
];

// ------------------------------------------------------------
//  ABOUT
// ------------------------------------------------------------

export const about = {
  // Einleitung im Seitenkopf – kurz halten (max. ~80 Zeichen), sonst wird
  // der Kopf höher als die der anderen Seiten
  lead: 'Ein Festival für digitale Medien – aufgeschlossen, optimistisch und kritisch.',
  titel: 'Mitreden, mitmachen, mitgestalten',
  frage:
    'Wie wollen wir in Zukunft digital zusammenleben? Und wie können wir digitale Räume gemeinsam gestalten?',
  text: [
    'Das YU Festival lädt dazu ein, genau darüber nachzudenken, zu diskutieren und Dinge auszuprobieren. Denn ein großer Teil unseres Lebens findet heute digital statt: Wir informieren uns online, tauschen uns in sozialen Netzwerken aus, spielen, lernen, arbeiten und bleiben über Messenger verbunden. Dabei entstehen neue Gemeinschaften und neue Formen von Nähe – aber auch neue Konflikte, Ausschlüsse und Machtstrukturen.',
    'Das Festival richtet den Blick auf die Menschen und Communities, die digitale Räume mit Leben füllen. Wie werden digitale Gemeinschaften inklusiver, respektvoller und demokratischer? Wer wird gehört und wer bleibt unsichtbar? Workshops, Gespräche, künstlerische Arbeiten und Performances eröffnen dazu ganz unterschiedliche Zugänge – wissenschaftlich, kulturell und kreativ.',
    'Wir wollen digitale Räume nicht einfach hinnehmen, wie sie sind, sondern sie gemeinsam neu denken – kritisch, kreativ und manchmal auch spielerisch. Egal, ob du schon tief in digitalen Themen steckst oder einfach neugierig bist: Komm vorbei, probier etwas aus und werde Teil des Gesprächs über unsere gemeinsame digitale Zukunft.',
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
  { role: 'Grafikdesign Social Media', names: 'Jana Canê' },
  { role: 'Webdesign', names: 'Timo Sodenkamp' },
  { role: 'CI und Logodesign', names: 'Marc Kemper' },
  { role: 'Creative Coding Visuals', names: 'Florencia Alonso' },
];

// Dank an alle, die das Festival unterstützen (Team-Seite)
export const specialThanks = [
  'Mirjam Gaffran',
  'Judith Brinkmann',
  'Daria Rothkegel',
  'Regina Selter',
  'Matthias Kozka',
  'Laurin Bürmann',
  'Michael Nguyen',
  'Fabian Bentrup',
  'Harald Opel',
  'Tobias Biseke',
  'Stephan Hauptmann',
  'Kai Czerwonka',
  'Armel Djiné',
  'Matel Ba',
  'Miu-Wah Lok',
  'Ilka Wessel',
  'Jannis Kötting',
  'Max Tröndle',
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
  /** Anker auf der Partnerseite (/partner#id) – Ziel der Kacheln auf Start */
  id: string;
  name: string;
  /** Kurzform für die Logo-Kachel */
  short: string;
  /** ausgeschriebener Name / Zusatz */
  full?: string;
  text: string[];
  url?: string;
}[] = [
  {
    id: 'kolab',
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
    id: 'atem',
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
    id: 'vkii',
    name: 'VKII Ruhrbezirk e. V.',
    short: 'VKII',
    text: vkiiText,
  },
  {
    id: 'kiu',
    name: 'storyLab kiU',
    short: 'kiU',
    full: 'Fachhochschule Dortmund',
    text: [],
  },
  {
    id: 'mono',
    name: 'Mono Listening Café',
    short: 'Mono',
    text: [
      'Das mono ist das Listening Café im Dortmunder Plattenladen Black Plastic. Hervorragender, klassischer Espresso trifft auf McIntosh-Verstärker und Tannoy-Lautsprecher – ein Ort, um im Alltag bewusst Musik verschiedenster Spielarten zu hören, Lesungen oder kleine Konzerte zu erleben oder mehrmals die Woche wechselnden DJs zuzuhören und -schauen. Oder um einfach nur einen Kaffee zu trinken und in Musikbüchern zu blättern.',
    ],
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
      'Nichts – das YU Festival ist kostenlos. Für manche Veranstaltungen ist allerdings eine Anmeldung notwendig. Das siehst du bei den einzelnen Veranstaltungsbeschreibungen.',
    ],
  },
  {
    q: 'Wo und wann findet das Festival statt?',
    a: [
      'Das YU Festival findet vom 22. bis 25. Oktober 2026 in verschiedenen Veranstaltungsräumen im Dortmunder U statt.',
      'Bei Veranstaltungen, für die du dich anmelden musst, erfährst du den genauen Veranstaltungsort nach deiner Anmeldung.',
      'Während des Festivals hilft dir auch der Empfang im Dortmunder U gerne dabei, den richtigen Veranstaltungsraum zu finden.',
      `Wenn du noch Fragen hast, melde dich jederzeit gerne bei uns unter ${contact.email}!`,
    ],
  },
  {
    q: 'Muss ich mich für Workshops anmelden?',
    a: [
      'Ja, für die Konferenz und die Workshops ist eine Anmeldung notwendig. Das YU Festival selbst ist kostenlos – bei den jeweiligen Veranstaltungen siehst du, ob du dich vorher anmelden musst.',
    ],
  },
  {
    q: 'Wie barrierefrei sind die Veranstaltungsorte?',
    a: [
      'Die meisten Veranstaltungs- und Workshopräume sind mit dem Rollstuhl und über den Fahrstuhl erreichbar. Wir möchten allen Interessierten die Teilnahme am YU Festival ermöglichen und unterstützen dich gerne dabei.',
      `Wenn du Fragen zur Barrierefreiheit einer bestimmten Veranstaltung hast oder besondere Bedürfnisse besprechen möchtest, schreib uns gerne an ${contact.email}.`,
    ],
  },
  {
    q: 'Für wen ist das YU Festival?',
    a: [
      'Für alle, die sich kritisch und kreativ mit dem Digitalen, digitalen Räumen und unserer gemeinsamen digitalen Zukunft beschäftigen – und vor allem für alle, die diese Zukunft selbst mitgestalten möchten.',
      'Das Festival ist für kreative und experimentierfreudige Menschen, für alle, die Lust haben, Neues zu lernen, Dinge auszuprobieren und spannende Menschen kennenzulernen. Egal, ob du schon tief im Thema steckst oder einfach neugierig bist: Beim YU Festival bist du willkommen!',
    ],
  },
  {
    q: 'Wer steckt hinter dem Festival?',
    a: [
      ...kooperation,
      'Das Besondere am YU Festival ist der kooperative Charakter: Wir bringen unterschiedliche Communities, Perspektiven und Akteur*innen zusammen, um gemeinsam neue Ideen, Formate und Räume zu schaffen. Dabei soll das Festival vor allem ein Ort des Austauschs, Mitmachens und Vernetzens sein.',
    ],
  },
];
