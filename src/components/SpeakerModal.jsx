import { useEffect } from 'react'
import { useLang } from '../context/LanguageContext'

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function SpeakerModal({ speaker, onClose }) {
  const { t } = useLang()
  const m = t.modal

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Close">&#10005;</button>

        <div className="modal-header">
          <div className="modal-avatar" style={{ borderColor: speaker.color }}>
            <span className="modal-initials" style={{ color: speaker.color }}>
              {speaker.initials}
            </span>
          </div>
          <div className="modal-identity">
            <h2 className="modal-name">{speaker.name}</h2>
            <p className="modal-role">
              {speaker.title}{' '}
              <span className="modal-company">@ {speaker.company}</span>
            </p>
            <div className="modal-social">
              {speaker.linkedin && (
                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              )}
              {speaker.twitter && (
                <a
                  href={speaker.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="X (Twitter)"
                >
                  <XIcon />
                  X
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="modal-body">
          <h3 className="modal-section-title">{m.about}</h3>
          <p className="modal-bio">{speaker.bio}</p>

          <h3 className="modal-section-title">{m.sessions}</h3>
          <ul className="modal-talks">
            {speaker.talks.map((talk, i) => (
              <li key={i} className="modal-talk-item">
                <span className="modal-talk-time">{talk.time}</span>
                <span className="modal-talk-title">{talk.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SpeakerModal
