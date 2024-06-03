// eslint-disable-next-line no-unused-vars
import React from 'react'
import  './Portfolio.css'
import image1 from './../../assets/img/SMS.png'


const Portfolio = () => {
  return (
    <div className="my-portfolio">
      <h1 className='title'>My <span>Portfolio</span></h1>
      <div className="portfolio-cards">
        <div className="card">
            <img src={image1} alt=""/>
          <h1 className="card-title">
            App UI design
          </h1>
          
        </div>
      </div>
    </div>
  )
}

export default Portfolio