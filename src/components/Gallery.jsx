import { useState, useEffect, useCallback } from 'react'
import { useLang } from '../context/LanguageContext'

// 12 curated picsum photos — each has a fixed seed so the image never changes
const photos = [
  { id: 1,  seed: 10,  width: 800, height: 600 },
  { id: 2,  seed: 20,  width: 800, height: 600 },
  { id: 3,  seed: 30,  width: 800, height: 600 },
  { id: 4,  seed: 40,  width: 800, height: 600 },
  { id: 5,  seed: 50,  width: 800, height: 600 },
  { id: 6,  seed: 60,  width: 800, height: 600 },
  { id: 7,  seed: 70,  width: 800, height: 600 },
  { id: 8,  seed: 80,  width: 800, height: 600 },
  { id: 9,  seed: 90,  width: 800, height: 600 },
  { id: 10, seed: 100, width: 800, height: 600 },
  { id: 11, seed: 110, width: 800, height: 600 },
  { id: 12, seed: 120, width: 800, height: 600 },
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
          alt={`Event photo ${index + 1}`}
        />
        <div className="lightbox-counter">{index + 1} / {total}</div>
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
                alt={`${g.photoAlt} ${index + 1}`}
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
