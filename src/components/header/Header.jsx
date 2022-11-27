import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      {/* we are using container css and also a class name header_container*/}
      <div className= "container header_container">
        <h5> Hello I'm</h5>
        <h1>Ajay Singh</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="Ajay Singh" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
        <HeaderSocials />
      </div>

    </header>
  )
}

export default Header