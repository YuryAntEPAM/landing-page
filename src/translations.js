const translations = {
  en: {
    // Header
    nav: {
      about: 'About',
      program: 'Program',
      speakers: 'Speakers',
      gallery: 'Gallery',
      faq: 'FAQ',
      register: 'Register',
    },

    // Hero
    hero: {
      badge: 'UPCOMING EVENT',
      titleLine1: 'AI in Business Summit',
      titleLine2: 'Zurich 2026',
      subtitle: 'Where Business Leaders & AI Practitioners Shape the Future of Enterprise',
      date: 'March 15, 2026',
      location: 'EPAM Office, Zurich',
      registerBtn: 'Register Now',
      countdownStarted: 'Event Started!',
      countdownLabels: {
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
      },
    },

    // About
    about: {
      title: 'About the Event',
      p1: 'AI in Business Summit Zurich 2026 brings together business leaders, technology strategists, and AI practitioners to explore how artificial intelligence is transforming modern enterprises. The event focuses on practical adoption of AI across operations, customer experience, software delivery, and decision-making.',
      p2: 'Hosted at the EPAM Office in Zurich, the summit is designed as a compact, high-value forum for executives and innovation teams. Whether you are just beginning your AI journey or already scaling enterprise solutions, you will find sessions that speak directly to your challenges and goals.',
      p3: 'Join us on March 15, 2026 for an intimate, high-impact day of keynotes, expert talks, and meaningful conversations that will help you understand what separates AI leaders from AI followers — and how to act on it.',
      stats: {
        day: '1 Day',
        dayLabel: 'Focused Summit',
        sessions: '5',
        sessionsLabel: 'Sessions',
        speakers: '4',
        speakersLabel: 'Speakers',
        location: 'Zurich',
        locationLabel: 'Switzerland',
      },
    },

    // Program
    program: {
      title: 'Program Schedule',
      subtitle: 'March 15, 2026 — EPAM Office, Zurich',
      schedule: [
        { time: '09:00 – 09:30', title: 'Registration & Welcome Coffee', speaker: 'EPAM Office, Zurich', type: 'break' },
        { time: '09:30 – 10:00', title: 'Opening Keynote: The New Era of AI-Native Business', speaker: 'Dr. Anna Keller, Head of AI Strategy, Swiss Digital Innovation Group', type: 'keynote' },
        { time: '10:00 – 10:45', title: 'From Experiment to Scale: Building Enterprise AI That Delivers Value', speaker: 'Michael Weber, VP Enterprise Transformation, EPAM Switzerland', type: 'talk' },
        { time: '11:00 – 11:45', title: 'AI in Software Delivery: From Copilots to Autonomous Engineering Workflows', speaker: 'Sophie Laurent, Director of Data & AI Governance, Alpine Financial Services', type: 'talk' },
        { time: '12:00 – 12:45', title: 'Responsible AI in Practice: Governance, Security, and Compliance for 2026', speaker: 'David Rosenberg, Independent Advisor on AI-Native Operating Models', type: 'talk' },
        { time: '13:00 – 13:30', title: 'Panel Discussion: What Will Separate AI Leaders from AI Followers?', speaker: 'All speakers — moderated panel', type: 'panel' },
      ],
    },

    // Speakers
    speakers: {
      title: 'Speakers',
      subtitle: 'Hear from leading experts in enterprise AI',
      clickToLearnMore: 'Click to learn more',
      list: [
        {
          name: 'Dr. Anna Keller',
          title: 'Head of AI Strategy',
          company: 'Swiss Digital Innovation Group',
          bio: "Anna leads AI strategy and digital transformation initiatives across Switzerland's largest innovation network. She is a recognized thought leader in enterprise AI adoption and a frequent speaker at European business and technology forums. With a PhD in Computational Intelligence from ETH Zurich and over 12 years of applied research turned business practice, Anna bridges the gap between what AI can do and what organizations actually need.",
          initials: 'AK',
          color: '#00f5d4',
          linkedin: 'https://linkedin.com',
          twitter: 'https://x.com',
          talks: [
            { time: '09:30 – 10:00', title: 'Opening Keynote: The New Era of AI-Native Business' },
          ],
        },
        {
          name: 'Michael Weber',
          title: 'VP, Enterprise Transformation',
          company: 'EPAM Switzerland',
          bio: 'Michael has spent over a decade helping global enterprises navigate digital and AI-driven transformation. At EPAM Switzerland, he partners with executive teams to design and execute scalable AI programs that deliver measurable business outcomes. His work spans industries including finance, manufacturing, and healthcare, and he is known for translating complex technology into clear strategic direction for senior leadership.',
          initials: 'MW',
          color: '#7b2ff7',
          linkedin: 'https://linkedin.com',
          twitter: 'https://x.com',
          talks: [
            { time: '10:00 – 10:45', title: 'From Experiment to Scale: Building Enterprise AI That Delivers Value' },
            { time: '13:00 – 13:30', title: 'Panel Discussion: What Will Separate AI Leaders from AI Followers?' },
          ],
        },
        {
          name: 'Sophie Laurent',
          title: 'Director of Data & AI Governance',
          company: 'Alpine Financial Services',
          bio: 'Sophie is an expert in responsible AI frameworks, data governance, and regulatory compliance in the financial sector. She has led the design of AI governance structures across multiple European financial institutions and is an active contributor to EU AI Act implementation guidance. Sophie is widely cited in policy circles and advises regulators on practical approaches to AI oversight.',
          initials: 'SL',
          color: '#00f5d4',
          linkedin: 'https://linkedin.com',
          twitter: null,
          talks: [
            { time: '11:00 – 11:45', title: 'AI in Software Delivery: From Copilots to Autonomous Engineering Workflows' },
            { time: '13:00 – 13:30', title: 'Panel Discussion: What Will Separate AI Leaders from AI Followers?' },
          ],
        },
        {
          name: 'David Rosenberg',
          title: 'Independent Advisor',
          company: 'AI-Native Operating Models',
          bio: 'David advises boards and C-suites on how to redesign operating models around AI capabilities. With experience across retail, logistics, and professional services, he helps organizations move from AI experimentation to enterprise-wide intelligence. David is the author of two widely read reports on AI operating model design and brings a distinctly practical, outcomes-first perspective to every engagement.',
          initials: 'DR',
          color: '#7b2ff7',
          linkedin: 'https://linkedin.com',
          twitter: 'https://x.com',
          talks: [
            { time: '12:00 – 12:45', title: 'Responsible AI in Practice: Governance, Security, and Compliance for 2026' },
            { time: '13:00 – 13:30', title: 'Panel Discussion: What Will Separate AI Leaders from AI Followers?' },
          ],
        },
      ],
    },

    // Speaker modal
    modal: {
      about: 'About',
      sessions: 'Sessions at the Summit',
    },

    // FAQ
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'Who should attend the summit?',
          answer: 'The event is designed for business executives, digital transformation leaders, innovation managers, technology directors, and AI practitioners who want to understand how AI can create measurable business value.',
        },
        {
          question: 'Is the summit technical or business-focused?',
          answer: 'The summit is primarily business-focused, but it includes selected technical perspectives to help attendees understand what is realistically achievable with modern AI platforms.',
        },
        {
          question: 'Will there be networking opportunities?',
          answer: 'Yes. The agenda includes networking during registration, coffee breaks, and after the final panel discussion, giving participants time to connect with speakers and peers.',
        },
        {
          question: 'Do I need prior AI experience to attend?',
          answer: 'No prior hands-on AI experience is required. The sessions are intended to be accessible to both experienced professionals and leaders who are just starting their AI journey.',
        },
        {
          question: 'Where is the event taking place?',
          answer: 'The summit will be held on March 15, 2026, at the EPAM Office in Zurich.',
        },
      ],
    },

    // Registration
    registration: {
      title: 'Register for the Event',
      subtitle: 'Secure your spot at AI in Business Summit Zurich 2026',
      namePlaceholder: 'Jane Smith',
      emailPlaceholder: 'jane@example.com',
      companyPlaceholder: 'Acme Corp',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      companyLabel: 'Company',
      submitBtn: 'Register Now',
      successTitle: "You're registered!",
      successMsg: (name, email) =>
        `Thank you, ${name}! We've received your registration. Keep an eye on ${email} for your confirmation and event details.`,
      errors: {
        nameRequired: 'Full name is required.',
        emailRequired: 'Email address is required.',
        emailInvalid: 'Please enter a valid email address.',
        companyRequired: 'Company name is required.',
      },
    },

    // Gallery
    gallery: {
      title: 'Photo Gallery',
      subtitle: 'Highlights from our past events',
      photoAlt: 'Event photo',
    },

    // Footer
    footer: '© 2026 AI in Business Summit Zurich. All rights reserved.',
  },

  // ─── GERMAN ───────────────────────────────────────────────────────────────
  de: {
    nav: {
      about: 'Über uns',
      program: 'Programm',
      speakers: 'Referenten',
      gallery: 'Galerie',
      faq: 'FAQ',
      register: 'Anmelden',
    },

    hero: {
      badge: 'BEVORSTEHENDES EVENT',
      titleLine1: 'AI in Business Summit',
      titleLine2: 'Zürich 2026',
      subtitle: 'Wo Führungskräfte und KI-Experten die Zukunft des Unternehmens gestalten',
      date: '15. März 2026',
      location: 'EPAM Büro, Zürich',
      registerBtn: 'Jetzt anmelden',
      countdownStarted: 'Event hat begonnen!',
      countdownLabels: {
        days: 'Tage',
        hours: 'Stunden',
        minutes: 'Minuten',
        seconds: 'Sekunden',
      },
    },

    about: {
      title: 'Über die Veranstaltung',
      p1: 'Der AI in Business Summit Zürich 2026 bringt Führungskräfte, Technologiestrategen und KI-Experten zusammen, um zu erkunden, wie künstliche Intelligenz moderne Unternehmen transformiert. Der Fokus liegt auf der praktischen Einführung von KI in Bereichen wie Betrieb, Kundenerfahrung, Softwareentwicklung und Entscheidungsfindung.',
      p2: 'Der Gipfel findet im EPAM Büro in Zürich statt und ist als kompaktes, hochwertiges Forum für Führungskräfte und Innovationsteams konzipiert. Egal ob Sie gerade erst mit KI beginnen oder bereits Unternehmenslösungen skalieren – Sie finden Vorträge, die direkt auf Ihre Herausforderungen eingehen.',
      p3: 'Begleiten Sie uns am 15. März 2026 für einen intensiven Tag voller Keynotes, Expertenvorträge und bedeutungsvoller Gespräche, die Ihnen helfen zu verstehen, was KI-Vorreiter von KI-Nachzüglern unterscheidet – und wie Sie handeln können.',
      stats: {
        day: '1 Tag',
        dayLabel: 'Fokussierter Gipfel',
        sessions: '5',
        sessionsLabel: 'Sessions',
        speakers: '4',
        speakersLabel: 'Referenten',
        location: 'Zürich',
        locationLabel: 'Schweiz',
      },
    },

    program: {
      title: 'Programm',
      subtitle: '15. März 2026 — EPAM Büro, Zürich',
      schedule: [
        { time: '09:00 – 09:30', title: 'Registrierung & Willkommenskaffee', speaker: 'EPAM Büro, Zürich', type: 'break' },
        { time: '09:30 – 10:00', title: 'Eröffnungs-Keynote: Das neue Zeitalter des KI-nativen Unternehmens', speaker: 'Dr. Anna Keller, Leiterin KI-Strategie, Swiss Digital Innovation Group', type: 'keynote' },
        { time: '10:00 – 10:45', title: 'Vom Experiment zur Skalierung: Unternehmens-KI, die echten Mehrwert liefert', speaker: 'Michael Weber, VP Enterprise Transformation, EPAM Schweiz', type: 'talk' },
        { time: '11:00 – 11:45', title: 'KI in der Softwareentwicklung: Von Copilots zu autonomen Engineering-Workflows', speaker: 'Sophie Laurent, Direktorin Data & KI-Governance, Alpine Financial Services', type: 'talk' },
        { time: '12:00 – 12:45', title: 'Verantwortungsvolle KI in der Praxis: Governance, Sicherheit und Compliance 2026', speaker: 'David Rosenberg, Unabhängiger Berater für KI-native Betriebsmodelle', type: 'talk' },
        { time: '13:00 – 13:30', title: 'Podiumsdiskussion: Was unterscheidet KI-Vorreiter von KI-Nachzüglern?', speaker: 'Alle Referenten — moderiertes Podium', type: 'panel' },
      ],
    },

    speakers: {
      title: 'Referenten',
      subtitle: 'Lernen Sie von führenden Experten im Bereich Unternehmens-KI',
      clickToLearnMore: 'Klicken für mehr Details',
      list: [
        {
          name: 'Dr. Anna Keller',
          title: 'Leiterin KI-Strategie',
          company: 'Swiss Digital Innovation Group',
          bio: 'Anna leitet KI-Strategie und digitale Transformationsinitiativen im grössten Innovationsnetzwerk der Schweiz. Sie ist eine anerkannte Vordenkerin bei der KI-Einführung in Unternehmen und häufige Keynote-Speakerin auf europäischen Business- und Technologieforen. Mit einem Doktortitel in Computational Intelligence der ETH Zürich und über 12 Jahren angewandter Forschung überbrückt Anna die Lücke zwischen dem, was KI kann, und dem, was Unternehmen wirklich brauchen.',
          initials: 'AK',
          color: '#00f5d4',
          linkedin: 'https://linkedin.com',
          twitter: 'https://x.com',
          talks: [
            { time: '09:30 – 10:00', title: 'Eröffnungs-Keynote: Das neue Zeitalter des KI-nativen Unternehmens' },
          ],
        },
        {
          name: 'Michael Weber',
          title: 'VP, Enterprise Transformation',
          company: 'EPAM Schweiz',
          bio: 'Michael unterstützt seit über einem Jahrzehnt globale Unternehmen bei der digitalen und KI-getriebenen Transformation. Bei EPAM Schweiz arbeitet er mit Führungsteams zusammen, um skalierbare KI-Programme zu konzipieren und umzusetzen, die messbare Geschäftsergebnisse liefern. Sein Fachwissen erstreckt sich auf Branchen wie Finanzen, Fertigung und Gesundheitswesen.',
          initials: 'MW',
          color: '#7b2ff7',
          linkedin: 'https://linkedin.com',
          twitter: 'https://x.com',
          talks: [
            { time: '10:00 – 10:45', title: 'Vom Experiment zur Skalierung: Unternehmens-KI, die echten Mehrwert liefert' },
            { time: '13:00 – 13:30', title: 'Podiumsdiskussion: Was unterscheidet KI-Vorreiter von KI-Nachzüglern?' },
          ],
        },
        {
          name: 'Sophie Laurent',
          title: 'Direktorin Data & KI-Governance',
          company: 'Alpine Financial Services',
          bio: 'Sophie ist Expertin für verantwortungsvolle KI-Frameworks, Daten-Governance und regulatorische Compliance im Finanzsektor. Sie hat KI-Governance-Strukturen bei mehreren europäischen Finanzinstitutionen konzipiert und ist aktive Mitgestalterin der EU-KI-Gesetz-Umsetzungsleitlinien. Sophie wird in politischen Kreisen viel zitiert und berät Regulierungsbehörden zu praktischen KI-Aufsichtsansätzen.',
          initials: 'SL',
          color: '#00f5d4',
          linkedin: 'https://linkedin.com',
          twitter: null,
          talks: [
            { time: '11:00 – 11:45', title: 'KI in der Softwareentwicklung: Von Copilots zu autonomen Engineering-Workflows' },
            { time: '13:00 – 13:30', title: 'Podiumsdiskussion: Was unterscheidet KI-Vorreiter von KI-Nachzüglern?' },
          ],
        },
        {
          name: 'David Rosenberg',
          title: 'Unabhängiger Berater',
          company: 'KI-native Betriebsmodelle',
          bio: 'David berät Vorstände und Führungsteams bei der Neugestaltung von Betriebsmodellen rund um KI-Fähigkeiten. Mit Erfahrung in Handel, Logistik und Professional Services hilft er Unternehmen, von KI-Experimenten zu unternehmensweiter Intelligenz zu gelangen. David ist Autor zweier viel gelesener Berichte zum Design KI-nativer Betriebsmodelle.',
          initials: 'DR',
          color: '#7b2ff7',
          linkedin: 'https://linkedin.com',
          twitter: 'https://x.com',
          talks: [
            { time: '12:00 – 12:45', title: 'Verantwortungsvolle KI in der Praxis: Governance, Sicherheit und Compliance 2026' },
            { time: '13:00 – 13:30', title: 'Podiumsdiskussion: Was unterscheidet KI-Vorreiter von KI-Nachzüglern?' },
          ],
        },
      ],
    },

    modal: {
      about: 'Über die Person',
      sessions: 'Sessions auf dem Gipfel',
    },

    faq: {
      title: 'Häufig gestellte Fragen',
      items: [
        {
          question: 'Wer sollte den Gipfel besuchen?',
          answer: 'Die Veranstaltung richtet sich an Führungskräfte, Leiter digitaler Transformation, Innovationsmanager, Technologiedirektoren und KI-Experten, die verstehen möchten, wie KI messbaren Geschäftswert schaffen kann.',
        },
        {
          question: 'Ist der Gipfel technisch oder geschäftsorientiert?',
          answer: 'Der Gipfel ist primär geschäftsorientiert, enthält aber ausgewählte technische Perspektiven, um den Teilnehmern zu helfen zu verstehen, was mit modernen KI-Plattformen realistisch erreichbar ist.',
        },
        {
          question: 'Wird es Networking-Möglichkeiten geben?',
          answer: 'Ja. Die Agenda umfasst Networking während der Registrierung, Kaffeepausen und nach der abschliessenden Podiumsdiskussion, damit die Teilnehmer Zeit haben, sich mit Referenten und Gleichgesinnten zu vernetzen.',
        },
        {
          question: 'Benötige ich KI-Vorkenntnisse?',
          answer: 'Keine praktischen KI-Vorkenntnisse erforderlich. Die Sessions sind sowohl für erfahrene Fachleute als auch für Führungskräfte zugänglich, die gerade erst ihre KI-Reise beginnen.',
        },
        {
          question: 'Wo findet die Veranstaltung statt?',
          answer: 'Der Gipfel findet am 15. März 2026 im EPAM Büro in Zürich statt.',
        },
      ],
    },

    registration: {
      title: 'Für die Veranstaltung anmelden',
      subtitle: 'Sichern Sie sich Ihren Platz beim AI in Business Summit Zürich 2026',
      namePlaceholder: 'Jana Müller',
      emailPlaceholder: 'jana@beispiel.de',
      companyPlaceholder: 'Musterfirma GmbH',
      nameLabel: 'Vollständiger Name',
      emailLabel: 'E-Mail-Adresse',
      companyLabel: 'Unternehmen',
      submitBtn: 'Jetzt anmelden',
      successTitle: 'Sie sind angemeldet!',
      successMsg: (name, email) =>
        `Vielen Dank, ${name}! Wir haben Ihre Anmeldung erhalten. Bitte prüfen Sie ${email} auf Ihre Bestätigung und weitere Veranstaltungsdetails.`,
      errors: {
        nameRequired: 'Vollständiger Name ist erforderlich.',
        emailRequired: 'E-Mail-Adresse ist erforderlich.',
        emailInvalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        companyRequired: 'Unternehmensname ist erforderlich.',
      },
    },

    gallery: {
      title: 'Fotogalerie',
      subtitle: 'Highlights aus unseren vergangenen Veranstaltungen',
      photoAlt: 'Veranstaltungsfoto',
    },

    footer: '© 2026 AI in Business Summit Zürich. Alle Rechte vorbehalten.',
  },
}

export default translations
