function About() {
  return (
    <section className="about section-dark">
      <div className="container">
        <h2 className="section-title">About the Event</h2>
        <div className="about-content">
          <p className="about-text">
            TechForward 2026 is the must-attend conference for software developers, 
            engineers, and technology leaders who want to stay ahead of the curve. 
            Over two electrifying days, you'll dive deep into the trends shaping 
            our digital future — from AI and machine learning to cloud-native 
            architectures and open-source innovation.
          </p>
          <p className="about-text">
            Whether you're a seasoned senior engineer or just starting your journey 
            in tech, TechForward offers something for everyone. Attend hands-on 
            workshops, hear from world-class speakers, and connect with thousands 
            of like-minded professionals from across the globe. Our sessions are 
            designed to be practical, inspiring, and immediately applicable.
          </p>
          <p className="about-text">
            Join us at the Innovation Hub in San Francisco for an unforgettable 
            experience that will challenge how you think about technology — and 
            your career. Seats are limited, so secure your spot today.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <span className="stat-number">2,000+</span>
            <span className="stat-label">Attendees</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">40+</span>
            <span className="stat-label">Sessions</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">25+</span>
            <span className="stat-label">Speakers</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">2</span>
            <span className="stat-label">Days</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
