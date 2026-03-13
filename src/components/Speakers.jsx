const speakers = [
  {
    name: 'Dr. Aisha Patel',
    title: 'CTO',
    company: 'NexaCloud',
    bio: 'Aisha is a renowned cloud computing expert with 15 years of experience building large-scale distributed systems. She has led engineering teams at three unicorn startups and is a frequent keynote speaker at global tech conferences.',
    initials: 'AP',
    color: '#00f5d4',
  },
  {
    name: 'Marcus Chen',
    title: 'Staff Engineer',
    company: 'DataStream',
    bio: 'Marcus specializes in AI-assisted developer tooling and has contributed to several major open-source projects. He is the author of "Engineering at Scale," a widely read book on modern software architecture practices.',
    initials: 'MC',
    color: '#7b2ff7',
  },
  {
    name: 'Sofia Reyes',
    title: 'Principal Engineer',
    company: 'QuantumLabs',
    bio: "Sofia is a passionate advocate for developer experience and platform engineering. She built QuantumLabs' internal developer platform from scratch, reducing deployment times by 70% and enabling teams to ship 3x faster.",
    initials: 'SR',
    color: '#00f5d4',
  },
  {
    name: 'James Okonkwo',
    title: 'Head of Open Source',
    company: 'GlobalTech Foundation',
    bio: 'James leads open-source strategy and community building at the GlobalTech Foundation. He has been instrumental in launching several widely adopted developer tools and is a core maintainer of two top-100 GitHub repositories.',
    initials: 'JO',
    color: '#7b2ff7',
  },
]

function Speakers() {
  return (
    <section className="speakers section-dark">
      <div className="container">
        <h2 className="section-title">Speakers</h2>
        <p className="section-subtitle">Learn from the best minds in the industry</p>
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
