import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'
import MapModal from './MapModal'

const EVENT_DATE = new Date('2026-03-15T09:00:00')

function getTimeLeft() {
  const diff = EVENT_DATE - new Date()
  if (diff <= 0) return null
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(n) {
  return String(n).padStart(2, '0')
}

function Hero() {
  const { t } = useLang()
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)
  const [mapOpen, setMapOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  function handleRegisterClick() {
    const section = document.getElementById('registration')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-badge">{t.hero.badge}</div>
        <h1 className="hero-title">
          <span className="hero-title-accent">{t.hero.titleLine1}</span> {t.hero.titleLine2}
        </h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <div className="hero-meta">
          <div className="hero-meta-item">
            <span className="hero-meta-icon">&#128197;</span>
            <span>{t.hero.date}</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-icon">&#128205;</span>
            <button
              className="hero-location-btn"
              onClick={() => setMapOpen(true)}
              aria-label={t.map.openMapLabel}
            >
              {t.hero.location}
            </button>
          </div>
        </div>

        {timeLeft === null ? (
          <div className="countdown-started">{t.hero.countdownStarted}</div>
        ) : (
          <div className="countdown">
            <div className="countdown-unit">
              <span className="countdown-number">{pad(timeLeft.days)}</span>
              <span className="countdown-label">{t.hero.countdownLabels.days}</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-unit">
              <span className="countdown-number">{pad(timeLeft.hours)}</span>
              <span className="countdown-label">{t.hero.countdownLabels.hours}</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-unit">
              <span className="countdown-number">{pad(timeLeft.minutes)}</span>
              <span className="countdown-label">{t.hero.countdownLabels.minutes}</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-unit">
              <span className="countdown-number">{pad(timeLeft.seconds)}</span>
              <span className="countdown-label">{t.hero.countdownLabels.seconds}</span>
            </div>
          </div>
        )}

        <button className="btn-primary" onClick={handleRegisterClick}>
          {t.hero.registerBtn}
        </button>
      </div>
      <div className="hero-glow hero-glow-left"></div>
      <div className="hero-glow hero-glow-right"></div>

      {mapOpen && <MapModal onClose={() => setMapOpen(false)} />}
    </section>
  )
}

export default Hero
