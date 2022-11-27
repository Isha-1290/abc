import React from 'react'
import Header2 from './components/header2/Header2'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfoliocopy/App'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Me from '../src/assets/video1.mp4'



const App = () => {
  return (
    <>
      <video autoPlay loop muted id='video'>
        <source src={Me} type='video/mp4' />
      </video>
        <Header2 />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App