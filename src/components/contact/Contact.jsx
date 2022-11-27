import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md';
import {AiOutlinePhone} from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from'emailjs-com';
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_difpvpe', 'template_fwgwkj8', form.current, 'vtGu011xjwdim-Gbh')
    e.target.reset()

  };

  return (
    <section id='contact'>
      <h5> Get In Touch</h5>
      <h2> Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
          <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <p>aajaysingrathaur@gmail.com</p>
            <a href="mailto:ajaysinghrathaur1009@gmail.com">send a message</a>
          </article>
          <article className='contact_option'>
            <AiOutlineLinkedin className='contact_option-icon'/>
            <h4>LinkedIn</h4>
            <p>ajay-singh-1154b41b7</p>
            <a href="https://www.linkedin.com/in/ajay-singh-1154b41b7/">send a message</a>
          </article>
          <article className='contact_option'>
            <AiOutlinePhone className='contact_option-icon'/>
            <h4>Phone Number</h4>
            <p>8318388151</p>
          </article>
        </div>
        <form ref={form}  onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your full Name" required />
          <input type="email" name='email' placeholder="Your Email" required />
          <textarea name="message" rows="15" placeholder="Your Message" required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
    
  )
}

export default Contact