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
          <span className="hero-title-accent">TechForward</span> 2026
        </h1>
        <p className="hero-subtitle">
          The Premier Conference for Developers, Engineers &amp; Innovators
        </p>
        <div className="hero-meta">
          <div className="hero-meta-item">
            <span className="hero-meta-icon">&#128197;</span>
            <span>April 25–26, 2026</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-icon">&#128205;</span>
            <span>Innovation Hub, San Francisco, CA</span>
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
