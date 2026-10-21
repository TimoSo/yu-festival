// ============================================================
//  SPRACHEN – Deutsch (Standard) und Englisch
//  Die deutsche Seite liegt unter /, die englische unter /en/.
//  Hier stehen die Adressen beider Sprachen, die Navigation und alle
//  kurzen Beschriftungen der Oberfläche. Längere Texte stehen in
//  src/data/site.ts (Deutsch) bzw. src/data/site.en.ts (Englisch).
// ============================================================

export type Lang = 'de' | 'en';
export const SPRACHEN: Lang[] = ['de', 'en'];

// Adressen je Seite und Sprache – mit Schrägstrich am Ende, so liefert
// der Webserver die Seite direkt aus, ohne Umweg über eine Umleitung.
export const ROUTEN = {
  start: { de: '/', en: '/en/' },
  programm: { de: '/programm/', en: '/en/programme/' },
  partner: { de: '/partner/', en: '/en/partners/' },
  festival: { de: '/about/festival/', en: '/en/about/festival/' },
  team: { de: '/about/team/', en: '/en/about/team/' },
  faq: { de: '/faq/', en: '/en/faq/' },
  kontakt: { de: '/kontakt/', en: '/en/contact/' },
  impressum: { de: '/impressum/', en: '/en/legal-notice/' },
} as const;

export type Seite = keyof typeof ROUTEN;

const pfadVon = (url: URL | string) => (typeof url === 'string' ? url : url.pathname);
const ohneSlash = (p: string) => (p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p);

/** Sprache der aktuellen Seite, abgelesen an der Adresse */
export function spracheVon(url: URL | string): Lang {
  const p = pfadVon(url);
  return p === '/en' || p.startsWith('/en/') ? 'en' : 'de';
}

/** Welche Seite gerade angezeigt wird (für Umschalter und Navigation) */
export function seiteVon(url: URL | string): Seite | undefined {
  const p = ohneSlash(pfadVon(url));
  for (const seite of Object.keys(ROUTEN) as Seite[]) {
    if (SPRACHEN.some((l) => ohneSlash(ROUTEN[seite][l]) === p)) return seite;
  }
  return undefined;
}

/** Adresse einer Seite in einer Sprache, optional mit Anker */
export function pfad(lang: Lang, seite: Seite, anker?: string): string {
  return ROUTEN[seite][lang] + (anker ? `#${anker}` : '');
}

// Navigation (Kopf- und Fußleiste). `kinder` erzeugt ein Untermenü.
type NavPunkt = { seite: Seite; label: keyof Ui['nav']; kinder?: NavPunkt[] };
export const NAVIGATION: NavPunkt[] = [
  { seite: 'start', label: 'start' },
  { seite: 'programm', label: 'programm' },
  { seite: 'partner', label: 'partner' },
  {
    seite: 'festival',
    label: 'about',
    kinder: [
      { seite: 'festival', label: 'festival' },
      { seite: 'team', label: 'team' },
    ],
  },
  { seite: 'faq', label: 'faq' },
  { seite: 'kontakt', label: 'kontakt' },
];

// ------------------------------------------------------------
//  Beschriftungen der Oberfläche
// ------------------------------------------------------------

const de = {
  sprache: { de: 'Deutsch', en: 'English', wahl: 'Sprache wählen' },
  nav: {
    start: 'Start',
    programm: 'Programm',
    partner: 'Partner',
    about: 'About',
    festival: 'Festival',
    team: 'Team',
    faq: 'FAQ',
    kontakt: 'Kontakt',
  },
  kopf: {
    zumInhalt: 'Zum Inhalt springen',
    startseite: 'YU Festival – Startseite',
    menueAuf: 'Menü öffnen',
    menueZu: 'Menü schließen',
    hauptnavigation: 'Hauptnavigation',
  },
  fuss: {
    navigation: 'Footer-Navigation',
    team: 'YU Team',
    impressum: 'Impressum',
    eintrittFrei: 'Eintritt frei',
  },
  start: {
    zumProgramm: 'Zum Programm',
    ueberFestival: 'Über das Festival',
    eintrittFrei: 'Eintritt frei',
    worumEyebrow: 'Worum es geht',
    worumTitel: 'Digitale Räume gestalten',
    saeulenEyebrow: 'Drei Säulen',
    partnerEyebrow: 'In Kooperation mit',
    partnerTitel: 'Partner',
    mehrErfahren: 'Mehr erfahren →',
    allePartner: 'Alle Partner ansehen',
    foto: 'Foto',
    profil: 'Kurzvorstellung',
  },
  programm: {
    titel: 'Programm',
    bereichWahl: 'Programmbereich wählen',
    ausstellungen: 'Ausstellungen',
    durchgehend: 'durchgehend an allen vier Tagen',
    anmeldungErforderlich: 'Anmeldung erforderlich',
    perMail: 'Per E-Mail anmelden',
    betreff: 'Anmeldung',
    ort: 'Ort',
  },
  festival: {
    eckdaten: 'Eckdaten',
    termin: 'Termin',
    ort: 'Ort',
    eintritt: 'Eintritt',
    eintrittText: 'frei – für einige Veranstaltungen ist eine Anmeldung nötig',
  },
  team: {
    specialThanks: 'Special Thanks',
    kooperation: 'Ein Kooperationsprojekt',
    zuDenPartnern: 'Zu den Partnern',
  },
  partner: { website: 'Website →' },
  kontakt: {
    aufInstagram: 'auf Instagram',
    faqVor: 'Viele Antworten findest du auch in den ',
    faqLink: 'häufigen Fragen',
    faqNach: '.',
  },
  impressum: {
    haftung: 'Haftungsausschluss',
    bildnachweise: 'Bildnachweise',
    portraet: 'Porträt',
    nurDeutsch: '',
    telefon: 'Telefon',
    email: 'E-Mail',
  },
};

export type Ui = typeof de;

const en: Ui = {
  sprache: { de: 'Deutsch', en: 'English', wahl: 'Choose language' },
  nav: {
    start: 'Home',
    programm: 'Programme',
    partner: 'Partners',
    about: 'About',
    festival: 'Festival',
    team: 'Team',
    faq: 'FAQ',
    kontakt: 'Contact',
  },
  kopf: {
    zumInhalt: 'Skip to content',
    startseite: 'YU Festival – home',
    menueAuf: 'Open menu',
    menueZu: 'Close menu',
    hauptnavigation: 'Main navigation',
  },
  fuss: {
    navigation: 'Footer navigation',
    team: 'YU Team',
    impressum: 'Legal notice',
    eintrittFrei: 'Free admission',
  },
  start: {
    zumProgramm: 'See the programme',
    ueberFestival: 'About the festival',
    eintrittFrei: 'Free admission',
    worumEyebrow: 'What it is about',
    worumTitel: 'Shaping digital spaces',
    saeulenEyebrow: 'Three pillars',
    partnerEyebrow: 'In cooperation with',
    partnerTitel: 'Partners',
    mehrErfahren: 'Learn more →',
    allePartner: 'See all partners',
    foto: 'Photo',
    profil: 'profile',
  },
  programm: {
    titel: 'Programme',
    bereichWahl: 'Choose a programme section',
    ausstellungen: 'Exhibitions',
    durchgehend: 'running on all four days',
    anmeldungErforderlich: 'Registration required',
    perMail: 'Register by email',
    betreff: 'Registration',
    ort: 'Venue',
  },
  festival: {
    eckdaten: 'Key facts',
    termin: 'Dates',
    ort: 'Venue',
    eintritt: 'Admission',
    eintrittText: 'free – some events require registration',
  },
  team: {
    specialThanks: 'Special Thanks',
    kooperation: 'A joint project',
    zuDenPartnern: 'Meet the partners',
  },
  partner: { website: 'Website →' },
  kontakt: {
    aufInstagram: 'on Instagram',
    faqVor: 'You will also find many answers in our ',
    faqLink: 'FAQ',
    faqNach: '.',
  },
  impressum: {
    haftung: 'Disclaimer',
    bildnachweise: 'Photo credits',
    portraet: 'Portrait',
    nurDeutsch:
      'The following disclaimer and data protection information is only available in German. The German version is legally binding.',
    telefon: 'Phone',
    email: 'Email',
  },
};

const UI: Record<Lang, Ui> = { de, en };

/** Beschriftungen für eine Sprache */
export const ui = (lang: Lang): Ui => UI[lang];
