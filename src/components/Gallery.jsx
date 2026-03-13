import { useState, useEffect, useCallback } from 'react'
import { useLang } from '../context/LanguageContext'

// Word seeds for picsum.photos — same seed always returns the same image, no API key needed.
const photos = [
  { id: 1,  seed: 'conference-stage',    caption: 'Conference keynote stage' },
  { id: 2,  seed: 'panel-discussion',    caption: 'Panel discussion' },
  { id: 3,  seed: 'summit-audience',     caption: 'Audience at summit' },
  { id: 4,  seed: 'business-networking', caption: 'Networking session' },
  { id: 5,  seed: 'artificial-intelligence', caption: 'Artificial intelligence' },
  { id: 6,  seed: 'technology-workspace',caption: 'Technology workspace' },
  { id: 7,  seed: 'data-visualization',  caption: 'Data visualization' },
  { id: 8,  seed: 'laptop-code',         caption: 'Developer at work' },
  { id: 9,  seed: 'zurich-skyline',      caption: 'Zurich skyline' },
  { id: 10, seed: 'swiss-city',          caption: 'Swiss cityscape' },
  { id: 11, seed: 'modern-office',       caption: 'Modern office' },
  { id: 12, seed: 'city-night',          caption: 'City at night' },
]

function thumb(seed) {
  return `https://picsum.photos/seed/${seed}/600/400`
}

function full(seed) {
  return `https://picsum.photos/seed/${seed}/1200/800`
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
          src={full(photo.seed)}
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
                src={thumb(photo.seed)}
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
