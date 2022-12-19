import React, { useRef } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eoc06mh', 'template_umv794c', form.current, '20VVew1Y6cEB6LYmo').then(
      (result) => {
        alert('Your Message has been sent successfully!!!');
      },
      (error) => {
        alert(error.text);
      }
    );

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>rajendradhaka13@gmail.com</h5>
            <a href='mailto:rajendradhaka13@gmail.com' target='_blank'>
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Rajendra Dhaka</h5>
            <a href='https://facebook.com' target='_blank'>
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>Rajendra Dhaka</h5>
            <a href='https://api.whatsapp.com/send?phone=+918780026335' target='_blank'>
              Send a message
            </a>
          </article>
        </div>
        {/* End of Contact options */}
        {/* Will use EmailJs to submit the form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name ' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
