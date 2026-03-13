import { useLang } from '../context/LanguageContext'

const typeColors = {
  keynote: '#00f5d4',
  talk: '#7b2ff7',
  workshop: '#f5a623',
  panel: '#39b0f5',
  break: '#555',
}

function Program() {
  const { t } = useLang()
  const p = t.program

  return (
    <section className="program section-mid" id="program">
      <div className="container">
        <h2 className="section-title">{p.title}</h2>
        <p className="section-subtitle">{p.subtitle}</p>
        <div className="timeline">
          {p.schedule.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-time">{item.time}</div>
              <div className="timeline-connector">
                <div
                  className="timeline-dot"
                  style={{ backgroundColor: typeColors[item.type] || '#00f5d4' }}
                ></div>
                {index < p.schedule.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="timeline-card">
                <span
                  className="timeline-tag"
                  style={{ color: typeColors[item.type] || '#00f5d4', borderColor: typeColors[item.type] || '#00f5d4' }}
                >
                  {item.type.toUpperCase()}
                </span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-speaker">{item.speaker}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Program
