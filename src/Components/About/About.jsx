import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <h1 className='title'>About <span>Me</span></h1>
      <h2>Personal Infos</h2>
      <hr className='horizantal' />
      <div className="personal-info">
        <div className="details">
          <ul className='details-left'>
            <li><strong>First Name: </strong>Prasanna</li>
            <li><strong>Age: </strong>27</li>
            <li><strong>Freelance: </strong>Available </li>
            <li><strong>Phone: </strong>+94770698965 | +94755111360</li>
            <li><strong>Languages: </strong>Sinhala , English</li>
            
            <a href="#download" className='download'>
              <button className="btn download">Download CV </button>
            </a>
          </ul>
          
          <ul className='details-right'>
          <li><strong>Last Name: </strong>Prasanna</li>
            <li><strong>Nationality: </strong>27</li>
            <li><strong>Address: </strong>Udamulle Gedara, Warakapitiya, Ulapane </li>
            <li><strong>Email: </strong>+94770698965 | +94755111360</li>
          </ul>

        <div className="experience">
        <div className="my-skill-experience">
            <h1>2+</h1>
            <h3>Years of Experience</h3>
          </div>
          <div className="my-skill-experience">
            <h1>15+</h1>
            <h3>Completed Projects</h3>
          </div>
          <div className="my-skill-experience">
            <h1>10+</h1>
            <h3>Happy Customers</h3>
          </div>
          <div className="my-skill-experience">
            <h1>5+</h1>
            <h3>Ceritificates</h3>
          </div>

        </div>
        </div>
        <div className="my-skills">
          
        </div>
      </div>
    </div>

  )
}

export default About