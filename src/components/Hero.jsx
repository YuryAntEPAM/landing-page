import { useState, useEffect } from 'react'

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
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

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
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">UPCOMING EVENT</div>
        <h1 className="hero-title">
          <span className="hero-title-accent">AI in Business Summit</span> Zurich 2026
        </h1>
        <p className="hero-subtitle">
          Where Business Leaders &amp; AI Practitioners Shape the Future of Enterprise
        </p>
        <div className="hero-meta">
          <div className="hero-meta-item">
            <span className="hero-meta-icon">&#128197;</span>
            <span>March 15, 2026</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-icon">&#128205;</span>
            <span>EPAM Office, Zurich</span>
          </div>
        </div>

        {timeLeft === null ? (
          <div className="countdown-started">Event Started!</div>
        ) : (
          <div className="countdown">
            <div className="countdown-unit">
              <span className="countdown-number">{pad(timeLeft.days)}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-unit">
              <span className="countdown-number">{pad(timeLeft.hours)}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-unit">
              <span className="countdown-number">{pad(timeLeft.minutes)}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-unit">
              <span className="countdown-number">{pad(timeLeft.seconds)}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        )}

        <button className="btn-primary" onClick={handleRegisterClick}>
          Register Now
        </button>
      </div>
      <div className="hero-glow hero-glow-left"></div>
      <div className="hero-glow hero-glow-right"></div>
    </section>
  )
}

export default Hero
