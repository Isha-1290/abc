import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5> What I Offer</h5>
      <h2> Services</h2>

      <div className='container services_container'>
        <article className='services'>
          <div className='service_head'>
            <h3> Front-End Development</h3>
          </div>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p> I have worked on a lot of Front-End web development projects including portfolio websites, e-nature, and many more. </p>
            </li>
          </ul>
        </article>
        {/* End of UI UX */}
        {/* Start of Web Development */}
        <article className='services'>
          <div className='service_head'>
            <h3>Full-Stack Web Development</h3>
          </div>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p> I have worked on a lot of full stack web development projects including weather application, chat application, and many more. </p>

            </li>
            
          </ul>
        </article>

        {/* Start of Content Creation */}
        <article className='services'>
          <div className='service_head'>
            <h3> Data Analyst </h3>
          </div>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p> I have done a trainee internship in Data Analyst and also I am having good command on tools like tableau, excel and etc.</p>
            </li>
          </ul>
        </article>
        {/* End of content creation */}
        
      </div>
    </section>
  )
}

export default Services