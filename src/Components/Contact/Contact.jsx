import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-details">
        <div className="left">
          <h6>- LET'S CONNECT</h6>
        <h1>Get in <span>touch</span></h1>
        <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7</p>
        <div className="contact-links">
          <a href="tel:+94755111360">+94 755111360</a>
          <a href="mailto:u.g.p.pushpakumara@gmail.com">u.g.p.pushpakumara@gmail.com</a>
          <a href="https://maps.app.goo.gl/BZ7WoRuCmzoprgbX6">Udamulle Gedara, Warakapitiya, Ulapane, Sri Lanka</a>
        </div>
        </div>
        <div className="right">
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit Now</button>
          </form>
        </div>
      </div>
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1099.2971542832374!2d80.55846566957234!3d7.124113830306489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2slk!4v1717307021844!5m2!1sen!2slk" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  )
}
export default Contact