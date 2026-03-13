import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import SpeakerModal from './SpeakerModal'

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function Speakers() {
  const { t } = useLang()
  const s = t.speakers
  const [activeSpeaker, setActiveSpeaker] = useState(null)

  return (
    <section className="speakers section-dark" id="speakers">
      <div className="container">
        <h2 className="section-title">{s.title}</h2>
        <p className="section-subtitle">{s.subtitle}</p>
        <div className="speakers-grid">
          {s.list.map((speaker, index) => (
            <div
              className="speaker-card"
              key={index}
              onClick={() => setActiveSpeaker(speaker)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActiveSpeaker(speaker)}
              aria-label={`View details for ${speaker.name}`}
            >
              <div className="speaker-avatar" style={{ borderColor: speaker.color }}>
                <span className="speaker-initials" style={{ color: speaker.color }}>
                  {speaker.initials}
                </span>
              </div>
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-title">
                {speaker.title}{' '}
                <span className="speaker-company">@ {speaker.company}</span>
              </p>

              <div className="speaker-bio-overlay">
                <p className="speaker-bio-overlay-text">{speaker.bio}</p>
                <span className="speaker-bio-cta">{s.clickToLearnMore}</span>
              </div>

              <div className="speaker-social" onClick={(e) => e.stopPropagation()}>
                {speaker.linkedin && (
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="speaker-social-link"
                    aria-label={`${speaker.name} on LinkedIn`}
                  >
                    <LinkedInIcon />
                  </a>
                )}
                {speaker.twitter && (
                  <a
                    href={speaker.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="speaker-social-link"
                    aria-label={`${speaker.name} on X`}
                  >
                    <XIcon />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeSpeaker && (
        <SpeakerModal
          speaker={activeSpeaker}
          onClose={() => setActiveSpeaker(null)}
        />
      )}
    </section>
  )
}

export default Speakers
