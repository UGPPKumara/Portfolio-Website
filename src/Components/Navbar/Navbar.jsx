// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Navbar.css'
import logo from '../../assets/img/logo.png'
import { FaBehance, FaDribbble, FaFacebook, FaFigma, FaGithub, FaLinkedin } from 'react-icons/fa';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
        <h2>Prasanna Pushpa Kumara </h2>
      </div>
      <div className="nav-items">
        <ul className='nav-links'>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer">
        <div className="footer-icons">
          <FaFacebook className='icon'/>
          <FaGithub className='icon'/>
          <FaLinkedin className='icon'/>
          <FaFigma className='icon'/>
          <FaBehance className='icon'/>
          <FaDribbble className='icon'/>
        </div>
        <p>Copyright © 2024 Prasanna . </p> <p>  All rights reserved.</p>
      </div>
    </div>
  )
}

export default Navbar