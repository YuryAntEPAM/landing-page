function Hero() {
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
