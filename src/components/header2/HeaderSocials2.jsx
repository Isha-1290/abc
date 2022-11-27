import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials2 = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/ajay-singh-1154b41b7/" class='button' target="_blank">
          <span className='icon'><BsLinkedin/> </span>
          <span className='text'>ajay-singh-1154b41b7</span>
        </a>
        <a href="https://github.com/Ajay080" class='button' target="_blank">
          <span className='icon'><FaGithub/> </span>
          <span className='text'>Ajay080</span>
        </a>
        <a href="https://leetcode.com/ajay_leetcode/" class='button' target="_blank">
          <span className='icon'><SiLeetcode /> </span>
          <span className='text'>ajay_leetcode</span>
        </a>

    </div>
  )
}

export default HeaderSocials2