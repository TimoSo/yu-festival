// ============================================================
//  ENGLISCHE TEXTE – gleiche Struktur wie site.ts
//  Alles, was nicht übersetzt wird (Fotos, Farben, Logos, Namen,
//  Links), kommt direkt aus der deutschen Datei.
// ============================================================

import * as de from './site';

export const contact = {
  ...de.contact,
  note: 'The best way to reach us is by email. News is posted on Instagram.',
};

export const site = {
  ...de.site,
  // im Englischen steht der englische Untertitel vorne
  subtitle: 'media.art.society',
  subtitleAlt: 'Medien.Kunst.Diskurs',
  date: '22–25 October 2026',
  description:
    'YU Festival – media.art.society: 22–25 October 2026 at the Dortmunder U. Performances, workshops, talks, a conference and a hackathon on digital spaces and community. Free admission.',
};

export const seiten: typeof de.seiten = {
  programm: {
    title: 'Programme',
    description:
      'The programme of the YU Festival, 22–25 October 2026 at the Dortmunder U: festival, conference and hackathon.',
  },
  partner: {
    title: 'Partners',
    description:
      'The partners of the YU Festival: KoLab, ATEM Biennial, VKII Ruhrbezirk e. V., storyLab kiU, Mono Listening Café and Processing Community Day.',
    eyebrow: 'In cooperation with',
    lead: 'The festival is supported by many great partners.',
  },
  festival: {
    title: 'The festival',
    description: 'About the YU Festival – how do we want to live together digitally?',
    eyebrow: 'About',
  },
  team: {
    title: 'YU Team',
    description: 'The team behind the YU Festival.',
    eyebrow: 'About',
    lead: 'The people who make the YU Festival happen.',
  },
  faq: {
    title: 'Good to know',
    metaTitle: 'FAQ',
    description: 'Frequently asked questions about the YU Festival.',
    eyebrow: 'FAQ',
    lead: 'The most important answers at a glance. Missing something? Just write to us.',
  },
  kontakt: {
    title: 'Get in touch',
    metaTitle: 'Contact',
    description: 'Contact the YU Festival – write to us.',
    eyebrow: 'Contact',
  },
  impressum: {
    title: 'Legal notice',
    description: 'Legal notice, disclaimer and data protection information of the YU Festival.',
    eyebrow: 'Legal',
    lead: 'Provider information, disclaimer and data protection.',
  },
};

// ------------------------------------------------------------
//  START
// ------------------------------------------------------------

export const landing: typeof de.landing = {
  intro:
    'At the YU Festival, the creative possibilities that digital media open up take centre stage – for the individual as much as for the “we” as a collective idea. We engage with digital elements in creative, experimental and playful ways and ask: how do we want to shape the digital?',
  worum: {
    lead: 'What if digital spaces could look different? More open, more creative, more communal? What if we were not just users, but could help decide and develop new forms of togetherness ourselves?',
    text: 'The YU Festival creates space for exactly these questions – and for ideas that don’t have a finished answer yet.',
  },
};

export const pillars: typeof de.pillars = [
  {
    ...de.pillars[0],
    title: 'Discourse',
    text: 'Talks, lectures and panels on the creative possibilities of digital media – for the individual and for the “we” as a collective idea.',
  },
  {
    ...de.pillars[1],
    title: 'Workshops',
    text: 'Make things, try them out, join in – from zines and creative coding to a future workshop.',
  },
  {
    ...de.pillars[2],
    title: 'Digital art and performances',
    text: 'Audiovisual performances, digital art and installations make digital media tangible.',
  },
];

// ------------------------------------------------------------
//  MEET THE PEOPLE (Kurzvorstellung)
// ------------------------------------------------------------

export const kurzvorstellung: typeof de.kurzvorstellung = {
  eyebrow: 'Who is taking part',
  titel: 'Meet the people',
  text: 'Four days, three formats, many perspectives: at the YU Festival, academia, art and community come together – in a keynote and panel, performances and exhibitions, workshops and a hackathon. Get to know some of the people who shape the programme.',
  hinweis: 'Click on a circle to find out more.',
};

// gleiche Reihenfolge wie in site.ts – Foto, Farbe, Name kommen von dort
const spotlightEn: { rolle: string; wann: string; bio: string }[] = [
  {
    rolle: 'Workshop “Cyberfeminist strategies” and talk “Community Visions”',
    wann: 'Saturday, 24 Oct · 14:00 and 18:00',
    bio: 'Intermedia artist working between social science, media art and performance, and founder of the Queeres Theater Kollektiv. Darbyn develops a critical AI methodology for artists.',
  },
  {
    rolle: 'Panel at the YU Conference',
    wann: 'Friday, 23 Oct · block 1',
    bio: 'Journalist, moderator and author focusing on digital media culture, pop and politics. ZEIT counts her among the 100 most important young East Germans.',
  },
  {
    rolle: 'Panel at the YU Conference',
    wann: 'Friday, 23 Oct · block 1',
    bio: 'Political activist and content creator. He campaigns against racism and fascism and for equal opportunities, reaching up to 12 million people a month on Instagram and TikTok.',
  },
  {
    rolle: 'Exhibition “Collective Mess”, creative coding, coding jam and talk “Community Visions”',
    wann: '22–25 Oct · workshops Thursday and Saturday',
    bio: 'Multidisciplinary artist focusing on experimental computing, based between Cologne and Bogotá. Under the pseudonym Janus he performs audiovisual sets.',
  },
  {
    rolle: 'Short talk “Mündig mit Medien” and panel at the YU Conference',
    wann: 'Friday, 23 Oct · block 1',
    bio: 'Professor of Journalism at the Media University of Applied Sciences in Berlin and co-founder of the Center for Media and Information Literacy at FU Berlin. Her research focuses on media maturity and news literacy.',
  },
  {
    rolle: 'Speed zine and zine workshops',
    wann: 'Friday to Sunday',
    bio: 'Dortmund workshop collective devoted to the do-it-yourself aesthetics of zine culture: Lisa Fischer, Max Rüthers and Luis F. Düllberg. For them, art and design are not just for professionals.',
  },
  {
    rolle: 'Keynote and panel at the YU Conference',
    wann: 'Friday, 23 Oct · from 10:00',
    bio: 'Junior Professor of Digital Transformation in Culture and Society at FernUniversität in Hagen. Her research covers the digital public sphere, digital violence and generative AI.',
  },
  {
    rolle: 'Exhibition “Collective Mess”, creative coding and coding jam',
    wann: '22–25 Oct · workshops Thursday and Saturday',
    bio: 'Media artist and creative technologist from Dortmund. Using creative coding and physical computing, she develops interactive installations and immersive experiences.',
  },
  {
    rolle: 'Talk “Community Visions”',
    wann: 'Saturday, 24 Oct · 18:00',
    bio: 'Artist and designer from Paris, now based in Berlin, working with generative systems, patterns, interactivity and time. Raphaël co-founded Creative Code Berlin and has been Processing Community Lead at the Processing Foundation since 2022.',
  },
];

export const spotlight: typeof de.spotlight = de.spotlight.map((person, i) => ({
  ...person,
  ...(spotlightEn[i] ?? {}),
}));

// ------------------------------------------------------------
//  ABOUT
// ------------------------------------------------------------

export const about: typeof de.about = {
  lead: 'A festival for digital media – open-minded, optimistic and critical.',
  titel: 'Speak up, join in, shape it',
  frage:
    'How do we want to live together digitally in the future? And how can we shape digital spaces together?',
  text: [
    'The YU Festival invites you to think about exactly this, to discuss it and to try things out. After all, a large part of our lives now takes place digitally: we get our information online, exchange ideas on social networks, play, learn, work and stay connected via messengers. This gives rise to new communities and new forms of closeness – but also to new conflicts, exclusions and power structures.',
    'The festival focuses on the people and communities who fill digital spaces with life. How can digital communities become more inclusive, respectful and democratic? Who is heard and who remains invisible? Workshops, conversations, artworks and performances open up very different approaches – academic, cultural and creative.',
    'We don’t want to simply accept digital spaces as they are, but to rethink them together – critically, creatively and sometimes playfully. Whether you are already deep into digital topics or simply curious: come along, try something out and become part of the conversation about our shared digital future.',
  ],
};

export const kooperation = [
  'The YU Festival is a joint project of the Digital Culture department at the Dortmunder U and the Digital and Media Literacy Coordination Office of the Smart City Dortmund team.',
  'The festival is supported by many great partners: the Digitales Koproduktionslabor (KoLab), VKII e. V., the storyLab kiU of Fachhochschule Dortmund, ATEM – Alternative Thoughts on the Emerging Metaverse, the Mono Listening Café and Processing Community Day (PCD@Dortmund).',
];

const rollenEn = [
  'Organisation and curation',
  'Coordination and communication',
  'Event management',
  'Project coordinator for digital and media literacy, Smart City Dortmund team',
  'Assistant festival coordination',
  'Administration',
  'Social media graphic design',
  'Web design',
  'CI and logo design',
  'Creative coding visuals',
];

export const team: typeof de.team = de.team.map((eintrag, i) => ({
  role: rollenEn[i] ?? eintrag.role,
  names: eintrag.names.replace(/ und /g, ' and '),
}));

export const specialThanks = de.specialThanks;

// ------------------------------------------------------------
//  PARTNERS
// ------------------------------------------------------------

export const vkiiText = [
  'VKII Ruhrbezirk e. V. works for social participation, empowerment and equal coexistence in a diverse society. A particular focus lies on working with people from African and migrant communities as well as with children and young people.',
  'Through educational programmes, youth groups, workshops, counselling and events, the association creates spaces in which people can contribute their own perspectives, develop skills and actively help shape social processes. VKII combines community work with civic education, media literacy and cooperation with civil-society and public institutions.',
  'In the project Ankoppeln, VKII and its partner associations develop new ways of empowering young people in particular and opening up access to social and political participation. Digital spaces are understood both as an opportunity for networking and self-organisation and as a space for learning, in which a critical approach to information, technologies and social power relations is becoming increasingly important.',
];

const partnerEn: Record<string, { full?: string; text: string[] }> = {
  kolab: {
    full: 'Digital Co-Production Lab',
    text: [
      'The Digitales Koproduktionslabor (KoLab) is a response to the rapidly growing need for expertise and creative space in the field of digital art and culture in North Rhine-Westphalia.',
      'Because of the complexity and partial inaccessibility of tools in areas such as XR, coding and VFX – and the artistic possibilities that result from them – artists need external expertise both when developing concepts and when realising them.',
      'This is where KoLab offers various forms of support: from advice and the provision of technology to co-productions.',
    ],
  },
  atem: {
    text: [
      'ATEM – Alternative Thoughts on the Emerging Metaverse – is a biennial for audiovisual live coding and immersive art that takes place entirely in the metaverse. What makes it special: the virtual spaces are not just a setting but become an artistic medium themselves.',
      'At its heart are live coding performances in which code turns into music, images and audiovisual worlds in real time, as well as immersive works that make new forms of space, sound and interaction tangible. International artists and creatives use the possibilities of the metaverse to think about art beyond physical boundaries and to try out new forms of experience.',
      'Performances, installations, workshops, art labs and a conference combine artistic practice with exchange and experimentation – creating an unusual meeting place for everyone who wants to discover how art in virtual worlds can look, sound and feel.',
    ],
  },
  vkii: { text: vkiiText },
  kiu: { full: 'Fachhochschule Dortmund – University of Applied Sciences and Arts', text: [] },
  mono: {
    text: [
      'mono is the listening café in the Dortmund record shop Black Plastic. Excellent classic espresso meets McIntosh amplifiers and Tannoy speakers – a place to listen consciously to all kinds of music in everyday life, to enjoy readings or small concerts, or to listen to and watch changing DJs several times a week. Or simply to drink a coffee and browse through music books.',
    ],
  },
  pcd: {
    text: [
      'Processing Community Day is a free community event celebrating the intersection of design, art, code and technology.',
      'Whether you already work with Processing or p5.js, are interested in creative coding, study design or technology, or simply want to discover new ways of creating with code, PCD@Dortmund offers an opportunity to meet like-minded people, exchange ideas and create together.',
      'The event welcomes experienced creative coders as well as complete beginners. No previous knowledge of Processing or p5.js is required.',
    ],
  },
};

export const partners: typeof de.partners = de.partners.map((p) => ({ ...p, ...(partnerEn[p.id] ?? {}) }));

export const footerLogos: typeof de.footerLogos = de.footerLogos.map((reihe) => ({
  ...reihe,
  heading: 'A festival by',
}));

// ------------------------------------------------------------
//  FAQ
// ------------------------------------------------------------

export const faq: typeof de.faq = [
  {
    q: 'How much does it cost?',
    a: [
      'Nothing – the YU Festival is free of charge. Some events do require registration, though. You will find this information in the individual event descriptions.',
    ],
  },
  {
    q: 'Where and when does the festival take place?',
    a: [
      'The YU Festival takes place from 22 to 25 October 2026 in various venues at the Dortmunder U.',
      'For events that require registration, you will receive the exact location after registering.',
      'During the festival, the reception desk at the Dortmunder U will also be happy to help you find the right room.',
      `If you have any further questions, feel free to contact us at any time at ${de.contact.email}!`,
    ],
  },
  {
    q: 'Do I need to register for workshops?',
    a: [
      'Yes, registration is required for the conference and the workshops. The YU Festival itself is free – each event shows whether you need to register in advance.',
    ],
  },
  {
    q: 'How accessible are the venues?',
    a: [
      'Most event and workshop rooms are wheelchair accessible and can be reached by lift. We want everyone who is interested to be able to take part in the YU Festival and are happy to support you.',
      `If you have questions about the accessibility of a particular event or would like to discuss specific needs, please write to us at ${de.contact.email}.`,
    ],
  },
  {
    q: 'Who is the YU Festival for?',
    a: [
      'For everyone who engages critically and creatively with the digital, digital spaces and our shared digital future – and above all for everyone who wants to help shape that future.',
      'The festival is for creative and experimental people, for everyone who feels like learning something new, trying things out and meeting interesting people. Whether you are already deep into the subject or simply curious: you are welcome at the YU Festival!',
    ],
  },
  {
    q: 'Who is behind the festival?',
    a: [
      ...kooperation,
      'What makes the YU Festival special is its cooperative character: we bring together different communities, perspectives and people to create new ideas, formats and spaces together. Above all, the festival aims to be a place for exchange, participation and networking.',
    ],
  },
];
