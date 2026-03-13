import { useState } from 'react'

function Registration() {
  const [form, setForm] = useState({ name: '', email: '', company: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function validate() {
    const newErrors = {}
    if (!form.name.trim()) {
      newErrors.name = 'Full name is required.'
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!form.company.trim()) {
      newErrors.company = 'Company name is required.'
    }
    return newErrors
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setSubmitted(true)
  }

  return (
    <section className="registration section-dark" id="registration">
      <div className="container">
        <h2 className="section-title">Register for the Event</h2>
        <p className="section-subtitle">Secure your spot at TechForward 2026</p>

        {submitted ? (
          <div className="success-message">
            <div className="success-icon">&#10003;</div>
            <h3>You're registered!</h3>
            <p>
              Thank you, <strong>{form.name}</strong>! We've received your registration.
              Keep an eye on <strong>{form.email}</strong> for your confirmation and event details.
            </p>
          </div>
        ) : (
          <form className="reg-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name <span className="required">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                placeholder="Jane Smith"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address <span className="required">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                placeholder="jane@example.com"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="company" className="form-label">
                Company <span className="required">*</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className={`form-input ${errors.company ? 'form-input--error' : ''}`}
                placeholder="Acme Corp"
                value={form.company}
                onChange={handleChange}
              />
              {errors.company && <span className="form-error">{errors.company}</span>}
            </div>

            <button type="submit" className="btn-primary btn-submit">
              Register Now
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Registration
