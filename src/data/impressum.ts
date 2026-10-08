// ============================================================
//  IMPRESSUM UND RECHTLICHE HINWEISE
//  Quelle: „Anpassungen YU Festival Website“ (Oktober 2026).
//  Die Rechtstexte stehen bewusst wörtlich und in der Sie-Form wie
//  geliefert – Änderungen daran bitte mit der Stadt Dortmund abstimmen.
// ============================================================

export const impressum = {
  intro: 'Die Website yufestival.de ist ein Projekt der Stadt Dortmund im Dortmunder U.',
  verantwortlich: {
    titel: 'Projekt- und Veranstaltungsleitung',
    anschrift: [
      'Valentin Boczkowski',
      'Dortmunder U',
      'Abteilung Digitale Kultur',
      'Leonie-Reygers-Terrasse',
      '44137 Dortmund',
    ],
    email: 'vboczkowski@stadtdo.de',
    telefon: '0231 / 50 16687',
    /** für den tel:-Link */
    telefonLink: '+492315016687',
  },
};

export type RechtsAbschnitt = {
  titel: string;
  absaetze: string[];
  /** Aufzählung, jeweils mit fettem Anfang */
  liste?: { fett: string; text: string }[];
  /** Absätze nach der Aufzählung */
  nach?: string[];
  unter?: RechtsAbschnitt[];
};

/** Abschnitte unter „Haftungsausschluss“ */
export const haftungsausschluss: RechtsAbschnitt[] = [
  {
    titel: 'Veranstaltungen und Anmeldungen',
    absaetze: [
      'Die Teilnahme an unseren Veranstaltungen ist grundsätzlich kostenlos. Für einzelne Veranstaltungen kann jedoch eine vorherige Anmeldung erforderlich sein.',
      'Wenn Sie sich zu einer Veranstaltung anmelden, verarbeiten wir die von Ihnen im Rahmen der Anmeldung angegebenen personenbezogenen Daten, insbesondere Name, E-Mail-Adresse sowie gegebenenfalls weitere für die Organisation der jeweiligen Veranstaltung erforderliche Angaben.',
      'Die Verarbeitung erfolgt ausschließlich zum Zweck der Bearbeitung und Verwaltung der Anmeldung, zur organisatorischen Durchführung der Veranstaltung sowie zur Kommunikation mit den angemeldeten Personen im Zusammenhang mit der jeweiligen Veranstaltung.',
      'Rechtsgrundlage für die Verarbeitung der Anmeldedaten ist, soweit die Verarbeitung für die Durchführung der Anmeldung und die damit verbundene Organisation erforderlich ist, Art. 6 Abs. 1 lit. b DSGVO bzw. Art. 6 Abs. 1 lit. f DSGVO, soweit die Verarbeitung auf unserem berechtigten Interesse an einer ordnungsgemäßen Veranstaltungsorganisation beruht.',
      'Die im Rahmen einer Anmeldung erhobenen personenbezogenen Daten werden gelöscht, sobald sie für die genannten Zwecke nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten oder sonstigen berechtigten Gründe für eine weitere Speicherung bestehen.',
    ],
  },
  {
    titel: 'Kontaktaufnahme per E-Mail',
    absaetze: [
      'Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen mitgeteilten personenbezogenen Daten, insbesondere Ihre E-Mail-Adresse sowie die Inhalte Ihrer Anfrage, ausschließlich zur Bearbeitung und Beantwortung Ihres Anliegens.',
      'Die Bereitstellung dieser Daten erfolgt freiwillig. Ohne die für die Bearbeitung erforderlichen Angaben können wir Ihre Anfrage gegebenenfalls nicht oder nicht vollständig beantworten.',
      'Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres berechtigten Interesses an der Bearbeitung und Beantwortung von Anfragen. Soweit Ihre Anfrage auf den Abschluss oder die Durchführung eines Vertrags gerichtet ist, kann Art. 6 Abs. 1 lit. b DSGVO die Rechtsgrundlage sein.',
      'Die im Rahmen einer Anfrage übermittelten Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet wurde und keine gesetzlichen Aufbewahrungspflichten oder sonstigen berechtigten Gründe für eine weitere Speicherung bestehen.',
    ],
  },
  {
    titel: 'Foto- und Videoaufnahmen bei Veranstaltungen',
    absaetze: [
      'Bei unseren Veranstaltungen können Foto- und Videoaufnahmen angefertigt werden.',
      'Eine Aufnahme und Veröffentlichung von erkennbaren Personen zu Zwecken der Öffentlichkeitsarbeit, Dokumentation oder Berichterstattung über unsere Veranstaltungen erfolgt grundsätzlich nur mit der vorherigen Einwilligung der betroffenen Person, soweit keine andere gesetzliche Rechtsgrundlage für die jeweilige Aufnahme und Veröffentlichung besteht.',
      'Die Einwilligung ist freiwillig und kann jederzeit mit Wirkung für die Zukunft widerrufen werden. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt vom Widerruf unberührt.',
      'Wenn Sie nicht fotografiert oder gefilmt werden möchten, können Sie dies den für die Veranstaltung zuständigen Personen mitteilen. Bei geplanten Foto- oder Videoaufnahmen werden wir, soweit möglich, gesondert darauf hinweisen und die erforderliche Einwilligung einholen.',
      'Bei einer Veröffentlichung von Foto- oder Videoaufnahmen kann eine Veröffentlichung insbesondere auf unserer Website, in sozialen Netzwerken oder in sonstigen Medien erfolgen. Über den jeweiligen Verwendungszweck und die konkrete Veröffentlichung werden die betroffenen Personen im Rahmen der Einwilligung informiert.',
    ],
  },
  {
    titel: 'Einbindung von Social Media',
    absaetze: [
      'Auf unserer Website können Inhalte oder Funktionen sozialer Netzwerke eingebunden werden. Eine Verbindung zu entsprechenden Diensten und eine damit verbundene Übermittlung personenbezogener Daten erfolgt grundsätzlich erst, nachdem Sie hierzu ausdrücklich eingewilligt haben.',
      'Ohne Ihre Einwilligung werden keine entsprechenden Social-Media-Inhalte geladen, soweit dies technisch möglich ist. Erst nach Erteilung der Einwilligung kann beispielsweise eine Verbindung zu den Servern des jeweiligen Anbieters hergestellt werden. Dabei können unter anderem Ihre IP-Adresse sowie weitere technische Informationen an den jeweiligen Anbieter übermittelt werden.',
      'Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.',
      'Welche Social-Media-Dienste tatsächlich eingebunden werden, hängt von den auf unserer Website verwendeten Funktionen ab. Die jeweiligen Anbieter, Zwecke der Verarbeitung und gegebenenfalls Informationen zu Datenübermittlungen in Drittländer werden im Rahmen des jeweiligen Einwilligungsdialogs bzw. in den entsprechenden Datenschutzhinweisen erläutert.',
    ],
  },
  {
    titel: 'Fotos, Bilder, Texte und sonstige Inhalte',
    absaetze: [
      'Bitte beachten Sie bei den auf unserer Website veröffentlichten Fotos und Bildern die jeweils angegebenen Bild- und Urhebernachweise.',
      'Die auf unserer Website veröffentlichten Texte, Grafiken, Fotos, Videos, Streams, Datensammlungen und sonstigen Inhalte können urheberrechtlich geschützt sein. Eine Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Nutzung außerhalb der gesetzlich zulässigen Grenzen bedarf grundsätzlich der Zustimmung des jeweiligen Rechteinhabers.',
      'Soweit auf unserer Website Inhalte Dritter verwendet werden, bleiben die jeweiligen Rechte der Rechteinhaber unberührt. Die entsprechenden Rechte- und Quellenangaben sind zu beachten.',
    ],
  },
  {
    titel: 'Eingesandte Inhalte und Veranstaltungshinweise',
    absaetze: [
      'Wir können von Nutzerinnen und Nutzern eingesandte Inhalte, beispielsweise Veranstaltungshinweise, Texte, Bilder oder Link-Vorschläge, redaktionell prüfen und gegebenenfalls auf unserer Website veröffentlichen.',
      'Es besteht kein Anspruch auf Veröffentlichung. Wir behalten uns vor, eingesandte Inhalte abzulehnen, zu kürzen oder redaktionell zu bearbeiten, soweit dies zur Veröffentlichung erforderlich ist.',
      'Die einsendende Person ist dafür verantwortlich, dass die von ihr übermittelten Inhalte rechtmäßig sind und keine Rechte Dritter verletzen. Insbesondere muss sie über die erforderlichen Nutzungsrechte an eingesandten Texten, Fotos, Grafiken und sonstigen Inhalten verfügen.',
      'Nicht veröffentlicht werden insbesondere rechtswidrige, beleidigende, diskriminierende oder sonstige unzulässige Inhalte. Einreichungen mit unmittelbar parteipolitischem oder vergleichbarem werbendem Charakter können ebenfalls abgelehnt werden.',
      'Mit der Übermittlung von Inhalten wird uns keine weitergehende Nutzung eingeräumt, als dies für die Prüfung, redaktionelle Bearbeitung und gegebenenfalls Veröffentlichung des jeweiligen Inhalts erforderlich ist, sofern nicht ausdrücklich etwas anderes vereinbart wurde.',
    ],
  },
  {
    titel: 'Haftung für Inhalte und Informationen',
    absaetze: [
      'Wir bemühen uns um eine sorgfältige und aktuelle Gestaltung unserer Website. Für die Richtigkeit, Vollständigkeit und Aktualität sämtlicher Inhalte kann jedoch keine Gewähr übernommen werden, soweit gesetzlich zulässig.',
      'Eine Haftung für Schäden, die durch die Nutzung oder Nichtnutzung der auf unserer Website bereitgestellten Informationen oder durch die Nutzung verlinkter externer Inhalte entstehen, besteht nur im Rahmen der gesetzlichen Vorschriften.',
    ],
  },
  {
    titel: 'Haftung für Links',
    absaetze: [
      'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
    ],
  },
  {
    titel: 'Urheberrecht',
    absaetze: [
      'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
    ],
  },
  {
    titel: 'Rechte der betroffenen Personen',
    absaetze: [
      'Sie haben nach Maßgabe der gesetzlichen Voraussetzungen folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:',
    ],
    unter: [
      {
        titel: 'Recht auf Auskunft',
        absaetze: [
          'Sie haben gemäß Art. 15 DSGVO das Recht, Auskunft darüber zu verlangen, ob und welche personenbezogenen Daten wir über Sie verarbeiten. Dazu gehören insbesondere Informationen über die Zwecke der Verarbeitung, die Kategorien der verarbeiteten Daten, Empfänger, Speicherdauer und die Ihnen zustehenden weiteren Rechte.',
        ],
      },
      {
        titel: 'Recht auf Berichtigung',
        absaetze: [
          'Sie haben gemäß Art. 16 DSGVO das Recht, die Berichtigung unrichtiger personenbezogener Daten und die Vervollständigung unvollständiger personenbezogener Daten zu verlangen.',
        ],
      },
      {
        titel: 'Recht auf Löschung',
        absaetze: [
          'Sie haben gemäß Art. 17 DSGVO das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen, soweit die gesetzlichen Voraussetzungen hierfür vorliegen.',
          'Dies gilt insbesondere, wenn die Daten für die Zwecke, für die sie erhoben wurden, nicht mehr erforderlich sind oder eine Einwilligung widerrufen wurde und keine andere Rechtsgrundlage für die Verarbeitung besteht.',
        ],
      },
      {
        titel: 'Recht auf Einschränkung der Verarbeitung',
        absaetze: [
          'Sie haben gemäß Art. 18 DSGVO unter den gesetzlichen Voraussetzungen das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
        ],
      },
      {
        titel: 'Recht auf Datenübertragbarkeit',
        absaetze: [
          'Sie haben gemäß Art. 20 DSGVO unter den gesetzlichen Voraussetzungen das Recht, personenbezogene Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu verlangen.',
        ],
      },
      {
        titel: 'Recht auf Widerspruch',
        absaetze: [
          'Sie haben gemäß Art. 21 DSGVO das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, sofern die Verarbeitung auf Art. 6 Abs. 1 lit. e oder lit. f DSGVO beruht.',
          'Werden personenbezogene Daten zum Zwecke der Direktwerbung verarbeitet, haben Sie das Recht, jederzeit Widerspruch gegen diese Verarbeitung einzulegen.',
        ],
      },
      {
        titel: 'Recht auf Widerruf einer Einwilligung',
        absaetze: [
          'Soweit eine Verarbeitung auf Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO beruht, können Sie Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.',
          'Durch den Widerruf wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.',
          'Zur Ausübung Ihrer Rechte können Sie sich jederzeit über die im Impressum angegebenen Kontaktdaten an uns wenden.',
        ],
      },
      {
        titel: 'Beschwerderecht bei einer Aufsichtsbehörde',
        absaetze: [
          'Sie haben gemäß Art. 77 DSGVO das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen datenschutzrechtliche Vorschriften verstößt.',
          'Sie können sich insbesondere an die für unseren Sitz zuständige Datenschutzaufsichtsbehörde wenden.',
        ],
      },
    ],
  },
  {
    titel: 'Rechtsgrundlagen der Verarbeitung',
    absaetze: [
      'Die Verarbeitung personenbezogener Daten erfolgt bei uns nur, soweit hierfür eine gesetzliche Rechtsgrundlage besteht.',
      'Je nach Verarbeitung kann insbesondere eine der folgenden Rechtsgrundlagen einschlägig sein:',
    ],
    liste: [
      {
        fett: 'Art. 6 Abs. 1 lit. a DSGVO:',
        text: 'Verarbeitung aufgrund einer Einwilligung, beispielsweise beim Newsletter oder bei bestimmten Foto- und Videoaufnahmen.',
      },
      {
        fett: 'Art. 6 Abs. 1 lit. b DSGVO:',
        text: 'Verarbeitung, soweit diese für die Durchführung einer Anmeldung oder für vorvertragliche Maßnahmen erforderlich ist.',
      },
      {
        fett: 'Art. 6 Abs. 1 lit. c DSGVO:',
        text: 'Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung.',
      },
      {
        fett: 'Art. 6 Abs. 1 lit. f DSGVO:',
        text: 'Verarbeitung aufgrund berechtigter Interessen, soweit die gesetzlichen Voraussetzungen hierfür erfüllt sind.',
      },
    ],
    nach: [
      'Wir prüfen für die jeweilige Verarbeitung, welche Rechtsgrundlage tatsächlich einschlägig ist.',
    ],
  },
  {
    titel: 'Berechtigte Interessen',
    absaetze: [
      'Soweit wir personenbezogene Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeiten, besteht unser berechtigtes Interesse insbesondere in der ordnungsgemäßen Organisation und Durchführung unserer gemeinnützigen Tätigkeit, der Bearbeitung von Anfragen, der Kommunikation mit Teilnehmerinnen und Teilnehmern sowie der sicheren und funktionsfähigen Bereitstellung unserer Website.',
      'Dabei berücksichtigen wir die Interessen und Grundrechte der betroffenen Personen und verarbeiten personenbezogene Daten nur, soweit dies zur Erreichung des jeweiligen Zwecks erforderlich ist.',
    ],
  },
  {
    titel: 'Automatisierte Entscheidungsfindung und Profiling',
    absaetze: [
      'Eine automatisierte Entscheidungsfindung im Sinne des Art. 22 DSGVO findet nicht statt.',
      'Ein Profiling findet ebenfalls nicht statt.',
    ],
  },
];
