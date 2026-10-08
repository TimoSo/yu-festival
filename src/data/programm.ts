// ============================================================
//  PROGRAMM – alle Programmpunkte des YU Festivals
//  Drei Bereiche (Festival, Konferenz, Hackathon), vier Tage.
//  Texte, die mehrfach vorkommen, stehen oben einmal als
//  Konstante und werden unten nur referenziert.
// ============================================================

import { contact, vkiiText } from './site';

export type TrackId = 'festival' | 'konferenz' | 'hackathon';

export type Person = { name: string; bio?: string[] };

/** Zwischenabschnitt im aufgeklappten Programmpunkt, z. B. „Workshopleitung“. */
export type Abschnitt = { label: string; people?: Person[]; text?: string[] };

export type Inhalt = {
  id: string;
  title: string;
  /** Kurzzeile unter dem Titel, z. B. „mit …“ oder „von …“ */
  by?: string;
  text: string[];
  sections?: Abschnitt[];
  /** Absätze nach den Abschnitten */
  outro?: string[];
  /** Hervorgehobener Hinweis, z. B. bei mehrtägigen Workshops */
  note?: string;
  location?: string;
  /** true = Anmeldung nötig, false = ausdrücklich keine Anmeldung */
  registration?: boolean;
  link?: { label: string; href: string };
  /** Bild im aufgeklappten Programmpunkt; Breite/Höhe in Pixeln, damit
   *  die Karte beim Aufklappen die richtige Höhe kennt */
  bild?: { src: string; alt: string; breite: number; hoehe: number };
};

export type ProgrammEvent = Inhalt & {
  track: TrackId;
  day: number;
  start: string;
  end?: string;
  category: string;
};

export type Ausstellung = Inhalt & { period: string };

// ------------------------------------------------------------
//  Festivaltage
// ------------------------------------------------------------

export const days: { nr: number; weekday: string; date: string }[] = [
  { nr: 1, weekday: 'Donnerstag', date: '22.10.2026' },
  { nr: 2, weekday: 'Freitag', date: '23.10.2026' },
  { nr: 3, weekday: 'Samstag', date: '24.10.2026' },
  { nr: 4, weekday: 'Sonntag', date: '25.10.2026' },
];

// ------------------------------------------------------------
//  Anmeldung
// ------------------------------------------------------------

export const anmeldung = {
  email: contact.email,
  text: `Für diese Veranstaltung ist eine Anmeldung erforderlich. Wenn du gerne dabei sein möchtest, schreib uns einfach eine E-Mail an ${contact.email}. Wir freuen uns auf deine Anmeldung!`,
  keine: 'Es ist keine Anmeldung erforderlich.',
};

// ------------------------------------------------------------
//  Mehrfach verwendete Texte
// ------------------------------------------------------------

const ORT_FOYER = 'Foyer im Dortmunder U';

const ZINE_BILD = {
  src: '/images/programm/zine-workshop.webp',
  alt: 'Zine-Material und Stifte auf einem Tisch unter Schwarzlicht',
  breite: 1200,
  hoehe: 800,
};

const UNTER_HAUT_TEXT = [
  '„Unter Haut“ (~40 min) ist ein multimediales Performance-Projekt über Körper und Digitalität im immersiven Raum und Foyer des Dortmunder U. Vier Performer:innen bewegen sich in vernetzten Kostümen. Klang (Kehlmikrofone), Bewegung und Projektion (aus Bewegungsdaten) greifen ineinander und erzeugen ein choreografisches Feedbacksystem.',
  'Die „skins“-Kostüme verbinden jeweils zwei Performer:innen und machen Nähe, Abhängigkeit und vernetzte Identität physisch erfahrbar – zentrale Aspekte des Stücks und digitaler Repräsentation. Die Basis der Klanglandschaft im Multichannelsystem bilden Live-Daten aus Kehlmikrofonen und die der Projektion Bewegungsdaten. Beide Module beeinflussen sich gegenseitig mehr und mehr über das Stück hinweg.',
  'Die Choreographie zwischen dem Foyer und dem Immersiven Raum wird durch Körper, Projektion und Klang gebildet. Das Publikum bewegt sich in Gruppen zwischen diesen Räumen, wodurch eine fragmentierte, feed-ähnliche Erfahrung entsteht.',
  'Das Stück thematisiert digitale Zwillinge, geteilte Kontrolle und die Frage, was wir als Körper verstehen im digitalen Zeitalter. In Kooperation mit Witten entstehen Workshops, Performances und eine installative Nachnutzung im Dortmunder U.',
  'Das Projekt wird unterstützt durch die Neue Künste Ruhr Förderung, das Kulturforum Witten und das Koproduktionslabor Dortmund. Der Probezeitraum ist zwischen Ende September und Anfang Oktober mit ersten Performances im Dortmunder U ab Ende Oktober. Das Stück ist als Site-Specific konzipiert und kann sich nach den geförderten Performances auch in anderen Räumen einnisten.',
];

const UNTER_HAUT_ARTISTS: Abschnitt = {
  label: 'Artists',
  text: [
    'Julie C. Stamm, Anna Deborah Disse, Madelyn Byrd, Lou Croff Blake, Scott Carver, Barış Pekçağlıyan',
  ],
};

// steht einmal zentral in site.ts (auch auf der Partnerseite)
const VKII_ORG = vkiiText;

const VKII_WORKSHOP_TEXT = [
  'Fake News erkennen, Hate Speech einordnen, Quellen überprüfen. Klingt einfach? Zwei Jugendliche aus der Youth Group des VKII Ruhrbezirk e. V. stellen die Medienkompetenz der Teilnehmenden auf die Probe.',
  'In einem interaktiven Quiz geht es darum, wie sicher wir uns tatsächlich durch digitale Informationsräume bewegen. Anschließend wechseln die Perspektiven: Die Jugendlichen berichten, wie sie selbst für Themen wie Desinformation, Hate Speech und den kritischen Umgang mit Social Media sensibilisiert wurden. Gemeinsam wird diskutiert, wie Bildungsangebote junge Menschen erreichen können und ob Erwachsene eigentlich automatisch medienkompetenter sind.',
  'Dabei geht es auch um Demokratie: Wer entscheidet, welchen Informationen wir vertrauen? Wie beeinflussen digitale Inhalte unsere Meinungsbildung? Und warum sind junge Menschen von Desinformation und Hate Speech besonders betroffen?',
  'Ein Workshop von Jugendlichen für Jugendliche und Erwachsene mit Quiz, Diskussion und einem kritischen Blick auf unseren digitalen Alltag.',
];

const VKII_WORKSHOP_SECTIONS: Abschnitt[] = [
  {
    label: 'Workshopleitung',
    text: ['Desire Bigalske und Karl Nyuydine vom VKII Ruhrbezirk e. V.'],
  },
  { label: 'Über den VKII Ruhrbezirk e. V.', text: VKII_ORG },
];

const SCHNELLHEFTER = [
  'Die Schnellhefter*innen sind ein Dortmunder Workshop-Kollektiv, das sich der Do-it-yourself-Ästhetik der Zine-Kultur verschrieben hat. Hinter dem Kollektiv stehen Lisa Fischer, Max Rüthers und Luis F. Düllberg.',
  'Lisa ist freie Szenografin, Tattoo Artist und Mitgründerin des Flinta*sialand Festivals. Max arbeitet ebenfalls als freier Szenograf und ermöglicht das Ausstellungsformat Werni & Fini im Rekorder. Luis ist Musiker und freier Grafikdesigner mit einer Leidenschaft für Siebdruck und Riso.',
  'Angetrieben werden die Schnellhefter*innen von der Überzeugung, dass Kunst und Gestaltung kein Profi-Terrain sein muss. Sie übersetzen die Unmittelbarkeit der Zine-Bewegung in einen zugänglichen Rahmen gegen erlernten Perfektionismus, mit dem Ziel, freies, gemeinschaftliches Gestalten für alle möglich zu machen.',
];

const SPEED_ZINE_TEXT = [
  'Ein Blatt. Ein Kuli. Acht Seiten. Let’s go!',
  'Was ist eigentlich ein Zine? Und welche Geschichten kann man damit erzählen? Zum Kick-off zeigen wir Schnellhefter*innen, warum wir dieses kleine, selbstgemachte Medium so lieben: Zines können persönlich, politisch, albern, chaotisch, laut oder leise sein. Und vor allem müssen sie nicht perfekt sein.',
  'Gemeinsam falten wir im 2-stündigen Workshop aus einem A3-Blatt ein eigenes kleines Heft und unterstützen dich beim Gestalten der Seiten mit kleinen Kreativimpulsen. Dabei geht es weniger ums Nachdenken als ums Ausprobieren.',
  'Wir zeigen, wie niedrigschwelliges Gestalten möglich ist, wenn Material und Arbeitszeit bewusst begrenzt sind. Komm vorbei, schnapp dir ein Blatt und einen Kuli und mach ein Zine mit uns.',
];

const ZINE_WOCHENENDE_TEXT = [
  'Am Samstag und Sonntag wird es intensiver: Die Schnellhefter*innen bringen analoge und digitale Tools zusammen. An verschiedenen Kreativstationen wird gezeichnet, geschrieben, fotografiert, collagiert, kopiert, verfremdet und digital weitergearbeitet. Dabei geht es nicht um Perfektion, sondern um Selbstwirksamkeit in Zeiten von glattgebügelten KI-Welten.',
  'Gemeinsam fragen wir: Welche Themen beschäftigen uns? Wer entscheidet, was relevant ist und sichtbar wird? Und wie können Zines persönliche, politische, kritische oder nischige Inhalte nach außen tragen – unabhängig von Feeds und Algorithmen?',
  'Analoge Arbeiten wandern ins Digitale, digitale Elemente zurück aufs Papier. Mit spielerischen Tools und einem Online-Zine-Maker entwickeln wir die entstandenen Fragmente weiter und bringen sie in neue Formen. So entsteht ein offener, prozesshafter Raum zwischen Papier und Bildschirm, in dem eigene Ideen, Austausch und Autor*innenschaft im Mittelpunkt stehen.',
];

const ZINE_WOCHENENDE_HINWEIS =
  'Zweitägiger Workshop: Samstag, 24.10., 14:00–17:30 Uhr und Sonntag, 25.10., 14:00–18:00 Uhr.';

const CAMILLA_SCHOLZ: Person = {
  name: 'Camilla Scholz',
  bio: [
    'Camilla Scholz ist Medienkünstlerin und Creative Technologist aus Dortmund und arbeitet an der Schnittstelle zwischen experimentellem Programmieren, Kunst und Wissenschaft und interaktiven Umgebungen. Sie hat einen Master-Abschluss in Interface Cultures an der Universität der Künste Linz sowie einen Hintergrund in Human-Computer-Interaktion mit einem Bachelor-Abschluss in Creative Technology an der Universität Twente. Mithilfe von Creative Coding und Physical Computing entwickelt sie interaktive Installationen und immersive Erlebnisse, die neue Formen der Wahrnehmung und des Erlebens erkunden.',
  ],
};

const CAMILO_SANDOVAL: Person = {
  name: 'Camilo Sandoval',
  bio: [
    'Camilo Sandoval ist als multidisziplinärer Künstler mit Schwerpunkt auf experimenteller Informatik tätig. Derzeit erforscht er die ästhetischen und technologischen Möglichkeiten des Kunsthandwerks im Kontext von Datensouveränität und Autonomie. Er präsentiert audiovisuelle Performances unter dem Pseudonym Janus sowie als Teil des Comedy-Duos Super Mora Bros. oder des Noise- und Metakommunikations-Trios Fauxmalhaut. Er lebt und arbeitet derzeit abwechselnd in Köln und Bogotá.',
  ],
};

const INSTALLATION_EINLADUNG =
  'Wir laden dich herzlich ein, die im Rahmen des YU Festivals vom 22. bis 25. Oktober 2026 im Foyer des Dortmunder U präsentierte Kunstinstallation zu besuchen und das entstehende digitale Medienkunstprojekt selbst zu erleben. Als interaktives Projekt lädt die Installation dazu ein, sich einzubringen, Verbindungen zu entdecken und Teil des entstehenden digitalen Projekts zu werden.';

const HACKATHON_HINWEIS =
  'Dieser Workshop ist Teil des Hackathons „Connections“ im Rahmen der KoLab Days x ATEM Biennale und des YU Festivals. Nach dem Workshop kann im Workspace über mehrere Tage weitergearbeitet werden. Hier können die entstandenen Ideen vertieft, ausprobiert und gemeinsam weiterentwickelt werden. So entsteht Schritt für Schritt eine kollektiv entstandene VR-Installation.';

const TONG_JIN_SMITH: Person = {
  name: 'Dr. Tong-Jin Smith',
  bio: [
    'Tong-Jin Smith ist promovierte Politikwissenschaftlerin und seit 1992 freie Journalistin, u. a. für Welt am Sonntag, Tagesspiegel, Berliner Morgenpost und das ZDF. Seit 2014 lehrt sie an verschiedenen Berliner Hochschulen und hat 2019 das Center for Media and Information Literacy (CeMIL) an der FU Berlin mitgegründet. Im gleichen Jahr wurde sie an der HMKW Berlin (heute Media University of Applied Sciences) als Professorin für Journalismus berufen. Seit 2025 ist sie zudem im Think & Do Tank futur eins e. V. für Bildungsthemen verantwortlich. Sie forscht und lehrt zu Medienmündigkeit, Nachrichten- und Informationskompetenz, alternativen Medien und der digitalen Transformation von Journalismus und Demokratie.',
  ],
};

const JENNIFER_EICKELMANN: Person = {
  name: 'Dr. Jennifer Eickelmann',
  bio: [
    'Jennifer Eickelmann ist Juniorprofessorin für Digitale Transformation in Kultur und Gesellschaft an der Fakultät für Kultur- und Sozialwissenschaften und Co-Sprecherin des FSP digitale_kultur an der FernUniversität in Hagen. Sie ist Mitherausgeberin der Reihe Digitale Kulturen bei Hagen University Press und des transdisziplinären Journals kultur & geschlecht. Ihre Schwerpunkte liegen an der Schnittstelle von Medientheorie, Gender/Queer Media Studies und Ungleichheits-/Kultursoziologie und beschäftigen sich mit der digitalen Transformation von Öffentlichkeit und Affekt, digitaler Gewalt und ihrer Regulierung, dem Wandel des Kuratorischen im Kontext von Social Media und Museen und in jüngerer Zeit auch dem Wandel von Wissenschaft und Hochschulen vor dem Hintergrund von generativer KI und autoritären Dynamiken.',
  ],
};

// Geschützte Zeichen für die Eckdaten-Pille: Zusammengehöriges soll
// beim Umbruch auf dem Handy nicht auseinandergerissen werden.
const NB = '\u00A0'; // geschütztes Leerzeichen
const WJ = '\u2060'; // verhindert einen Umbruch nach dem Gedankenstrich

// ------------------------------------------------------------
//  Bereiche (Tracks)
//  Jeder Bereich hat EINE Leitfarbe, abgestimmt mit dem Instagram-Feed:
//  Festival Coral, Konferenz Deep Purple, Hackathon Lavender.
//  Schwarz/Weiß ist im Feed den Info-Posts vorbehalten, Lime der
//  Anmeldung (Farbe für „besondere Aufmerksamkeit“).
//  Die Kategorie eines Programmpunkts (Workshop, Podium …) steht als
//  Text auf der Pille, sie hat keine eigene Farbe.
// ------------------------------------------------------------

export const tracks: {
  id: TrackId;
  label: string;
  farbe: {
    /** Rahmen, Punkte, Pillen und Umschalter */
    flaeche: string;
    /** Schrift auf dieser Fläche – auf Kontrast achten */
    schrift: string;
    /** Akzent für Text auf Weiß (Coral ist dafür zu hell) */
    text: string;
  };
  intro: {
    title?: string;
    /** Eckdaten, jede Angabe in einer eigenen Zeile */
    meta?: string[];
    text: string[];
    link?: { label: string; href: string };
    registration?: boolean;
  };
}[] = [
  {
    id: 'festival',
    label: 'Festival',
    farbe: { flaeche: 'var(--coral)', schrift: 'var(--black)', text: 'var(--deep-purple)' },
    intro: {
      meta: [`22.–${WJ}25.${NB}Oktober${NB}2026${NB}· Dortmunder${NB}U`],
      text: [
        'Workshops, Talks, Performances und digitale Kunst. Für einige Events brauchst du eine Anmeldung – Infos dazu findest du direkt beim Programmpunkt.',
      ],
    },
  },
  {
    id: 'konferenz',
    label: 'Konferenz',
    farbe: { flaeche: 'var(--deep-purple)', schrift: 'var(--white)', text: 'var(--deep-purple)' },
    intro: {
      title: 'Wie wollen wir digital miteinander leben? Die YU Konferenz 2026',
      meta: [
        `Freitag, 23.${NB}Oktober${NB}2026`,
        `Block${NB}1: 10:00–${WJ}13:30${NB}Uhr`,
        `Block${NB}2 (Praxisworkshops): 14:15–${WJ}16:00${NB}Uhr`,
      ],
      text: [
        'Auf der diesjährigen YU Konferenz fragen wir uns: Wie prägen digitale Entwicklungen unser Verständnis von Gemeinschaft und Gesellschaft? Wer setzt die Regeln im digitalen Raum? Wie beeinflusst das Digitale unser Bild von uns selbst und voneinander? Und wie können wir demokratische Werte auch im digitalen Raum stärken und bewahren?',
        'Freu dich auf Impulse und Gespräche zu Bildung und Medienkompetenz, gesellschaftlicher Teilhabe und Gemeinschaft sowie Demokratie und digitaler Mitgestaltung.',
      ],
      link: {
        label: 'Das gesamte Programm der YU Konferenz beim Dortmunder U',
        href: 'https://dortmunder-u.de/event/yu-konferenz/',
      },
      registration: true,
    },
  },
  {
    id: 'hackathon',
    label: 'Hackathon',
    farbe: { flaeche: 'var(--lavender)', schrift: 'var(--white)', text: 'var(--lavender)' },
    intro: {
      title: 'Hackathon „Connections“',
      meta: [`im Rahmen der KoLab${NB}Days x ATEM${NB}Biennale und des YU${NB}Festivals`],
      text: [
        'Unter dem Thema „Connections“ entwickeln wir an drei Tagen gemeinsam eine interaktive VR-Installation, die sich mit Formen der Begegnung und des Zusammenlebens in digitalen Räumen beschäftigt. Dabei wollen wir untersuchen, wie virtuelle Umgebungen unsere Kommunikation und unser Verhalten beeinflussen und welche neuen Formen von Nähe, Distanz, Gemeinschaft und Abgrenzung dort entstehen können.',
      ],
    },
  },
];

// ------------------------------------------------------------
//  Durchgehend: Ausstellungen, alle vier Tage
// ------------------------------------------------------------

export const ongoing: Ausstellung[] = [
  {
    id: 'ausstellung-baze',
    title: 'Ausstellung: BAZE',
    by: 'von Sam Hopkins',
    period: '22.–25.10.2026',
    location: 'Foyer des Dortmunder U',
    text: [
      'Baze ist ein Projekt über das gemeinsame OFFLINE-Sein. Nicht OFFLINE im Sinne von analog – denn hier geht es darum, digitale Inhalte zu produzieren und zu teilen. Und auch nicht OFFLINE im Sinne von Abwesenheit – denn es geht darum, mit anderen Menschen präsent zu sein.',
      'Der Name des Projekts stammt von den Bazes in Nairobi: informellen sozialen Orten, an denen Menschen zusammenkommen, Zeit miteinander verbringen, schauen, hören und digitale Medien direkt von Gerät zu Gerät austauschen. Baze fragt, was passiert, wenn sich digitale Kultur jenseits von Plattformen, Algorithmen und Optimierung bewegt und zu etwas wird, dem wir gemeinsam begegnen und das wir miteinander teilen.',
      'Im Zentrum des Projekts steht der Cosmos of Content, eine wachsende Offline-Sammlung digitaler Inhalte, die auf einem lokalen Server gespeichert ist – außerhalb des Internets und seiner Plattformen. Besucher*innen können die Sammlung gemeinsam durchstöbern und Dateien direkt auf ihre eigenen Geräte mitnehmen.',
      'Der Cosmos ist zugleich Archiv und Ausstellungsraum. Er enthält Videos, Bilder, Sounds, Texte, Publikationen, Memes, Tutorials, Recherchen und andere Dinge, die Menschen mit anderen teilen möchten. Etwas hinzuzufügen ist ein bisschen wie eine Nachricht in einer Flasche zu hinterlassen: eine Datei für jemand anderen, ohne zu wissen, wer sie finden wird oder wann.',
      'Baze versucht, die Wärme der Nachbarschaft ins digitale Leben zu bringen.',
    ],
    sections: [
      {
        label: 'Artist',
        people: [
          {
            name: 'Sam Hopkins',
            bio: [
              'Sam Hopkins ist Künstler und lehrt an der Kunsthochschule für Medien in Köln.',
              'Im Projekt BAZE beschäftigt er sich mit digitalen Medien, gemeinschaftlichem Austausch und der Frage, wie digitale Räume genutzt und gestaltet werden können. Dabei untersucht er, wie digitale Infrastrukturen unser Zusammenleben und unsere Möglichkeiten des Teilens beeinflussen.',
              'Für die Manifesta+ in Dortmund entwickelt er im SÖZ mit BAZE einen lokalen digitalen Kultur-Kosmos.',
            ],
          },
        ],
      },
    ],
    outro: [INSTALLATION_EINLADUNG],
  },
  {
    id: 'ausstellung-collective-mess',
    bild: {
      src: '/images/programm/collective-mess.webp',
      alt: 'Bunte, verpixelte Collage mit dem Schriftzug „Collective Mess“',
      breite: 1200,
      hoehe: 800,
    },
    title: 'Ausstellung: Collective Mess',
    by: 'von Camilo Sandoval und Camilla Scholz',
    period: '22.–25.10.2026',
    location: 'Foyer des Dortmunder U',
    text: [
      'An die Wand schreiben und, Ups, du hast ein Wort falsch geschrieben! Lieber schnell durchstreichen und darüber schreiben, oder es einfach so lassen? Sieht ja trotzdem cool aus. Gemeinsam mit Leuten, die man gerade erst kennengelernt hat, eine Zeichnung machen und am nächsten Tag feststellen, dass jemand Blumen und einen albernen Schnurrbart hinzugefügt hat. Eine andere Person schreibt ein Zitat aus ihrem Lieblingssong dazu und verändert damit plötzlich die gesamte Bedeutung der Zeichnung.',
      'Am nächsten Tag kommst du wieder und deine Zeichnung, die vorher ganz allein dastand, ist nun von einer Wand voller unterschiedlichster Nachrichten und bewegter Bilder umgeben: private Erinnerungen, verborgene Wünsche, manche sind Witze, andere Beschwerden, einige nostalgisch, andere rätselhaft und faszinierend.',
      'Mit einfachen Tools, die in Processing entwickelt wurden, und simplen Eingabegeräten wie Webcams und Knöpfen kann sich jede Person, die möchte, an diesem „Collective Mess“ beteiligen: einer animierten digitalen Graffiti-Wand, die sich in Echtzeit selbst verändert und weiterentwickelt.',
    ],
    sections: [{ label: 'Artists', people: [CAMILLA_SCHOLZ, CAMILO_SANDOVAL] }],
    outro: [INSTALLATION_EINLADUNG],
  },
];

// ------------------------------------------------------------
//  Programmpunkte
// ------------------------------------------------------------

export const events: ProgrammEvent[] = [
  // ======================= FESTIVAL =======================

  // --- Donnerstag ---
  {
    id: 'unter-haut-do',
    track: 'festival',
    day: 1,
    start: '19:00',
    end: '20:00',
    category: 'Performance und Musik',
    title: 'Medienkunst-Performance: Unter Haut',
    location: ORT_FOYER,
    text: UNTER_HAUT_TEXT,
    sections: [UNTER_HAUT_ARTISTS],
  },

  // --- Freitag ---
  {
    id: 'workshop-medienkompetenz-festival',
    track: 'festival',
    day: 2,
    start: '14:15',
    end: '16:00',
    category: 'Workshop',
    title: 'Workshop Medienkompetenz: Wer durchschaut hier eigentlich wen?',
    by: 'mit Desire Bigalske und Karl Nyuydine (VKII Ruhrbezirk e. V.)',
    text: VKII_WORKSHOP_TEXT,
    sections: VKII_WORKSHOP_SECTIONS,
    registration: true,
  },
  {
    id: 'speed-zine-festival',
    bild: ZINE_BILD,
    track: 'festival',
    day: 2,
    start: '14:15',
    end: '16:00',
    category: 'Workshop',
    title: 'Speed-Zine-Workshop mit den Schnellhefter*innen',
    text: SPEED_ZINE_TEXT,
    sections: [{ label: 'Ein Workshop von', text: SCHNELLHEFTER }],
    registration: true,
  },
  {
    id: 'unter-haut-fr',
    track: 'festival',
    day: 2,
    start: '16:30',
    end: '17:30',
    category: 'Performance und Musik',
    title: 'Medienkunst-Performance: Unter Haut',
    location: ORT_FOYER,
    text: UNTER_HAUT_TEXT,
    sections: [UNTER_HAUT_ARTISTS],
  },
  {
    id: 'dj-set-3daea',
    track: 'festival',
    day: 2,
    start: '18:00',
    end: '21:00',
    category: 'Performance und Musik',
    title: 'DJ-Set von 3ΔÆA – Ausklang im Mono Listening Café',
    location: 'Mono Listening Café',
    text: [
      'Digital Thoughts // Latent Affects // Repetition // Temporal Suspension // Identifying Patterns // Embodying Anti-Patterns // Destruction // Reconstruction // Subject to Change',
      '3ΔÆA’s musikalische Mission liegt in der Versöhnung von Gegensätzen: Die unheimliche und abrasive Klangästhetik des Deconstructed Post-Club mit der rituellen Trance des Dancefloors. Ihre Musik ist das Ergebnis der künstlerischen Aufarbeitung einer Ich-Werdung. Dabei wird der Loop der Maschinen zu einem digitalen Gefängnis ihres Bewusstseins, das versucht, die algorithmische Starre zu sprengen.',
    ],
    registration: true,
  },

  // --- Samstag ---
  {
    id: 'flowar-zukunftswerkstatt',
    track: 'festival',
    day: 3,
    start: '11:00',
    end: '13:30',
    category: 'Workshop',
    title: 'flowAR Zukunftswerkstatt',
    by: 'mit Larissa Schäfer und Dana Hoffmann',
    text: [
      'FlowAR ist eine App, die Ideen für das Ruhrgebiet in 3D und Augmented Reality sichtbar macht. Auf einer virtuellen Karte entsteht so ein Bild davon, wie sich die Region ihre Zukunft vorstellt.',
      'Was fehlt dir in deinem Alltag? Wie könnte dein Ort in ein paar Jahren aussehen? In dieser Werkstatt kommst du mit anderen ins Gespräch, entwickelst aus deinen Wünschen eigene Visionen und hältst sie kreativ fest. Du probierst die App direkt aus und machst deine Idee digital sichtbar. Vorkenntnisse brauchst du keine.',
      'Mit deinen Ideen hilfst du uns, FlowAR weiterzuentwickeln. Und du wirst Teil der FlowAR-Community.',
    ],
    sections: [
      {
        label: 'Referent*innen',
        text: ['Larissa Schäfer und Dana Hoffmann'],
      },
      {
        label: 'Über FlowAR',
        text: [
          'FlowAR ist eine App, mit der sich Zukunftsideen für das Ruhrgebiet in 3D und Augmented Reality visualisieren lassen, ganz ohne technische Vorkenntnisse. Auf einer virtuellen Karte der Region werden Ideen und Missionen der Community sichtbar.',
          'Nutzer:innen können eigene Visionen für die Stadt von morgen einbringen oder bestehende Ideen weiterentwickeln. FlowAR ist ein Forschungsprojekt der TU Dortmund, der Universität Duisburg-Essen und von Digitale Kultur Dortmund, gemeinsam mit Expert:innen für Programmierung und Projection Mapping. Die App entsteht in Zusammenarbeit mit der IGA 2027 und wird dort präsentiert. In Zukunftswerkstätten entwickeln wir sie mit der Community weiter und schaffen einen Raum für Zukunftsvisionen.',
        ],
      },
    ],
    registration: true,
  },
  {
    id: 'zine-workshop-sa',
    bild: ZINE_BILD,
    track: 'festival',
    day: 3,
    start: '14:00',
    end: '17:30',
    category: 'Workshop',
    title: 'Zine-Workshop mit den Schnellhefter*innen (Teil 1)',
    note: ZINE_WOCHENENDE_HINWEIS,
    text: ZINE_WOCHENENDE_TEXT,
    sections: [{ label: 'Ein Workshop von', text: SCHNELLHEFTER }],
    registration: true,
  },
  {
    id: 'workshop-cyberfeminismus',
    bild: {
      src: '/images/programm/cyberfeminismus.webp',
      alt: 'Code-Fragmente mit den Schriftzügen „Cyberfeministische Strategien“ und „KI-Praxis“',
      breite: 1200,
      hoehe: 629,
    },
    track: 'festival',
    day: 3,
    start: '14:00',
    end: '17:30',
    category: 'Workshop',
    title: 'Workshop: Cyberfeministische Strategien in der generativen Kunstpraxis',
    by: 'mit Darbyn Luisa Kalkuhl',
    text: [
      'Wie lassen sich KI-Tools selbstbestimmt besetzen, um Biases zu unterlaufen und eigene, emanzipatorische Ästhetiken jenseits von Big-Tech-Monopolen zu formen? Dieser Workshop schlägt die Brücke zwischen kritischem Diskurs und der eigenen künstlerischen Praxis.',
      'Der erste Teil ist diskursiv gestaltet und gewährt einen Blick hinter die Kulissen datenbasierter Systeme. Inspiriert von cyberfeministischen Ansätzen schärft er das Bewusstsein für die Entstehung von Biases und die Frage, wie sich Kreativität in der Zusammenarbeit mit KI verändert. Im anschließenden Praxisteil richtet sich der Fokus auf die Nutzung gängiger LLMs sowie des Text-to-Image-Modells Stable Diffusion. Es werden konkrete Methoden für das eigene kreative Schaffen vorgestellt und in einem experimentellen Rahmen erprobt, um KI-Voreinstellungen zu unterwandern und eigene Narrative zu prägen.',
      'Der Workshop richtet sich an alle, die KI-Technologien kritisch hinterfragen und aktiv mitgestalten wollen. Da die PCs vor Ort knapp sind, bring bitte nach Möglichkeit einen eigenen leistungsstarken Windows-Laptop mit.',
    ],
    sections: [
      {
        label: 'Referent*in',
        people: [
          {
            name: 'Darbyn Luisa Kalkuhl',
            bio: [
              'Darbyn ist als intermediale_r Künstler_in an der Schnittstelle von Sozialwissenschaft, Medienkunst und performativer Kunst tätig. Als Gründer_in des Queeren Theater Kollektivs führt Darbyn konzeptionelle Regie und erforscht neuroqueere und intermediale Ästhetiken, wie etwa in der Verbindung von digitalen Echtzeit-Medien mit darstellender Kunst. Im Zentrum der künstlerischen Praxis steht die Dekonstruktion gesellschaftlicher Machtverhältnisse und normativer Strukturen.',
              'Ein Schwerpunkt von Darbyns aktueller Arbeit bildet die Entwicklung einer kritischen KI-Methodik. Diese befähigt Kunstschaffende dazu, sich generative Systeme kreativ und selbstbestimmt anzueignen.',
            ],
          },
        ],
      },
    ],
    registration: true,
  },
  {
    id: 'talk-community-visions',
    track: 'festival',
    day: 3,
    start: '18:00',
    end: '19:30',
    category: 'Diskurs',
    title: 'Talk: Community Visions',
    by: 'Moderation: Florencia Alonso',
    location: 'Kino im U',
    text: [
      'Community Visions bringt Künstlerinnen, Kreative und Organisatorinnen zusammen, die ihre Visionen für neue digitale Räume und Formen des kreativen Miteinanders teilen. Wie können digitale Räume zu Orten werden, an denen wir gemeinsam denken, machen, lernen und träumen? Welche neuen Formen von Community können entstehen? Und was wird möglich, wenn wir das Digitale nicht nur als Raum begreifen, den wir nutzen, sondern als Raum, den wir gemeinsam gestalten und erfinden?',
    ],
    sections: [
      { label: 'Moderation', text: ['Florencia Alonso'] },
      {
        label: 'Zu Gast',
        text: [
          'Raphaël de Courvielle, Darbyn Luisa Kalkuhl, Camilo Sandoval, Sam Hopkins',
        ],
      },
    ],
    registration: true,
  },
  {
    id: 'unter-haut-sa',
    track: 'festival',
    day: 3,
    start: '19:30',
    end: '20:30',
    category: 'Performance und Musik',
    title: 'Medienkunst-Performance: Unter Haut',
    location: ORT_FOYER,
    text: UNTER_HAUT_TEXT,
    sections: [UNTER_HAUT_ARTISTS],
  },

  // --- Sonntag ---
  {
    id: 'movement-workshop',
    track: 'festival',
    day: 4,
    start: '14:00',
    end: '16:00',
    category: 'Workshop',
    title: 'Movement-Workshop: Can you feel your body',
    by: 'mit Julie C. Stamm und Anna Deborah Disse',
    text: [
      'Can you feel your body is a two hour movement workshop. Anna and Julie invite you to come and play with different modes of sensing your own and the collective body. We will propose games around sensing and sharing weight and the borders of the body through exercises with yourself, in pairs and with the whole group. We will explore elements from our performance “Unter Haut” presented at the festival.',
      'This workshop involves touch. No prior experience needed, bring comfy clothes that you can move in. All bodies welcome! Facilitation language: German and/or English.',
    ],
    sections: [
      {
        label: 'Workshopleitung',
        people: [
          {
            name: 'Julie C. Stamm',
            bio: [
              'Julie C. Stamm arbeitet an der Schnittstelle von Choreografie und Medienkunst. Ihr Hintergrund vereint Neuroästhetik (Goldsmiths UL), zeitgenössischen Tanz (Performact) und experimentelle Sensorik. In ihrer künstlerischen Arbeit und im NoEndToTheRoad Fellowship ’25 untersucht sie, wie digitale Alltags- und Trackingtechnologien unsere Bewegungen und kollektiven Choreografien mitformen.',
            ],
          },
          {
            name: 'Anna Deborah Disse',
            bio: [
              'Anna Deborah Disse ist Tänzer:in, Choreograf:in und Tanzpädagog:in mit Fokus auf Improvisation und die Verbindung von Bewegung, Identität und Präsenz. Sie studierte u. a. an der Ballettakademie Hans Vogl und Performact (PT) und realisierte Projekte mit dajci*, Julie C. Stamm und Celia Morris. Anna unterrichtet seit über sechs Jahren Tanz für Jugendliche und zeigt eigene Arbeiten an diversen Berliner Spielstätten.',
            ],
          },
        ],
      },
    ],
    registration: true,
  },
  {
    id: 'zine-workshop-so',
    bild: ZINE_BILD,
    track: 'festival',
    day: 4,
    start: '14:00',
    end: '18:00',
    category: 'Workshop',
    title: 'Zine-Workshop mit den Schnellhefter*innen (Teil 2)',
    note: ZINE_WOCHENENDE_HINWEIS,
    text: ZINE_WOCHENENDE_TEXT,
    sections: [{ label: 'Ein Workshop von', text: SCHNELLHEFTER }],
    registration: true,
  },
  {
    id: 'unter-haut-so',
    track: 'festival',
    day: 4,
    start: '18:00',
    end: '19:00',
    category: 'Performance und Musik',
    title: 'Medienkunst-Performance: Unter Haut',
    location: ORT_FOYER,
    text: UNTER_HAUT_TEXT,
    sections: [UNTER_HAUT_ARTISTS],
  },

  // ======================= KONFERENZ =======================
  // Freitag, 23.10. – Block 1: 10:00–13:30, Block 2: 14:15–16:00

  {
    id: 'konf-keynote',
    track: 'konferenz',
    day: 2,
    start: '10:00',
    end: '13:30',
    category: 'Präsentation',
    title: 'Keynote: Wie prägen digitale Entwicklungen unser Miteinander?',
    by: 'Dr. Jennifer Eickelmann',
    note: 'Teil von Block 1 (10:00–13:30 Uhr)',
    text: [],
    sections: [{ label: 'Referentin', people: [JENNIFER_EICKELMANN] }],
  },
  {
    id: 'konf-impuls-salon5',
    track: 'konferenz',
    day: 2,
    start: '10:00',
    end: '13:30',
    category: 'Präsentation',
    title:
      'Impulsvortrag: Vom Scrollen zum Mitmachen – Jugendliche durch aktive Medienarbeit erreichen',
    by: 'Paula Weber, Salon5 – Die Jugendredaktion',
    note: 'Teil von Block 1 (10:00–13:30 Uhr)',
    text: [
      'Social Media, Videos und Podcasts sind ein selbstverständlicher Teil der Lebenswelt junger Menschen – und zugleich wichtige Orte, an denen sie sich informieren, austauschen und ihre Meinung bilden. Wie können diese Medien sinnvoll in der Arbeit mit Jugendlichen eingesetzt werden, anstatt sie vor allem als Problem zu betrachten?',
      'Der Kurzimpuls zeigt, wie Medienarbeit Jugendliche erreichen und sie von reinen Medienkonsument:innen zu aktiven Medienmacher:innen werden lassen kann. Im Mittelpunkt steht die Frage, wie junge Menschen darin gestärkt werden können, Informationen und Quellen kritisch zu hinterfragen, Desinformation und KI-Fakes zu erkennen und gleichzeitig eigene Themen, Meinungen und Perspektiven sichtbar zu machen. Medienkompetenz wird dabei nicht nur als Fähigkeit zur kritischen Nutzung, sondern auch als aktive, digitale Teilhabe verstanden.',
      'Am Beispiel des Projekts „Salon5 FaktenChecker – Jugend gegen Desinformation“ wird gezeigt, wie Jugendliche durch Recherche, Faktenchecks, eigene Faktencheck-Reels und Lernvideos ihr Wissen auf den Plattformen weitergeben, die sie täglich nutzen.',
    ],
    sections: [
      {
        label: 'Referentin',
        people: [
          {
            name: 'Paula Weber',
            bio: [
              'Paula Weber ist Medienpädagogin in der Salon5-Jugendredaktion in Dortmund. Sie möchte Jugendlichen einen niedrigschwelligen Zugang zu Journalismus ermöglichen und sie ermutigen, eigene Projekte und Formate zu entwickeln. Sie konzipiert und leitet Workshops zu den Themen Journalismus und Medienkompetenz und arbeitet eng mit jungen Reporter:innen aus Dortmund und dem Ruhrgebiet zusammen. Seit September 2025 leitet sie das Pilotprojekt „Salon5 FaktenChecker – Jugend gegen Desinformation“, in dem Jugendliche lernen, Desinformation zu erkennen und ihr Wissen über die Funktionsweisen von Social Media an andere Jugendliche weiterzugeben.',
            ],
          },
        ],
      },
      {
        label: 'Salon5 – Die Jugendredaktion',
        text: [
          'Salon5 ist die Jugendredaktion von CORRECTIV und steht für Journalismus von Jugendlichen für Jugendliche. Junge Menschen lernen hier journalistisches Handwerk und setzen sich mit Themen auseinander, die sie interessieren und bewegen. Ob Podcast, Videos und Beiträge auf Instagram oder TikTok – bei Salon5 können Jugendliche Medien selbst gestalten und ihre Perspektiven sichtbar machen. Unterstützt werden sie dabei von Journalist:innen.',
        ],
      },
    ],
  },
  {
    id: 'konf-muendig-mit-medien',
    track: 'konferenz',
    day: 2,
    start: '10:00',
    end: '13:30',
    category: 'Präsentation',
    title: 'Kurzvortrag: Mündig mit Medien',
    by: 'Dr. Tong-Jin Smith',
    note: 'Teil von Block 1 (10:00–13:30 Uhr)',
    text: [
      'Medienbildung gilt im deutschen Schulsystem als Querschnittsaufgabe – auch in Bundesländern, die sie zusammen mit Informatik zum Fach erhoben haben. Die Herausforderung: Wenn Medienbildung eine Aufgabe für alle ist, müssen alle Lehrkräfte dafür qualifiziert werden. Zudem brauchen Schulen eigene, auf sie zugeschnittene Kerncurricula, die sich an einem gemeinsamen Standard orientieren, der festlegt, was Schülerinnen und Schüler in welchem Alter können sollen.',
      'Der Vortrag stellt die Initiative „Mündig mit Medien“ vor, die seit 2024 in einem Action-Research-Ansatz an der Freien Universität Berlin und zwei Partnerschulen mit (angehenden) Lehrkräften Unterrichtsformate entwickelt, die unabhängig von Bundesland und Rahmenlehrplan einsetzbar sind. Am Beispiel der Nelson-Mandela-Schule in Berlin zeigt er, wie ein schuleigenes Kerncurriculum entsteht und wie Kinder und Jugendliche von der Grundschule bis zum Abitur lernen, digitale Plattformen, Tools und KI kritisch zu hinterfragen und produktiv zu nutzen, sich konstruktiv an öffentlichen Diskursen zu beteiligen und sich selbstbestimmt in digitalen Räumen zu bewegen.',
    ],
    sections: [{ label: 'Referentin', people: [TONG_JIN_SMITH] }],
  },
  {
    id: 'konf-ankoppeln-docriva',
    track: 'konferenz',
    day: 2,
    start: '10:00',
    end: '13:30',
    category: 'Präsentation',
    title: 'Kurzvortrag: Digitale Teilhabe praktisch gedacht – Ankoppeln & Docriva',
    by: 'Cedric Ngonthe und Aime Yonkeu (VKII Ruhrbezirk e. V.)',
    note: 'Teil von Block 1 (10:00–13:30 Uhr)',
    text: [
      'Wie können digitale Anwendungen gesellschaftliche und soziale Arbeit konkret erleichtern? Cedric Ngonthe vom VKII Ruhrbezirk e. V. stellt zusammen mit Aime Yonkeu zwei selbst entwickelte Anwendungen vor, die aus konkreten Bedarfen der Praxis entstanden sind.',
      'Die Ankoppeln-App ist eine Netzwerkplattform für gemeinnützige Vereine. Sie unterstützt Organisationen dabei, sich miteinander zu vernetzen und ihre gemeinnützige und soziale Arbeit digital zu dokumentieren. Damit zeigt sie, wie Digitalisierung Kooperation und Teilhabe im zivilgesellschaftlichen Bereich unterstützen kann.',
      'Mit Docriva richtet sich die zweite Anwendung direkt an Menschen, die im Alltag mit komplexen Dokumenten konfrontiert sind. Dokumente können gescannt, digital verwaltet und mithilfe von KI leichter erschlossen werden. Insbesondere Menschen mit Sprachbarrieren erhalten so Unterstützung dabei, anspruchsvolle Schreiben selbstständiger zu verstehen und zu verwalten.',
      'Die Vorstellung zeigt anhand zweier konkreter Beispiele, wie Technologie genutzt werden kann, um Zugänge zu erleichtern und gesellschaftliche Teilhabe zu fördern.',
    ],
  },
  {
    id: 'konf-podium',
    track: 'konferenz',
    day: 2,
    start: '10:00',
    end: '13:30',
    category: 'Podium',
    title: 'Podium: Wie prägen digitale Räume unser Miteinander?',
    by: 'mit Nhi Le, Suraj Mailitafi, Dr. Tong-Jin Smith und Dr. Jennifer Eickelmann',
    note: 'Teil von Block 1 (10:00–13:30 Uhr)',
    text: [
      'Gemeinsam mit unseren Podiumsgästen Nhi Le, Suraj Mailitafi, Dr. Tong-Jin Smith und Dr. Jennifer Eickelmann besprechen wir folgende Fragen:',
    ],
    sections: [
      {
        label: 'Teil 1 – Wie prägen digitale Räume unser Miteinander?',
        text: [
          'Digitale Räume sind aus unserem Alltag nicht mehr wegzudenken. Sie verändern, wie wir miteinander kommunizieren, Gemeinschaft erleben und Demokratie erfahren. Gleichzeitig stellen sie neue Fragen an unsere Gesellschaft: Welchen Informationen können wir trauen? Wie begegnen wir uns? Wie diskutieren wir miteinander? Und was braucht es, damit alle am digitalen Miteinander teilhaben können? Wir diskutieren, wie das Netz unser heutiges Zusammenleben prägt und welche Kompetenzen wir heute brauchen, um an der digitalen Gesellschaft teilhaben zu können.',
        ],
      },
      {
        label: 'Teil 2 – Digitale Debatten: Wie stärken wir den Dialog im digitalen Raum?',
        text: [
          'Ist ein offener Diskurs im Netz noch möglich? Hass, Ausgrenzung und ein rauer Ton gehören für viele Menschen zum Alltag im Netz. Das schreckt viele davon ab, sich im Netz an Diskussionen zu beteiligen. Was können wir dagegen tun? Wie schaffen wir digitale Räume, in denen unterschiedliche Stimmen gehört werden und sich mehr Menschen sicher einbringen können? Im zweiten Abschnitt sprechen wir darüber, welche Verantwortung Plattformen, Medien und wir alle tragen und was es braucht, damit das Netz offener, fairer und inklusiver wird.',
        ],
      },
      {
        label: 'Unsere Gäste',
        people: [
          {
            name: 'Nhi Le',
            bio: [
              'Nhi Le ist Journalistin, Moderatorin und Autorin. Ihre Schwerpunkte sind digitale Medienkultur, die Schnittstellen zwischen Pop und Politik und die Einwanderungsgesellschaft Ostdeutschland mit Fokus auf die vietnamesische Diaspora. Aktuell arbeitet sie vor allem für den Norddeutschen Rundfunk und für andere öffentlich-rechtliche Medien.',
              'Die ZEIT zählt sie zu den 100 wichtigsten jungen Ostdeutschen. 2021 wurde sie vom Medium Magazin zu den Top 30 bis 30 Journalist*innen des Landes gewählt. Ihre Arbeit wurde mit dem Alternativen Medienpreis ausgezeichnet.',
            ],
          },
          {
            name: 'Suraj Mailitafi',
            bio: [
              'Suraj ist politischer Aktivist und Content Creator. Er setzt sich für Antirassismus, Antifaschismus und Chancengerechtigkeit ein – auf der Straße, in Schulen und in den sozialen Medien.',
              'Mit seiner Arbeit erreicht er monatlich auf Instagram und TikTok bis zu 12 Millionen Menschen. Seine Inhalte richten sich insbesondere an junge und migrantisierte Menschen, die er mit einer ruhigen, authentischen und zugänglichen Art für gesellschaftspolitische Themen sensibilisiert und informiert.',
              'Darüber hinaus engagiert sich Suraj in der Initiative „Gerechtigkeit für Lorenz“, die sich für eine lückenlose Aufklärung rassistischer Polizeigewalt einsetzt.',
            ],
          },
          TONG_JIN_SMITH,
          JENNIFER_EICKELMANN,
        ],
      },
      {
        label: 'Moderation',
        people: [
          {
            name: 'Denise Gühnemann',
            bio: [
              'Denise Gühnemann arbeitet seit vielen Jahren in der Kultur- und Medienbildung. Sie hat sich in verschiedenen Rollen – von Projektmanagement über Redaktion bis hin zu Forschung – mit digitalen Spielen, Medienbildung und der Digitalisierung der Gesellschaft beschäftigt. Immer wieder moderiert sie verschiedene Formate rund um die Themen Medienbildung und Medialisierung.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'konf-workshop-medienkompetenz',
    track: 'konferenz',
    day: 2,
    start: '14:15',
    end: '16:00',
    category: 'Workshop',
    title: 'Workshop: Wer durchschaut hier eigentlich wen?',
    by: 'mit Desire Bigalske und Karl Nyuydine (VKII Ruhrbezirk e. V.)',
    note: 'Block 2 – Praxisworkshops (14:15–16:00 Uhr)',
    text: VKII_WORKSHOP_TEXT,
    sections: VKII_WORKSHOP_SECTIONS,
    registration: true,
  },
  {
    id: 'konf-speed-zine',
    bild: ZINE_BILD,
    track: 'konferenz',
    day: 2,
    start: '14:15',
    end: '16:00',
    category: 'Workshop',
    title: 'Speed-Zine-Workshop mit den Schnellhefter*innen',
    note: 'Block 2 – Praxisworkshops (14:15–16:00 Uhr)',
    text: SPEED_ZINE_TEXT,
    sections: [{ label: 'Workshopleitung', text: SCHNELLHEFTER }],
    registration: true,
  },

  // ======================= HACKATHON =======================

  {
    id: 'hack-creative-coding',
    bild: {
      src: '/images/programm/creative-coding.webp',
      alt: 'Mit p5.js gezeichnetes Raster aus bunten Formen und Sternen',
      breite: 1200,
      hoehe: 600,
    },
    track: 'hackathon',
    day: 1,
    start: '16:00',
    end: '19:00',
    category: 'Workshop',
    title: 'Creative Coding Beginner-Workshop',
    by: 'mit Camilla Scholz und Camilo Sandoval',
    text: [
      'Anlässlich des 25. Jahrestags von Processing bietet dieser Workshop einen leichten, praktischen Einstieg in die Creative-Coding-Programmiersprache p5.js, eine Programmiersprache, die speziell dafür entwickelt wurde, Code zugänglicher zu machen.',
      'In diesem Kurs nähern wir uns dem Programmieren aus einer künstlerischen Perspektive: Wir nutzen p5.js als digitales Malwerkzeug. Aus einfachen geometrischen Formen, Farben und Algorithmen baust du Schritt für Schritt visuelle Kompositionen auf und erstellst deine ersten eigenen programmierten Sketches.',
      'Der Workshop richtet sich an absolute Anfänger:innen. Es sind keine Vorkenntnisse in Programmierung erforderlich. Bring lediglich deinen eigenen Laptop mit!',
      HACKATHON_HINWEIS,
    ],
    sections: [
      { label: 'Workshopleitung', people: [CAMILLA_SCHOLZ, CAMILO_SANDOVAL] },
    ],
    registration: true,
  },
  {
    id: 'hack-pdxr',
    track: 'hackathon',
    day: 1,
    start: '16:00',
    end: '19:00',
    category: 'Workshop',
    title: 'PdXR – Pure Data im Augmented-Reality-Metaverse',
    by: 'mit Damian T. Dziwis',
    text: [
      'Wie klingt eine virtuelle Welt, die sich mit unserer verbindet – und wie lässt sie sich mit Pure Data programmieren? In diesem Workshop lernen die Teilnehmenden PdXR kennen, ein System, das Pure-Data-Patches in interaktiven, immersiven und vernetzten XR-Umgebungen ausführbar macht. Gemeinsam entwickeln wir kleine Klangexperimente, virtuelle Instrumente oder räumliche Soundscapes. Dabei verbinden wir die Möglichkeiten von Pure Data mit der Interaktion und Räumlichkeit virtueller 3D-Welten. Pd-Objekte und Interfaces werden zu interaktiven Elementen, die sich gemeinsam erkunden, steuern und musikalisch nutzen lassen.',
      'Der Workshop richtet sich an Musikerinnen, Klang- und Medienkünstlerinnen, Creative Coder sowie alle, die Pure Data in einem neuen räumlichen und kollaborativen Kontext ausprobieren möchten. Vorkenntnisse in Pure Data sind hilfreich, aber nicht zwingend erforderlich.',
      HACKATHON_HINWEIS,
    ],
    sections: [
      {
        label: 'Workshopleitung',
        people: [
          {
            name: 'Damian T. Dziwis',
            bio: [
              'Damian T. Dziwis (1986, Polen) ist Komponist, Medienkünstler und Forscher in Düsseldorf. Seine Arbeiten verbinden KI, generative audiovisuelle Algorithmen, Live Coding, DIY-Elektronik, Spatial Audio und virtuelle Umgebungen (VR/AR/XR). Er studierte Medientechnik (B.Eng., 2015) in Düsseldorf und Elektronische Komposition (M.Mus., 2017) in Köln, promovierte 2026 in Berlin und Köln über „Sound and Music in Virtual Environments“. Seine Performances und Installationen wurden u. a. bei MUTEK Montreal, CTM Festival, Music Tech Fest, Beethoven Fest, The Wrong Biennale und der Miami Art Week gezeigt. Dziwis war Gastprofessor in Detmold, lehrte Creative Coding in Düsseldorf und ist Mitbegründer der ATEM Biennial.',
            ],
          },
        ],
      },
    ],
    registration: true,
  },
  {
    id: 'hack-blender',
    track: 'hackathon',
    day: 1,
    start: '16:00',
    end: '19:00',
    category: 'Workshop',
    title: '3D Modeling für Web Art in Blender',
    by: 'mit Markus van Well',
    text: [
      'Wie kommen 3D-Modelle aus Blender ins Web – und was muss man beachten, damit sie dort auch flüssig laufen?',
      'In diesem dreistündigen Kick-off-Workshop beschäftigen wir uns mit den Grundlagen des 3D Modelings in Blender und schauen uns an, wie 3D-Assets für interaktive Web-Anwendungen und VR optimiert werden können.',
      'Gemeinsam gehen wir den Workflow von der ersten Idee bis zum webfähigen 3D-Asset durch: Wir vermitteln grundlegende Modeling-Techniken, beschäftigen uns mit Materialien, Texturen und Polygonzahlen und zeigen, wie Modelle für den Einsatz im Browser vorbereitet und exportiert werden. Außerdem werfen wir einen Blick auf generative Tools für die Erstellung von 3D-Inhalten und sprechen darüber, wie bestehende Online-Assets sinnvoll genutzt, angepasst und in eigene Projekte integriert werden können.',
      'Der Workshop dient gleichzeitig als Vorbereitung für den optional anschließenden zweitägigen Hackathon. Dort entwickeln wir aus den entstandenen 3D-Assets gemeinsam eine interaktive VR-Installation für das Dortmunder U. Mithilfe des Web-Frameworks A-Frame werden die Modelle in einen virtuellen Raum überführt, miteinander verbunden und interaktiv erfahrbar gemacht.',
      'Neben der technischen Umsetzung geht es deshalb auch um die gemeinsame Konzeption: Unter dem Thema „Connections“ wollen wir überlegen, welche Verbindungen innerhalb eines virtuellen Raums entstehen können – zwischen Objekten, Räumen, Menschen und digitalen Welten. Eigene Ideen und konzeptionelle Ansätze sind ausdrücklich willkommen.',
      'Der Workshop richtet sich auch an Einsteiger*innen. Vorkenntnisse in Blender oder Webentwicklung sind nicht erforderlich.',
      'Tools: Blender, 3D Modeling, Web Art, Optimierung von 3D-Assets, generative Tools, Online-Assets, A-Frame, VR. Anschließend optional: zweitägiger Hackathon zur Entwicklung einer gemeinsamen VR-Installation im Dortmunder U.',
      HACKATHON_HINWEIS,
    ],
    sections: [
      {
        label: 'Workshopleitung',
        people: [
          {
            name: 'Markus van Well',
            bio: [
              'Markus van Well ist Klangkünstler, Live Coder und Dozent aus Düsseldorf. 2018 war er Mitgründer von TOPLAP Düsseldorf, einem lokalen Live-Coding-Kollektiv, das Meetups, Workshops, Konzerte und Algoraves veranstaltet. Co-Organisator u. a. von der Konzertreihe COLLAB (2024), den Community-basierten Coding Islands in der Kunsthalle Düsseldorf (2025) und der ATEM Biennial (2025).',
              'Er unterrichtet Creative Coding (u. a. Live Coding, Data Sonification, Soundwalks, KI) an Schulen, in Museen und der Hochschule Düsseldorf.',
            ],
          },
        ],
      },
    ],
    registration: true,
  },
  {
    id: 'hack-shared-worlds',
    track: 'hackathon',
    day: 2,
    start: '16:00',
    end: '18:00',
    category: 'Workshop',
    title: 'Shared Worlds – Interaktive Augmented-Reality-Welten mit A-Frame',
    text: [
      'In diesem Workshop lernen die Teilnehmenden, wie mit Hilfe des webbasierten Open-Source-Frameworks A-Frame begehbare AR-Welten entstehen. Sie entwerfen und positionieren Objekte, arbeiten mit Licht, Materialien, Transformation und Bewegung und gestalten so ihre eigene räumliche künstlerische Arbeit. A-Frame ermöglicht einen vergleichsweise direkten Einstieg in immersive Webanwendungen und bietet zugleich zahlreiche Möglichkeiten zur Erweiterung, durch JavaScript, eigene 3D-Modelle oder klangbasierte Anwendungen wie PdXR.',
      'Neben den technischen Grundlagen sprechen wir auch über die Frage, wie sich digitale Räume entwerfen und für eigene künstlerische, gestalterische oder experimentelle Projekte nutzen lassen. Der Workshop richtet sich an MedienkünstlerInnen, DesignerInnen, Creative CoderInnen, MusikerInnen sowie alle, die sich für interaktive 3D-Welten, Webtechnologien und XR interessieren. Grundlegende Erfahrungen mit HTML oder 3D-Gestaltung sind hilfreich, aber keine Voraussetzung.',
      HACKATHON_HINWEIS,
    ],
    registration: true,
  },
  {
    id: 'hack-coding-jam',
    bild: {
      src: '/images/programm/coding-jam.webp',
      alt: 'Generatives Muster aus verschlungenen limettengrünen Linien auf Schwarz',
      breite: 1200,
      hoehe: 600,
    },
    track: 'hackathon',
    day: 3,
    start: '11:00',
    end: '14:00',
    category: 'Coding Jam',
    title: 'Coding Jam: Collective Mess',
    by: 'mit Camilla Scholz und Camilo Sandoval',
    text: [
      'In diesem Coding-Jam verwandeln wir Code und Visuals in eine „Collective Mess“. Statt perfektem Code oder fertigen Ergebnissen steht das Skizzieren, Verwerfen, Ausprobieren und bewusste Stören im Vordergrund. Mit Vibe Coding als Medium und vielseitigen Inputs, von Kameras über Mini-Keyboards bis hin zu Mikrofonen, experimentieren wir mit Code und Interaktion.',
      'Auf einer gemeinsamen digitalen Leinwand überlagern sich Gedanken, Diskussionen und Bilder, verdichten sich zu neuen Ebenen und transformieren sich in etwas ganz Neues. Das kollektive Gemälde wird so zu einem lebendigen Abbild der gemeinsamen Ideen.',
      'Erst im Foyer des Dortmunder U präsentiert, wandert das kollaborative Werk anschließend ins Metaverse, um dort im digitalen Raum des Hackathons weiterzuleben.',
      HACKATHON_HINWEIS,
    ],
    sections: [
      { label: 'Workshopleitung', people: [CAMILLA_SCHOLZ, CAMILO_SANDOVAL] },
    ],
  },
  {
    id: 'hack-showcase',
    track: 'hackathon',
    day: 4,
    start: '16:00',
    end: '20:00',
    category: 'Showcase',
    title: 'Showcase: Connections',
    by: 'Präsentation der Ergebnisse des Hackathons',
    location: ORT_FOYER,
    text: [
      'Wie entsteht eine gemeinsame digitale Welt, wenn unterschiedliche künstlerische Perspektiven, Ideen und Arbeitsweisen aufeinandertreffen?',
      'Im Hackathon „Connections“ wurden Beiträge aus 3D, Sound, Web Art, Creative Coding, Film und Musik gemeinsam entwickelt, erprobt und miteinander verbunden. Aus einzelnen Experimenten, Klängen, Bildern, Räumen und interaktiven Elementen entstand Schritt für Schritt eine gemeinsame webbasierte VR-Installation.',
      'Dabei ging es nicht darum, einzelne Arbeiten nebeneinanderzustellen, sondern darum, Verbindungen zwischen ihnen zu schaffen: Wie reagieren verschiedene Elemente aufeinander? Wie können unterschiedliche künstlerische Ansätze in einem virtuellen Raum zusammenwirken? Und was entsteht, wenn aus vielen individuellen Ideen ein gemeinsamer Erfahrungsraum wird?',
      'Am Sonntag können Besucher*innen diesen gemeinsam entwickelten Raum selbst betreten, erkunden und ausprobieren – und dabei erleben, wie aus unterschiedlichen Beiträgen eine interaktive digitale Welt entstanden ist.',
    ],
    registration: false,
  },
];
