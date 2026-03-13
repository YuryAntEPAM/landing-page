const speakers = [
  {
    name: 'Dr. Anna Keller',
    title: 'Head of AI Strategy',
    company: 'Swiss Digital Innovation Group',
    bio: 'Anna leads AI strategy and digital transformation initiatives across Switzerland\'s largest innovation network. She is a recognized thought leader in enterprise AI adoption and a frequent speaker at European business and technology forums.',
    initials: 'AK',
    color: '#00f5d4',
  },
  {
    name: 'Michael Weber',
    title: 'VP, Enterprise Transformation',
    company: 'EPAM Switzerland',
    bio: 'Michael has spent over a decade helping global enterprises navigate digital and AI-driven transformation. At EPAM Switzerland, he partners with executive teams to design and execute scalable AI programs that deliver measurable business outcomes.',
    initials: 'MW',
    color: '#7b2ff7',
  },
  {
    name: 'Sophie Laurent',
    title: 'Director of Data & AI Governance',
    company: 'Alpine Financial Services',
    bio: 'Sophie is an expert in responsible AI frameworks, data governance, and regulatory compliance in the financial sector. She has led the design of AI governance structures across multiple European financial institutions and is an active contributor to EU AI Act implementation guidance.',
    initials: 'SL',
    color: '#00f5d4',
  },
  {
    name: 'David Rosenberg',
    title: 'Independent Advisor',
    company: 'AI-Native Operating Models',
    bio: 'David advises boards and C-suites on how to redesign operating models around AI capabilities. With experience across retail, logistics, and professional services, he helps organizations move from AI experimentation to enterprise-wide intelligence.',
    initials: 'DR',
    color: '#7b2ff7',
  },
]

function Speakers() {
  return (
    <section className="speakers section-dark">
      <div className="container">
        <h2 className="section-title">Speakers</h2>
        <p className="section-subtitle">Hear from leading experts in enterprise AI</p>
        <div className="speakers-grid">
          {speakers.map((speaker, index) => (
            <div className="speaker-card" key={index}>
              <div className="speaker-avatar" style={{ borderColor: speaker.color }}>
                <span className="speaker-initials" style={{ color: speaker.color }}>
                  {speaker.initials}
                </span>
              </div>
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-title">
                {speaker.title} <span className="speaker-company">@ {speaker.company}</span>
              </p>
              <p className="speaker-bio">{speaker.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Speakers
