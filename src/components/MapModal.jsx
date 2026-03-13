import { useEffect } from 'react'
import { useLang } from '../context/LanguageContext'

// EPAM Zurich office — Richtistrasse 7, 8304 Wallisellen (Zurich area)
const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.3!2d8.5916!3d47.4103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa0a8c6c6c6c7%3A0x1!2sEPAM%20Systems%20Zurich!5e0!3m2!1sen!2sch!4v1700000000000!5m2!1sen!2sch'

function MapModal({ onClose }) {
  const { t } = useLang()
  const m = t.map

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
      <div
        className="modal map-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={m.title}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &#10005;
        </button>

        <div className="map-modal-header">
          <div className="map-modal-icon">&#128205;</div>
          <div>
            <h2 className="map-modal-title">{m.title}</h2>
            <p className="map-modal-address">{m.address}</p>
          </div>
        </div>

        <div className="map-container">
          <iframe
            title={m.title}
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="map-modal-footer">
          <a
            className="map-directions-link"
            href="https://maps.google.com/?q=EPAM+Systems+Zurich"
            target="_blank"
            rel="noopener noreferrer"
          >
            {m.directionsLink} &#8599;
          </a>
        </div>
      </div>
    </div>
  )
}

export default MapModal
