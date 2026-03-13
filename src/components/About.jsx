import { useLang } from '../context/LanguageContext'

function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section className="about section-dark" id="about">
      <div className="container">
        <h2 className="section-title">{a.title}</h2>
        <div className="about-content">
          <p className="about-text">{a.p1}</p>
          <p className="about-text">{a.p2}</p>
          <p className="about-text">{a.p3}</p>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <span className="stat-number">{a.stats.day}</span>
            <span className="stat-label">{a.stats.dayLabel}</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{a.stats.sessions}</span>
            <span className="stat-label">{a.stats.sessionsLabel}</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{a.stats.speakers}</span>
            <span className="stat-label">{a.stats.speakersLabel}</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{a.stats.location}</span>
            <span className="stat-label">{a.stats.locationLabel}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
