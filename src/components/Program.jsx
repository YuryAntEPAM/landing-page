const schedule = [
  {
    time: '09:00 AM',
    title: 'Opening Keynote: The Future of Software Engineering',
    speaker: 'Dr. Aisha Patel, CTO of NexaCloud',
    type: 'keynote',
  },
  {
    time: '10:30 AM',
    title: 'Building Resilient Systems with AI-Assisted Development',
    speaker: 'Marcus Chen, Staff Engineer at DataStream',
    type: 'talk',
  },
  {
    time: '12:00 PM',
    title: 'Lunch Break & Networking',
    speaker: 'Main Hall & Exhibition Floor',
    type: 'break',
  },
  {
    time: '01:30 PM',
    title: 'Workshop: From Zero to Production — Cloud-Native Architecture',
    speaker: 'Hands-on session (limited seats)',
    type: 'workshop',
  },
  {
    time: '03:30 PM',
    title: 'Panel: Open Source in 2026 — Challenges &amp; Opportunities',
    speaker: 'Moderated panel with 4 industry leaders',
    type: 'panel',
  },
  {
    time: '05:00 PM',
    title: 'Closing Keynote &amp; Networking Happy Hour',
    speaker: 'Speaker TBA + drinks &amp; snacks',
    type: 'keynote',
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
        <p className="section-subtitle">Day 1 — April 25, 2026 (San Francisco, CA)</p>
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
