import React from 'react'
import './header2.css'
import CTA from './CTA2'
import Typed from 'typed.js'


import HeaderSocials2 from './HeaderSocials2'

const Header2 = () => {
  const el = React.useRef(null);
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'Full-Stack Developer',
        'Data Analyst',
        'UI-UX Designer'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor:true,
      loop:true
    };
  typed.current = new Typed(el.current, options);
  return () => {
    typed.current.destroy();
  }
}, [])
  return (
    <header>
      <div className= "container">
        <div className='header_container'>
        <h1>Ajay Singh</h1>
        <p className='text-light'>I am a <span className="Any" style={{ whiteSpace: 'pre' }} ref={el} /></p>
        <CTA />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
        <HeaderSocials2 />
      </div>
    </header>
  )
}

export default Header2