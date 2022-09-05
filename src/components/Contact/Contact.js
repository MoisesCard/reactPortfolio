import React, { useRef } from 'react';
import "./contact.css"
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {AiOutlineFacebook} from 'react-icons/ai'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iuakguk', 'template_kyw6pc4', form.current, '-6r9sBDkDYpraFlkn')
      .then((result) => {
          alert("Message was sent!");
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()  
  };

  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineAlternateEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>macv123321@gmail.com</h5>
            <a href='mailto:macv123321@gmail.com'>Send me an email</a>
          </article>

          <article className='contact_option'>
            <AiOutlineFacebook className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Moises Cardenas</h5>
            <a href='https://m.me/moises.cardenas.7' target="_blank">Send me a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your First And Last Named' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact