import './App.css'
import Hero from '../src/components/hero'
import Nav from '../src/components/nav'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'


function App() {

  return (
    <>
      <Nav/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
