import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing'
import Project from './components/Projects/Project'
import Tech from './components/Tech/Tech'

function App() {

  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Tech />
      <Project />
      <Pricing />
      <Contact />
      <Footer />
    </>
  )
}

export default App
