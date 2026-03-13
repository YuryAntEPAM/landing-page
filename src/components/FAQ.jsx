import { useState } from 'react'
import { useLang } from '../context/LanguageContext'

function FAQ() {
  const { t } = useLang()
  const f = t.faq
  const [openIndex, setOpenIndex] = useState(null)

  function handleToggle(index) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq section-mid" id="faq">
      <div className="container">
        <h2 className="section-title">{f.title}</h2>
        <div className="faq-list">
          {f.items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} key={index}>
                <button
                  className="faq-question"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
