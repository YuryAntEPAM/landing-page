import { useState } from 'react'
import { useLang } from '../context/LanguageContext'

function Registration() {
  const { t } = useLang()
  const r = t.registration

  const [form, setForm] = useState({ name: '', email: '', company: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function validate() {
    const newErrors = {}
    if (!form.name.trim()) {
      newErrors.name = r.errors.nameRequired
    }
    if (!form.email.trim()) {
      newErrors.email = r.errors.emailRequired
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = r.errors.emailInvalid
    }
    if (!form.company.trim()) {
      newErrors.company = r.errors.companyRequired
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
        <h2 className="section-title">{r.title}</h2>
        <p className="section-subtitle">{r.subtitle}</p>

        {submitted ? (
          <div className="success-message">
            <div className="success-icon">&#10003;</div>
            <h3>{r.successTitle}</h3>
            <p dangerouslySetInnerHTML={{ __html: r.successMsg(`<strong>${form.name}</strong>`, `<strong>${form.email}</strong>`) }} />
          </div>
        ) : (
          <form className="reg-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                {r.nameLabel} <span className="required">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                placeholder={r.namePlaceholder}
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                {r.emailLabel} <span className="required">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                placeholder={r.emailPlaceholder}
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="company" className="form-label">
                {r.companyLabel} <span className="required">*</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className={`form-input ${errors.company ? 'form-input--error' : ''}`}
                placeholder={r.companyPlaceholder}
                value={form.company}
                onChange={handleChange}
              />
              {errors.company && <span className="form-error">{errors.company}</span>}
            </div>

            <button type="submit" className="btn-primary btn-submit">
              {r.submitBtn}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Registration
