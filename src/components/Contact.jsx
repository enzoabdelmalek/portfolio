import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    emailjs
      .sendForm(
        'service_m6zyrej',
        'template_1fh8l66',
        form.current,
        'mA0fUvZ_Kho6RXODH'
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <h2>Contact Me</h2>
      <p>Send me a message and I’ll get back to you quickly!</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form" data-aos="zoom-in-up" data-aos-delay="200">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject" required/>

        <textarea name="message" rows="5" placeholder="Your Message" required />

        <button type="submit" disabled={loading} className='btn'>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {sent && <p className="success-msg">✅ Message sent successfully!</p>}
      </form>
    </section>
  );
}

export default Contact;
