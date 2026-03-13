import { useLang } from '../context/LanguageContext'

function Header() {
  const { lang, toggleLang, t } = useLang()

  function scrollTo(id) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-logo">
          AI<span className="header-logo-accent">Summit</span>
        </div>

        <nav className="header-nav">
          <button className="header-nav-link" onClick={() => scrollTo('about')}>{t.nav.about}</button>
          <button className="header-nav-link" onClick={() => scrollTo('program')}>{t.nav.program}</button>
          <button className="header-nav-link" onClick={() => scrollTo('speakers')}>{t.nav.speakers}</button>
          <button className="header-nav-link" onClick={() => scrollTo('faq')}>{t.nav.faq}</button>
        </nav>

        <div className="header-actions">
          <div className="lang-switcher" role="group" aria-label="Language switcher">
            <button
              className={`lang-btn ${lang === 'en' ? 'lang-btn--active' : ''}`}
              onClick={() => toggleLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <span className="lang-divider">|</span>
            <button
              className={`lang-btn ${lang === 'de' ? 'lang-btn--active' : ''}`}
              onClick={() => toggleLang('de')}
              aria-pressed={lang === 'de'}
            >
              DE
            </button>
          </div>

          <button
            className="btn-primary header-register-btn"
            onClick={() => scrollTo('registration')}
          >
            {t.nav.register}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
