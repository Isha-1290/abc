import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
      {/* <a href='#' className='footer_logo'> AJAY</a> */}
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contacts'>Contacts</a></li>
      </ul>
      <div className='footer_socials'>
        <a href="https://www.facebook.com/aajaysingrathaur/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/ajaysinghrathaur_art/"><FiInstagram/></a>
        <a href="https://twitter.com/Ajay14788206"><IoLogoTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Ajay Singh. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer