import React from 'react'
import './about.css';

import AboutImg from './AboutImg.jpg'

const About = () => {
  return (
    <div id='about'>
      <section className='about-container'>

        <div className="about-left-container">
            <p>ABOUT US</p>
            <h1>We're More Than Developers,</h1>
            <h1>We're Your Growth Partners</h1>
            <p>Cerso is a digital solutions company dedicated to helping small businesses grow through modern websites, management systems, and a strong online presences, we combine creativity,technology and stratergy to build solutions that are simple, effective, and tailored to your needs.</p>
            <p>We work with startups,local businesses and growing companies across various industryes.</p>
        </div>

        <div className="about-right-container">
            <img src={AboutImg} alt="" />
        </div>
      </section>
    </div>
  )
}

export default About
