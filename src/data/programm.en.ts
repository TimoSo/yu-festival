// ============================================================
//  PROGRAMME – englische Texte
//  Überlagert die deutschen Einträge aus programm.ts über deren `id`.
//  Uhrzeiten, Bereiche, Bilder und Anmeldepflicht kommen aus der
//  deutschen Datei – hier stehen nur die Texte. Fehlt ein Eintrag,
//  erscheint der deutsche Text.
// ============================================================

import { contact } from './site';
import { vkiiText } from './site.en';
import type { Abschnitt, Inhalt, Person, TrackId } from './programm';

/** Englische Fassung eines Programmpunkts; `bildAlt` ersetzt nur den Alternativtext */
export type Uebersetzung = Partial<Omit<Inhalt, 'id' | 'bild' | 'registration'>> & {
  bildAlt?: string;
  period?: string;
};

const NB = ' ';
const WJ = '⁠';

export const tage: Record<number, { weekday: string; date: string }> = {
  1: { weekday: 'Thursday', date: '22 October 2026' },
  2: { weekday: 'Friday', date: '23 October 2026' },
  3: { weekday: 'Saturday', date: '24 October 2026' },
  4: { weekday: 'Sunday', date: '25 October 2026' },
};

export const anmeldung = {
  text: `Registration is required for this event. If you would like to take part, simply send us an email at ${contact.email}. We look forward to hearing from you!`,
  keine: 'No registration required.',
};

export const kategorien: Record<string, string> = {
  Diskurs: 'Talk',
  'Performance und Musik': 'Performance and music',
  Workshop: 'Workshop',
  Präsentation: 'Presentation',
  Podium: 'Panel',
  'Coding Jam': 'Coding jam',
  Showcase: 'Showcase',
};

export const tracks: Record<
  TrackId,
  { label: string; intro: { title?: string; meta?: string[]; text: string[]; linkLabel?: string } }
> = {
  festival: {
    label: 'Festival',
    intro: {
      meta: [`22–${WJ}25${NB}October${NB}2026${NB}· Dortmunder${NB}U`],
      text: [
        'Workshops, talks, performances and digital art. Some events require registration – you will find the details with each programme item.',
      ],
    },
  },
  konferenz: {
    label: 'Conference',
    intro: {
      title: 'How do we want to live together digitally? The YU Conference 2026',
      meta: [
        `Friday, 23${NB}October${NB}2026`,
        `Block${NB}1: 10:00–${WJ}13:30`,
        `Block${NB}2 (hands-on workshops): 14:15–${WJ}16:00`,
      ],
      text: [
        'At this year’s YU Conference we ask: how do digital developments shape our understanding of community and society? Who sets the rules in digital space? How does the digital influence the way we see ourselves and each other? And how can we strengthen and protect democratic values in digital space?',
        'Look forward to input and conversations on education and media literacy, social participation and community, as well as democracy and digital co-creation.',
      ],
      linkLabel: 'The full YU Conference programme at Dortmunder U (in German)',
    },
  },
  hackathon: {
    label: 'Hackathon',
    intro: {
      title: 'Hackathon “Connections”',
      meta: [`as part of KoLab${NB}Days x ATEM${NB}Biennale and the YU${NB}Festival`],
      text: [
        'Under the theme “Connections”, we spend three days developing an interactive VR installation together that explores forms of encounter and coexistence in digital spaces. We want to investigate how virtual environments influence our communication and behaviour, and which new forms of closeness, distance, community and demarcation can emerge there.',
      ],
    },
  },
};

// ------------------------------------------------------------
//  Mehrfach verwendete Texte
// ------------------------------------------------------------

const ORT_FOYER = 'Foyer of the Dortmunder U';
const ZINE_ALT = 'Zine materials and pens on a table under black light';
const BLOCK_1 = 'Part of block 1 (10:00–13:30)';
const BLOCK_2 = 'Block 2 – hands-on workshops (14:15–16:00)';

const UNTER_HAUT_TEXT = [
  '“Unter Haut” (Under Skin, approx. 40 min) is a multimedia performance project about bodies and digitality in the Immersive Room and the foyer of the Dortmunder U. Four performers move in networked costumes. Sound (throat microphones), movement and projection (generated from motion data) intertwine to create a choreographic feedback system.',
  'The “skins” costumes each connect two performers, making closeness, dependence and networked identity physically tangible – central aspects of the piece and of digital representation. Live data from throat microphones forms the basis of the soundscape in the multichannel system, while motion data drives the projection. Over the course of the piece, the two modules increasingly influence each other.',
  'The choreography between the foyer and the Immersive Room is formed by bodies, projection and sound. The audience moves in groups between these spaces, creating a fragmented, feed-like experience.',
  'The piece deals with digital twins, shared control and the question of what we understand as a body in the digital age. In cooperation with Witten, workshops, performances and an installation-based follow-up use at the Dortmunder U are being developed.',
  'The project is supported by Neue Künste Ruhr, Kulturforum Witten and the Koproduktionslabor Dortmund. Rehearsals take place between the end of September and the beginning of October, with the first performances at the Dortmunder U from the end of October. The piece is conceived as site-specific and can settle into other spaces after the funded performances.',
];

const UNTER_HAUT_ARTISTS: Abschnitt = {
  label: 'Artists',
  text: [
    'Julie C. Stamm, Anna Deborah Disse, Madelyn Byrd, Lou Croff Blake, Scott Carver, Barış Pekçağlıyan',
  ],
};

const UNTER_HAUT: Uebersetzung = {
  title: 'Media art performance: Unter Haut',
  location: ORT_FOYER,
  text: UNTER_HAUT_TEXT,
  sections: [UNTER_HAUT_ARTISTS],
};

const VKII_WORKSHOP_TEXT = [
  'Spotting fake news, classifying hate speech, checking sources. Sounds easy? Two young people from the youth group of VKII Ruhrbezirk e. V. put the participants’ media literacy to the test.',
  'An interactive quiz explores how confidently we really move through digital information spaces. Then the perspectives switch: the young people talk about how they themselves became aware of issues such as disinformation, hate speech and a critical approach to social media. Together we discuss how educational offers can reach young people – and whether adults are automatically more media-literate.',
  'It is also about democracy: who decides which information we trust? How does digital content shape our opinions? And why are young people particularly affected by disinformation and hate speech?',
  'A workshop by young people for young people and adults, with a quiz, discussion and a critical look at our digital everyday lives.',
];

const VKII_WORKSHOP_SECTIONS: Abschnitt[] = [
  {
    label: 'Workshop leads',
    text: ['Desire Bigalske and Karl Nyuydine from VKII Ruhrbezirk e. V.'],
  },
  { label: 'About VKII Ruhrbezirk e. V.', text: vkiiText },
];

const SCHNELLHEFTER = [
  'The Schnellhefter*innen are a Dortmund workshop collective devoted to the do-it-yourself aesthetics of zine culture. The collective is Lisa Fischer, Max Rüthers and Luis F. Düllberg.',
  'Lisa is a freelance scenographer, tattoo artist and co-founder of the Flinta*sialand Festival. Max also works as a freelance scenographer and runs the exhibition format Werni & Fini at the Rekorder. Luis is a musician and freelance graphic designer with a passion for screen printing and risography.',
  'The Schnellhefter*innen are driven by the conviction that art and design do not have to be the preserve of professionals. They translate the immediacy of the zine movement into an accessible setting that counters learned perfectionism – with the aim of making free, collaborative making possible for everyone.',
];

const SPEED_ZINE_TEXT = [
  'One sheet. One pen. Eight pages. Let’s go!',
  'What actually is a zine? And what stories can you tell with it? At the kick-off, we Schnellhefter*innen show why we love this small, self-made medium so much: zines can be personal, political, silly, chaotic, loud or quiet. And above all, they don’t have to be perfect.',
  'In this two-hour workshop, we fold our own little booklet from a sheet of A3 paper and support you in designing the pages with small creative prompts. It is less about thinking and more about trying things out.',
  'We show how low-threshold making becomes possible when material and working time are deliberately limited. Drop by, grab a sheet and a pen and make a zine with us.',
];

const ZINE_WOCHENENDE_TEXT = [
  'On Saturday and Sunday things get more intensive: the Schnellhefter*innen bring analogue and digital tools together. At various creative stations, participants draw, write, photograph, collage, copy, distort and continue working digitally. It is not about perfection but about self-efficacy in times of polished AI worlds.',
  'Together we ask: which topics concern us? Who decides what is relevant and becomes visible? And how can zines carry personal, political, critical or niche content out into the world – independent of feeds and algorithms?',
  'Analogue works move into the digital, digital elements back onto paper. With playful tools and an online zine maker, we develop the resulting fragments further and turn them into new forms. The result is an open, process-based space between paper and screen, centred on your own ideas, exchange and authorship.',
];

const ZINE_WOCHENENDE_HINWEIS =
  'Two-day workshop: Saturday, 24 October, 14:00–17:30 and Sunday, 25 October, 14:00–18:00.';

const CAMILLA_SCHOLZ: Person = {
  name: 'Camilla Scholz',
  bio: [
    'Camilla Scholz is a media artist and creative technologist from Dortmund who works at the intersection of experimental programming, art and science, and interactive environments. She holds a master’s degree in Interface Cultures from the University of Arts Linz and has a background in human-computer interaction with a bachelor’s degree in Creative Technology from the University of Twente. Using creative coding and physical computing, she develops interactive installations and immersive experiences that explore new forms of perception and experience.',
  ],
};

const CAMILO_SANDOVAL: Person = {
  name: 'Camilo Sandoval',
  bio: [
    'Camilo Sandoval works as a multidisciplinary artist with a focus on experimental computing. He currently investigates the aesthetic and technological possibilities of craftsmanship in relation to data sovereignty and autonomy. He performs audiovisual sets under the pseudonym Janus, as part of the comedy duo Super Mora Bros. or as part of the noise and meta-communication trio Fauxmalhaut. He is currently based between Cologne and Bogotá.',
  ],
};

const INSTALLATION_EINLADUNG =
  'We warmly invite you to visit the art installation presented in the foyer of the Dortmunder U as part of the YU Festival from 22 to 25 October 2026 and to experience the emerging digital media art project for yourself. As an interactive project, the installation invites you to get involved, discover connections and become part of the evolving digital work.';

const HACKATHON_HINWEIS =
  'This workshop is part of the hackathon “Connections” within the framework of KoLab Days x ATEM Biennale and the YU Festival. After the workshop, work can continue in the workspace over several days, where the ideas developed can be deepened, tested and developed further together. Step by step, a collectively created VR installation emerges.';

const TONG_JIN_SMITH: Person = {
  name: 'Dr. Tong-Jin Smith',
  bio: [
    'Tong-Jin Smith holds a doctorate in political science and has worked as a freelance journalist since 1992, for outlets including Welt am Sonntag, Tagesspiegel, Berliner Morgenpost and ZDF. Since 2014 she has taught at various Berlin universities, and in 2019 she co-founded the Center for Media and Information Literacy (CeMIL) at Freie Universität Berlin. In the same year she was appointed Professor of Journalism at HMKW Berlin (now Media University of Applied Sciences). Since 2025 she has also been responsible for education at the think-and-do tank futur eins e. V. Her research and teaching focus on media maturity, news and information literacy, alternative media and the digital transformation of journalism and democracy.',
  ],
};

const JENNIFER_EICKELMANN: Person = {
  name: 'Dr. Jennifer Eickelmann',
  bio: [
    'Jennifer Eickelmann is Junior Professor of Digital Transformation in Culture and Society at the Faculty of Cultural and Social Sciences and co-spokesperson of the research focus digitale_kultur at FernUniversität in Hagen. She is co-editor of the series Digitale Kulturen at Hagen University Press and of the transdisciplinary journal kultur & geschlecht. Her work lies at the intersection of media theory, gender/queer media studies and the sociology of inequality and culture. It addresses the digital transformation of the public sphere and affect, digital violence and its regulation, the changing role of curating in the context of social media and museums and, more recently, the transformation of academia and universities against the backdrop of generative AI and authoritarian dynamics.',
  ],
};

// ------------------------------------------------------------
//  Ausstellungen
// ------------------------------------------------------------

export const ongoing: Record<string, Uebersetzung> = {
  'ausstellung-baze': {
    title: 'Exhibition: BAZE',
    by: 'by Sam Hopkins',
    period: '22–25 Oct 2026',
    location: ORT_FOYER,
    text: [
      'Baze is a project about being OFFLINE together. Not OFFLINE in the sense of analogue – because this is about producing and sharing digital content. And not OFFLINE in the sense of absence either – because it is about being present with other people.',
      'The project takes its name from the bazes of Nairobi: informal social spots where people come together, spend time, watch, listen and exchange digital media directly from device to device. Baze asks what happens when digital culture moves beyond platforms, algorithms and optimisation and becomes something we encounter and share together.',
      'At the heart of the project is the Cosmos of Content, a growing offline collection of digital content stored on a local server – outside the internet and its platforms. Visitors can browse the collection together and take files directly onto their own devices.',
      'The Cosmos is both an archive and an exhibition space. It contains videos, images, sounds, texts, publications, memes, tutorials, research and other things people want to share with others. Adding something is a bit like leaving a message in a bottle: a file for someone else, without knowing who will find it or when.',
      'Baze tries to bring the warmth of the neighbourhood into digital life.',
    ],
    sections: [
      {
        label: 'Artist',
        people: [
          {
            name: 'Sam Hopkins',
            bio: [
              'Sam Hopkins is an artist and teaches at the Academy of Media Arts Cologne (KHM).',
              'In the BAZE project he explores digital media, communal exchange and the question of how digital spaces can be used and shaped – examining how digital infrastructures influence the way we live together and share.',
              'For Manifesta+ in Dortmund, he is developing a local digital culture cosmos with BAZE at the SÖZ.',
            ],
          },
        ],
      },
    ],
    outro: [INSTALLATION_EINLADUNG],
  },
  'ausstellung-collective-mess': {
    title: 'Exhibition: Collective Mess',
    by: 'by Camilo Sandoval and Camilla Scholz',
    period: '22–25 Oct 2026',
    location: ORT_FOYER,
    bildAlt: 'Colourful pixelated collage with the lettering “Collective Mess”',
    text: [
      'Writing on the wall and – oops, you misspelled a word! Better cross it out and write over it, or just leave it like that? It looks cool anyway. Making a drawing together with people you just met, only to find the next day that someone has added flowers and a silly moustache. Yet another person adds a quote from their favourite song and completely changes the meaning of the drawing.',
      'Come back the day after, and your drawing, which used to sit alone, is now surrounded by a wall full of all kinds of messages and moving images: private memories, hidden desires – some are jokes, some are complaints, some are nostalgic, others are just intriguing.',
      'Using easy-to-code tools programmed in Processing and simple input devices such as webcams and buttons, everybody who wants to can take part in this “Collective Mess”: an animated digital graffiti wall that updates itself in real time.',
    ],
    sections: [{ label: 'Artists', people: [CAMILLA_SCHOLZ, CAMILO_SANDOVAL] }],
    outro: [INSTALLATION_EINLADUNG],
  },
};

// ------------------------------------------------------------
//  Programmpunkte
// ------------------------------------------------------------

export const events: Record<string, Uebersetzung> = {
  // ======================= FESTIVAL =======================
  'unter-haut-do': UNTER_HAUT,
  'workshop-medienkompetenz-festival': {
    title: 'Media literacy workshop: Who sees through whom?',
    by: 'with Desire Bigalske and Karl Nyuydine (VKII Ruhrbezirk e. V.)',
    text: VKII_WORKSHOP_TEXT,
    sections: VKII_WORKSHOP_SECTIONS,
  },
  'speed-zine-festival': {
    title: 'Speed zine workshop with the Schnellhefter*innen',
    bildAlt: ZINE_ALT,
    text: SPEED_ZINE_TEXT,
    sections: [{ label: 'A workshop by', text: SCHNELLHEFTER }],
  },
  'unter-haut-fr': UNTER_HAUT,
  'dj-set-3daea': {
    title: 'DJ set by 3ΔÆA – closing at the Mono Listening Café',
    text: [
      'Digital Thoughts // Latent Affects // Repetition // Temporal Suspension // Identifying Patterns // Embodying Anti-Patterns // Destruction // Reconstruction // Subject to Change',
      '3ΔÆA’s musical mission lies in reconciling opposites: the eerie, abrasive sound aesthetics of deconstructed post-club with the ritual trance of the dance floor. The music is the result of an artistic reflection on becoming oneself. The loop of the machines becomes a digital prison of consciousness that tries to break through algorithmic rigidity.',
    ],
  },
  'flowar-zukunftswerkstatt': {
    title: 'flowAR future workshop',
    by: 'with Larissa Schäfer and Dana Hoffmann',
    text: [
      'FlowAR is an app that makes ideas for the Ruhr area visible in 3D and augmented reality. On a virtual map, a picture emerges of how the region imagines its future.',
      'What is missing in your everyday life? What could your neighbourhood look like in a few years? In this workshop you talk with others, turn your wishes into your own visions and capture them creatively. You try out the app straight away and make your idea digitally visible. No previous knowledge needed.',
      'With your ideas you help us develop FlowAR further – and you become part of the FlowAR community.',
    ],
    sections: [
      { label: 'Speakers', text: ['Larissa Schäfer and Dana Hoffmann'] },
      {
        label: 'About FlowAR',
        text: [
          'FlowAR is an app that lets you visualise ideas for the future of the Ruhr area in 3D and augmented reality – no technical knowledge required. Ideas and missions from the community become visible on a virtual map of the region.',
          'Users can contribute their own visions for the city of tomorrow or develop existing ideas further. FlowAR is a research project of TU Dortmund University, the University of Duisburg-Essen and Digitale Kultur Dortmund, together with experts in programming and projection mapping. The app is being developed in collaboration with IGA 2027, where it will be presented. In future workshops we develop it further with the community and create a space for visions of the future.',
        ],
      },
    ],
  },
  'zine-workshop-sa': {
    title: 'Zine workshop with the Schnellhefter*innen (part 1)',
    bildAlt: ZINE_ALT,
    note: ZINE_WOCHENENDE_HINWEIS,
    text: ZINE_WOCHENENDE_TEXT,
    sections: [{ label: 'A workshop by', text: SCHNELLHEFTER }],
  },
  'workshop-cyberfeminismus': {
    title: 'Workshop: Cyberfeminist strategies in generative art practice',
    by: 'with Darbyn Luisa Kalkuhl',
    bildAlt: 'Code fragments with the lettering “Cyberfeministische Strategien” and “KI-Praxis”',
    text: [
      'How can AI tools be claimed in a self-determined way to undermine biases and shape our own emancipatory aesthetics beyond Big Tech monopolies? This workshop bridges critical discourse and your own artistic practice.',
      'The first part is discursive and offers a look behind the scenes of data-based systems. Inspired by cyberfeminist approaches, it raises awareness of how biases arise and how creativity changes when working with AI. The subsequent practical part focuses on using common LLMs and the text-to-image model Stable Diffusion. Concrete methods for your own creative work are presented and tested in an experimental setting in order to subvert AI defaults and shape your own narratives.',
      'The workshop is aimed at everyone who wants to critically question AI technologies and actively help shape them. As there are only a few PCs on site, please bring your own powerful Windows laptop if possible.',
    ],
    sections: [
      {
        label: 'Speaker',
        people: [
          {
            name: 'Darbyn Luisa Kalkuhl',
            bio: [
              'Darbyn works as an intermedia artist at the intersection of social science, media art and performance. As founder of the Queeres Theater Kollektiv, Darbyn directs conceptually and explores neuroqueer and intermedia aesthetics, for instance by combining real-time digital media with the performing arts. At the centre of the artistic practice is the deconstruction of social power relations and normative structures.',
              'A focus of Darbyn’s current work is the development of a critical AI methodology that enables artists to appropriate generative systems creatively and on their own terms.',
            ],
          },
        ],
      },
    ],
  },
  'talk-community-visions': {
    title: 'Talk: Community Visions',
    by: 'Moderated by Florencia Alonso',
    text: [
      'Community Visions brings together artists, creatives and organisers who share their visions for new digital spaces and forms of creative togetherness. How can digital spaces become places where we think, make, learn and dream together? Which new forms of community can emerge? And what becomes possible when we understand the digital not only as a space we use, but as a space we shape and invent together?',
    ],
    sections: [
      { label: 'Moderator', text: ['Florencia Alonso'] },
      {
        label: 'Guests',
        text: ['Raphaël de Courville, Darbyn Luisa Kalkuhl, Camilo Sandoval, Sam Hopkins'],
      },
    ],
  },
  'unter-haut-sa': UNTER_HAUT,
  'movement-workshop': {
    title: 'Movement workshop: Can you feel your body',
    by: 'with Julie C. Stamm and Anna Deborah Disse',
    sections: [
      {
        label: 'Workshop leads',
        people: [
          {
            name: 'Julie C. Stamm',
            bio: [
              'Julie C. Stamm works at the intersection of choreography and media art. Her background combines neuroaesthetics (Goldsmiths, University of London), contemporary dance (Performact) and experimental sensing. In her artistic work and in the NoEndToTheRoad Fellowship ’25 she investigates how everyday digital and tracking technologies shape our movements and collective choreographies.',
            ],
          },
          {
            name: 'Anna Deborah Disse',
            bio: [
              'Anna Deborah Disse is a dancer, choreographer and dance educator focusing on improvisation and the connection between movement, identity and presence. Anna studied at the Ballettakademie Hans Vogl and Performact (PT), among others, and has realised projects with dajci*, Julie C. Stamm and Celia Morris. Anna has been teaching dance to young people for more than six years and presents their own work at various Berlin venues.',
            ],
          },
        ],
      },
    ],
  },
  'zine-workshop-so': {
    title: 'Zine workshop with the Schnellhefter*innen (part 2)',
    bildAlt: ZINE_ALT,
    note: ZINE_WOCHENENDE_HINWEIS,
    text: ZINE_WOCHENENDE_TEXT,
    sections: [{ label: 'A workshop by', text: SCHNELLHEFTER }],
  },
  'unter-haut-so': UNTER_HAUT,

  // ======================= KONFERENZ =======================
  'konf-keynote': {
    title: 'Keynote: Making connections, being moved! The common in the digital',
    note: BLOCK_1,
    text: [
      'How can and do we want to live together when digital spaces and public spheres are co-shaped by platforms that are geared not least towards exclusion and marginalisation? How can we counter this?',
      'After an introductory problematisation of the status quo, the talk opens up two interrelated horizons for democratic coexistence under digital conditions: first, a reflection on where and under which conditions something can emerge that we can understand as something shared; and second, the question of how connections can be created that move us – and movements that connect.',
    ],
    sections: [{ label: 'Speaker', people: [JENNIFER_EICKELMANN] }],
  },
  'konf-impuls-salon5': {
    title: 'Input talk: From scrolling to taking part – reaching young people through active media work',
    note: BLOCK_1,
    text: [
      'Social media, videos and podcasts are a natural part of young people’s lives – and at the same time important places where they get information, exchange ideas and form opinions. How can these media be used meaningfully in work with young people instead of being seen primarily as a problem?',
      'This short input shows how media work can reach young people and turn them from mere media consumers into active media makers. The central question is how young people can be empowered to critically question information and sources, to recognise disinformation and AI fakes, and at the same time to make their own topics, opinions and perspectives visible. Media literacy is understood not only as the ability to use media critically, but also as active digital participation.',
      'Using the example of the project “Salon5 FaktenChecker – Youth against disinformation”, the talk shows how young people pass on their knowledge through research, fact checks, their own fact-check reels and learning videos on the platforms they use every day.',
    ],
    sections: [
      {
        label: 'Speaker',
        people: [
          {
            name: 'Paula Weber',
            bio: [
              'Paula Weber is a media educator at the Salon5 youth newsroom in Dortmund. She wants to give young people low-threshold access to journalism and encourage them to develop their own projects and formats. She designs and leads workshops on journalism and media literacy and works closely with young reporters from Dortmund and the Ruhr area. Since September 2025 she has led the pilot project “Salon5 FaktenChecker – Youth against disinformation”, in which young people learn to recognise disinformation and pass on their knowledge of how social media works to other young people.',
            ],
          },
        ],
      },
      {
        label: 'Salon5 – Die Jugendredaktion',
        text: [
          'Salon5 is the youth newsroom of CORRECTIV and stands for journalism by young people for young people. Here, young people learn the craft of journalism and explore topics that interest and move them. Whether podcasts, videos or posts on Instagram or TikTok – at Salon5 young people create media themselves and make their perspectives visible, supported by journalists.',
        ],
      },
    ],
  },
  'konf-muendig-mit-medien': {
    title: 'Short talk: Mündig mit Medien (media maturity)',
    note: BLOCK_1,
    text: [
      'In the German school system, media education is considered a cross-curricular task – even in federal states that have made it a subject together with computer science. The challenge: if media education is everyone’s task, all teachers need to be qualified for it. In addition, schools need their own tailored core curricula based on a common standard that defines what pupils should be able to do at which age.',
      'The talk presents the initiative “Mündig mit Medien”, which since 2024 has been using an action-research approach at Freie Universität Berlin and two partner schools to develop teaching formats with (prospective) teachers that can be used regardless of federal state and framework curriculum. Using the example of the Nelson Mandela School in Berlin, it shows how a school’s own core curriculum is created and how children and young people – from primary school to their final exams – learn to critically question and productively use digital platforms, tools and AI, to take part constructively in public discourse and to move through digital spaces in a self-determined way.',
    ],
    sections: [{ label: 'Speaker', people: [TONG_JIN_SMITH] }],
  },
  'konf-ankoppeln-docriva': {
    title: 'Short talk: Digital participation in practice – Ankoppeln & Docriva',
    by: 'Cedric Ngonthe and Aime Yonkeu (VKII Ruhrbezirk e. V.)',
    note: BLOCK_1,
    text: [
      'How can digital applications make social and community work easier in concrete terms? Cedric Ngonthe from VKII Ruhrbezirk e. V. and Aime Yonkeu present two applications they developed themselves, both born out of concrete needs in practice.',
      'The Ankoppeln app is a networking platform for non-profit associations. It helps organisations connect with one another and document their non-profit and social work digitally – showing how digitalisation can support cooperation and participation in civil society.',
      'The second application, Docriva, is aimed directly at people who are confronted with complex documents in everyday life. Documents can be scanned, managed digitally and made easier to understand with the help of AI. People facing language barriers in particular get support in understanding and managing demanding letters more independently.',
      'Using two concrete examples, the presentation shows how technology can be used to make access easier and to promote social participation.',
    ],
  },
  'konf-podium': {
    title: 'Panel: How do digital spaces shape the way we live together?',
    by: 'with Nhi Le, Suraj Mailitafi, Dr. Tong-Jin Smith and Dr. Jennifer Eickelmann',
    note: BLOCK_1,
    text: [
      'Together with our panel guests Nhi Le, Suraj Mailitafi, Dr. Tong-Jin Smith and Dr. Jennifer Eickelmann, we discuss the following questions:',
    ],
    sections: [
      {
        label: 'Part 1 – How do digital spaces shape the way we live together?',
        text: [
          'Digital spaces have become an integral part of our everyday lives. They change how we communicate and how we experience community and democracy. At the same time, they raise new questions for our society: which information can we trust? How do we meet each other? How do we debate with one another? And what does it take for everyone to be able to participate in digital life? We discuss how the internet shapes the way we live together today and which skills we need to take part in the digital society.',
        ],
      },
      {
        label: 'Part 2 – Digital debates: how do we strengthen dialogue in digital space?',
        text: [
          'Is open discourse online still possible? Hate, exclusion and a harsh tone are part of everyday online life for many people, which deters many from joining discussions. What can we do about it? How do we create digital spaces in which different voices are heard and more people can contribute safely? In the second part, we talk about the responsibility of platforms, the media and all of us – and what it takes to make the internet more open, fair and inclusive.',
        ],
      },
      {
        label: 'Our guests',
        people: [
          {
            name: 'Nhi Le',
            bio: [
              'Nhi Le is a journalist, moderator and author. Her focus areas include digital media culture, the intersections between pop and politics, and the immigration society of East Germany with a focus on the Vietnamese diaspora. She currently works primarily for Norddeutscher Rundfunk (NDR) and other public-service broadcasters.',
              'ZEIT included her among the 100 most important young people from East Germany. In 2021, Medium Magazin selected her as one of the top 30 journalists under 30 in the country. Her work has been awarded the Alternativer Medienpreis (Alternative Media Award).',
            ],
          },
          {
            name: 'Suraj Mailitafi',
            bio: [
              'Suraj is a political activist and content creator. He campaigns against racism and fascism and for equal opportunities – on the streets, in schools and on social media.',
              'With his work he reaches up to 12 million people a month on Instagram and TikTok. His content is aimed in particular at young and migrantised people, whom he informs about socio-political issues in a calm, authentic and accessible way.',
              'Suraj is also involved in the initiative “Gerechtigkeit für Lorenz” (Justice for Lorenz), which calls for a full investigation into racist police violence.',
            ],
          },
          TONG_JIN_SMITH,
          JENNIFER_EICKELMANN,
        ],
      },
      {
        label: 'Moderator',
        people: [
          {
            name: 'Denise Gühnemann',
            bio: [
              'Denise Gühnemann has worked in cultural and media education for many years. In various roles – from project management and editorial work to research – she has dealt with digital games, media education and the digitalisation of society. She regularly moderates formats on media education and mediatisation.',
            ],
          },
        ],
      },
    ],
  },
  'konf-workshop-medienkompetenz': {
    title: 'Workshop: Who sees through whom?',
    by: 'with Desire Bigalske and Karl Nyuydine (VKII Ruhrbezirk e. V.)',
    note: BLOCK_2,
    text: VKII_WORKSHOP_TEXT,
    sections: VKII_WORKSHOP_SECTIONS,
  },
  'konf-speed-zine': {
    title: 'Speed zine workshop with the Schnellhefter*innen',
    bildAlt: ZINE_ALT,
    note: BLOCK_2,
    text: SPEED_ZINE_TEXT,
    sections: [{ label: 'Workshop leads', text: SCHNELLHEFTER }],
  },

  // ======================= HACKATHON =======================
  'hack-creative-coding': {
    title: 'Creative coding workshop for beginners',
    by: 'with Camilla Scholz and Camilo Sandoval',
    bildAlt: 'Grid of colourful shapes and stars drawn with p5.js',
    text: [
      'To celebrate the 25th anniversary of Processing, this workshop offers an easy, hands-on introduction to the creative coding language p5.js, a programming language specifically designed to make code more accessible.',
      'In this course, we approach programming from an artistic perspective: we use p5.js as a digital painting tool. Using simple geometric shapes, colours and algorithms, you build visual compositions step by step and create your first programmed sketches.',
      'The workshop is designed for absolute beginners. No prior programming experience is required. Just bring your own laptop!',
      HACKATHON_HINWEIS,
    ],
    sections: [{ label: 'Workshop leads', people: [CAMILLA_SCHOLZ, CAMILO_SANDOVAL] }],
  },
  'hack-pdxr': {
    title: 'PdXR – Pure Data in the augmented reality metaverse',
    by: 'with Damian T. Dziwis',
    text: [
      'What does a virtual world sound like that connects with ours – and how can it be programmed with Pure Data? In this workshop, participants get to know PdXR, a system that makes Pure Data patches executable in interactive, immersive and networked XR environments. Together we develop small sound experiments, virtual instruments or spatial soundscapes, combining the possibilities of Pure Data with the interaction and spatiality of virtual 3D worlds. Pd objects and interfaces become interactive elements that can be explored, controlled and played together.',
      'The workshop is aimed at musicians, sound and media artists, creative coders and anyone who wants to try out Pure Data in a new spatial and collaborative context. Prior knowledge of Pure Data is helpful but not essential.',
      HACKATHON_HINWEIS,
    ],
    sections: [
      {
        label: 'Workshop lead',
        people: [
          {
            name: 'Damian T. Dziwis',
            bio: [
              'Damian T. Dziwis (born 1986 in Poland) is a composer, media artist and researcher based in Düsseldorf. His work combines AI, generative audiovisual algorithms, live coding, DIY electronics, spatial audio and virtual environments (VR/AR/XR). He studied media technology (B.Eng., 2015) in Düsseldorf and electronic composition (M.Mus., 2017) in Cologne, and completed his doctorate on “Sound and Music in Virtual Environments” in Berlin and Cologne in 2026. His performances and installations have been shown at MUTEK Montreal, CTM Festival, Music Tech Fest, Beethovenfest, The Wrong Biennale and Miami Art Week, among others. Dziwis was a visiting professor in Detmold, has taught creative coding in Düsseldorf and is a co-founder of the ATEM Biennial.',
            ],
          },
        ],
      },
    ],
  },
  'hack-blender': {
    title: '3D modelling for web art in Blender',
    by: 'with Timo Sodenkamp and Marc Kemper from KoLab',
    text: [
      'How do 3D models get from Blender onto the web – and what do you need to consider so that they run smoothly there?',
      'In this three-hour workshop, we look at the basics of 3D modelling in Blender and at how 3D assets can be optimised for interactive web applications and VR.',
      'Together we go through the workflow from the first idea to a web-ready 3D asset: we teach basic modelling techniques, work with materials, textures and polygon counts, and show how models are prepared and exported for use in the browser. We also take a look at generative tools for creating 3D content and discuss how existing online assets can be used, adapted and integrated into your own projects.',
      'The workshop is also suitable for beginners. No prior knowledge of Blender or web development is required.',
      'Tools: Blender, 3D modelling, web art, optimisation of 3D assets, generative tools, online assets, A-Frame, VR.',
    ],
    sections: [
      {
        label: 'Workshop leads',
        text: ['Timo Sodenkamp and Marc Kemper from KoLab (Digitales Koproduktionslabor)'],
      },
    ],
  },
  'hack-shared-worlds': {
    title: 'Shared Worlds – interactive augmented reality worlds with A-Frame',
    text: [
      'In this workshop, participants learn how walkable AR worlds can be created with the web-based open-source framework A-Frame. They design and position objects, work with light, materials, transformation and movement, and thus create their own spatial artistic work. A-Frame offers a comparatively direct entry into immersive web applications and at the same time numerous possibilities for extension – through JavaScript, custom 3D models or sound-based applications such as PdXR.',
      'Alongside the technical basics, we also discuss how digital spaces can be designed and used for your own artistic, design or experimental projects. The workshop is aimed at media artists, designers, creative coders, musicians and anyone interested in interactive 3D worlds, web technologies and XR. Basic experience with HTML or 3D design is helpful but not a requirement.',
      HACKATHON_HINWEIS,
    ],
  },
  'hack-coding-jam': {
    title: 'Coding jam: Collective Mess',
    by: 'with Camilla Scholz and Camilo Sandoval',
    bildAlt: 'Generative pattern of intertwined lime-green lines on black',
    text: [
      'In this coding jam, we transform code and visuals into a “Collective Mess”. Instead of perfect code or finished results, the focus is on sketching, discarding, experimenting and deliberately disrupting. Using vibe coding as a medium and a variety of inputs, from cameras to mini keyboards to microphones, we experiment with code and interaction.',
      'On a shared digital canvas, thoughts, discussions and images overlap, merge into new layers and transform into something entirely new. The collective painting thus becomes a living reflection of shared ideas.',
      'First presented in the foyer of the Dortmunder U, the collaborative work then migrates to the metaverse, where it lives on in the hackathon’s digital space.',
      HACKATHON_HINWEIS,
    ],
    sections: [{ label: 'Workshop leads', people: [CAMILLA_SCHOLZ, CAMILO_SANDOVAL] }],
  },
  'hack-showcase': {
    title: 'Showcase: Connections',
    by: 'Presentation of the hackathon results',
    location: ORT_FOYER,
    text: [
      'How does a shared digital world come into being when different artistic perspectives, ideas and ways of working meet?',
      'In the hackathon “Connections”, contributions from 3D, sound, web art, creative coding, film and music were developed, tested and connected. Step by step, individual experiments, sounds, images, spaces and interactive elements grew into a shared web-based VR installation.',
      'The aim was not to place individual works side by side, but to create connections between them: how do different elements react to one another? How can different artistic approaches interact in a virtual space? And what happens when many individual ideas become a shared space of experience?',
      'On Sunday, visitors can enter, explore and try out this jointly developed space themselves – and experience how different contributions have grown into an interactive digital world.',
    ],
  },
};
