import './App.css'
import { LanguageProvider, useLang } from './context/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Program from './components/Program'
import Speakers from './components/Speakers'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Registration from './components/Registration'

function PageContent() {
  const { t } = useLang()
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Program />
      <Speakers />
      <Gallery />
      <FAQ />
      <Registration />
      <footer className="footer">
        <p>{t.footer}</p>
      </footer>
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  )
}

export default App
