const schedule = [
  {
    time: '09:00 – 09:30',
    title: 'Registration & Welcome Coffee',
    speaker: 'EPAM Office, Zurich',
    type: 'break',
  },
  {
    time: '09:30 – 10:00',
    title: 'Opening Keynote: The New Era of AI-Native Business',
    speaker: 'Dr. Anna Keller, Head of AI Strategy, Swiss Digital Innovation Group',
    type: 'keynote',
  },
  {
    time: '10:00 – 10:45',
    title: 'From Experiment to Scale: Building Enterprise AI That Delivers Value',
    speaker: 'Michael Weber, VP Enterprise Transformation, EPAM Switzerland',
    type: 'talk',
  },
  {
    time: '11:00 – 11:45',
    title: 'AI in Software Delivery: From Copilots to Autonomous Engineering Workflows',
    speaker: 'Sophie Laurent, Director of Data & AI Governance, Alpine Financial Services',
    type: 'talk',
  },
  {
    time: '12:00 – 12:45',
    title: 'Responsible AI in Practice: Governance, Security, and Compliance for 2026',
    speaker: 'David Rosenberg, Independent Advisor on AI-Native Operating Models',
    type: 'talk',
  },
  {
    time: '13:00 – 13:30',
    title: 'Panel Discussion: What Will Separate AI Leaders from AI Followers?',
    speaker: 'All speakers — moderated panel',
    type: 'panel',
  },
]

const typeColors = {
  keynote: '#00f5d4',
  talk: '#7b2ff7',
  workshop: '#f5a623',
  panel: '#39b0f5',
  break: '#555',
}

function Program() {
  return (
    <section className="program section-mid">
      <div className="container">
        <h2 className="section-title">Program Schedule</h2>
        <p className="section-subtitle">March 15, 2026 — EPAM Office, Zurich</p>
        <div className="timeline">
          {schedule.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-time">{item.time}</div>
              <div className="timeline-connector">
                <div
                  className="timeline-dot"
                  style={{ backgroundColor: typeColors[item.type] || '#00f5d4' }}
                ></div>
                {index < schedule.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="timeline-card">
                <span
                  className="timeline-tag"
                  style={{ color: typeColors[item.type] || '#00f5d4', borderColor: typeColors[item.type] || '#00f5d4' }}
                >
                  {item.type.toUpperCase()}
                </span>
                <h3 className="timeline-title" dangerouslySetInnerHTML={{ __html: item.title }} />
                <p className="timeline-speaker" dangerouslySetInnerHTML={{ __html: item.speaker }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Program
