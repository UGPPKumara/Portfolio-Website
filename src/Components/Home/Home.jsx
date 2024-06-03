// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './Home.css';
import profile from '../../assets/img/profile.png';

const Home = () => {
  // Text animation
  const [currentText, setCurrentText] = useState('UI/UX Designer');
  const texts = ['UI/UX Engineer', 'Frontend Developer'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(prevText => (prevText === texts[0] ? texts[1] : texts[0]));
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home">
      <div className="home-left">
        <h1>Hi, I'm <span className="home-left-content-name">Prasanna!</span></h1>
        <h1 className="animated-text">{currentText}</h1>
        <p>
          I am a multidisciplinary creative, seamlessly blending UX/UI design, frontend development, and graphic design to craft immersive digital experiences. With a keen eye for detail and a deep passion for user-centric design, I bring stories to life through visually compelling and intuitive interfaces. Welcome to my portfolio, where art and technology converge to create captivating digital journeys.
        </p>
        <div className="home-left-content-buttons">
          <a href="#about" className='about'>
            <button className="btn">More About Me</button>
          </a>
          <a href="#download" className='download'>
            <button className="btn download">Download CV</button>
          </a>
        </div>

        <div className="info">
          <ul>
            <li className="phone"><a href="tel:+94755111360">+94755111360</a></li>
            <li className="email"><a href="mailto:u.g.p.pushpakumara@gmail.com">u.g.p.pushpakumara@gmail.com</a></li>
            <li className="address"><a href="">Udamulle Geadara, Warakapitiya, Ulapane</a></li>
          </ul>
        </div>
      </div>
      <div className="home-right">
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default Home;
