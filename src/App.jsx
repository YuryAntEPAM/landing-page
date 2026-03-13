import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Program from './components/Program'
import Speakers from './components/Speakers'
import FAQ from './components/FAQ'
import Registration from './components/Registration'

function App() {
  return (
    <>
      <Hero />
      <About />
      <Program />
      <Speakers />
      <FAQ />
      <Registration />
      <footer className="footer">
        <p>&copy; 2026 AI in Business Summit Zurich. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
