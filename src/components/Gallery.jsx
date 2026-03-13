import { useState, useEffect, useCallback } from 'react'
import { useLang } from '../context/LanguageContext'

// Curated Unsplash photos — conference halls, AI/tech, and European city skylines.
// Each entry uses a stable Unsplash photo ID so the image is always the same.
const photos = [
  // Conference & events
  { id: 1,  unsplashId: 'bzdhc5b3Bxs', caption: 'Conference keynote stage' },
  { id: 2,  unsplashId: 'gMsnXqILjp4', caption: 'Panel discussion' },
  { id: 3,  unsplashId: 'RLw-UC03Gwc', caption: 'Audience at summit' },
  { id: 4,  unsplashId: '0E_vhMVqL9g', caption: 'Networking session' },
  // AI & technology
  { id: 5,  unsplashId: 'vZJdYl5JVXY', caption: 'AI neural network' },
  { id: 6,  unsplashId: 'iar-afB0QQw', caption: 'Technology workspace' },
  { id: 7,  unsplashId: 'hpjSkU2UYSU', caption: 'Data visualization' },
  { id: 8,  unsplashId: 'M5tzZtFCOfs', caption: 'Laptop and code' },
  // European cities
  { id: 9,  unsplashId: 'dJpqqFEBFtA', caption: 'Zurich skyline' },
  { id: 10, unsplashId: 'Yen6kNKiAUk', caption: 'Swiss cityscape' },
  { id: 11, unsplashId: 'Q1p7bh3SHj8', caption: 'Modern office building' },
  { id: 12, unsplashId: 'eMP4sYPJ9x0', caption: 'City at night' },
]

function thumb(unsplashId) {
  return `https://images.unsplash.com/photo-${unsplashId}?w=600&h=400&fit=crop&auto=format`
}

function full(unsplashId) {
  return `https://images.unsplash.com/photo-${unsplashId}?w=1200&h=800&fit=crop&auto=format`
}

function Lightbox({ photo, total, index, onClose, onPrev, onNext }) {
  // Close on Escape, navigate with arrow keys
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      {/* Prev button */}
      <button
        className="lightbox-nav lightbox-nav--prev"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous photo"
      >
        &#8249;
      </button>

      {/* Image container */}
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img
          className="lightbox-img"
          src={full(photo.unsplashId)}
          alt={photo.caption}
        />
        <div className="lightbox-counter">{photo.caption} &nbsp;·&nbsp; {index + 1} / {total}</div>
      </div>

      {/* Next button */}
      <button
        className="lightbox-nav lightbox-nav--next"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next photo"
      >
        &#8250;
      </button>

      {/* Close button */}
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        &#10005;
      </button>
    </div>
  )
}

function Gallery() {
  const { t } = useLang()
  const g = t.gallery
  const [activeIndex, setActiveIndex] = useState(null)

  function openPhoto(index) { setActiveIndex(index) }
  function closePhoto()     { setActiveIndex(null) }
  function prevPhoto()      { setActiveIndex((i) => (i - 1 + photos.length) % photos.length) }
  function nextPhoto()      { setActiveIndex((i) => (i + 1) % photos.length) }

  return (
    <section className="gallery section-dark" id="gallery">
      <div className="container">
        <h2 className="section-title">{g.title}</h2>
        <p className="section-subtitle">{g.subtitle}</p>

        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              className="gallery-item"
              onClick={() => openPhoto(index)}
              aria-label={`Open photo ${index + 1}`}
            >
              <img
                className="gallery-thumb"
                src={thumb(photo.unsplashId)}
                alt={photo.caption}
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <span className="gallery-zoom-icon">&#128269;</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          photo={photos[activeIndex]}
          total={photos.length}
          index={activeIndex}
          onClose={closePhoto}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </section>
  )
}

export default Gallery
