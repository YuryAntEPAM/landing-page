import { useState } from 'react'

const faqs = [
  {
    question: 'Where is TechForward 2026 held?',
    answer:
      'The event takes place at the Innovation Hub in San Francisco, CA — a state-of-the-art venue in the heart of the city, easily accessible by public transit, with parking available nearby.',
  },
  {
    question: 'How do I register, and how much does it cost?',
    answer:
      'You can register using the form on this page. Early-bird tickets are available until March 31, 2026. Pricing starts at $299 for standard access and $499 for the full conference pass, which includes all workshops and the networking happy hour.',
  },
  {
    question: 'What is the refund policy?',
    answer:
      'Full refunds are available up to 30 days before the event. After that, you may transfer your ticket to another person. No refunds will be issued within 7 days of the event, but your ticket remains transferable.',
  },
  {
    question: 'Will the sessions be recorded?',
    answer:
      'Yes! All main-stage keynotes and talks will be recorded and made available to registered attendees within two weeks after the conference. Workshop recordings are available exclusively to full-pass holders.',
  },
  {
    question: 'Is there a code of conduct?',
    answer:
      'Absolutely. TechForward is committed to providing a safe, welcoming, and inclusive environment for all attendees. Our full Code of Conduct is available on the event website. Violations can be reported to our on-site team at any time.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  function handleToggle(index) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq section-mid">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((item, index) => {
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
