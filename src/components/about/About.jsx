import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5> Get TO Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className="about_me-image">
            <img src={ME} alt="About-Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon' />
              <h5> B Tech. CSE</h5>
              <small>3rd Year</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5> Projects</h5>
              <small>more than 5</small>
            </article>
            <article className="about_card">
              < FiUsers className='about_icon' />
              <h5> Design Head </h5>
              <small>E-Cell VITB</small>
            </article>
          </div>

         
          <p>
          <h3>
          <strong>
          Full-Stack Developer & Data Analyst 
          </strong>
          </h3>
          <br/>
          <strong>City:</strong> Pune, Maharashtra
          <br/>
          <strong>Email ID:</strong> ajaysinghrathaur1009@gmail.com
          <br/>
          <strong>Date of Birth:</strong> June 8,2002
          <br/>
          <br/>
          I have worked on various Web Development and Data Analyst projects. Currently, I am focused on MERN Stack development, and also having a great interest in UI/UX design tools.
          <br/>I also have leaded above 15 member team , having managed lead Design around 5+ events din both online and offline mode.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About