import { useState } from 'react'

const faqs = [
  {
    question: 'Who should attend the summit?',
    answer:
      'The event is designed for business executives, digital transformation leaders, innovation managers, technology directors, and AI practitioners who want to understand how AI can create measurable business value.',
  },
  {
    question: 'Is the summit technical or business-focused?',
    answer:
      'The summit is primarily business-focused, but it includes selected technical perspectives to help attendees understand what is realistically achievable with modern AI platforms.',
  },
  {
    question: 'Will there be networking opportunities?',
    answer:
      'Yes. The agenda includes networking during registration, coffee breaks, and after the final panel discussion, giving participants time to connect with speakers and peers.',
  },
  {
    question: 'Do I need prior AI experience to attend?',
    answer:
      'No prior hands-on AI experience is required. The sessions are intended to be accessible to both experienced professionals and leaders who are just starting their AI journey.',
  },
  {
    question: 'Where is the event taking place?',
    answer:
      'The summit will be held on March 15, 2026, at the EPAM Office in Zurich.',
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
