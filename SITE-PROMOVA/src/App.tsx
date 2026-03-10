import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import CTA from './components/sections/CTA'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
