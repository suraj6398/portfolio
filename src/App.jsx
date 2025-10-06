import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Certification from './Components/Certification'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Certification/>
      <Contact/>
      <Footer/>
      </>
    </div>
  )
}

export default App
