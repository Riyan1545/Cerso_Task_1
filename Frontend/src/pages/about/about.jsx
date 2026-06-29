import React from 'react'
import './about.css';

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import AboutImg from './AboutImg.jpg'

const About = () => {

  const aboutRef = useRef(null);

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-container",
        start: "top 10%",
        toggleActions: "play none none none"
      }
    });

    tl.from(".about-left-container > *", {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.7,
      ease: "power3.out"
    })

      .from(".about-right-container", {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.5");

  }, { scope: aboutRef });
  return (
    <div id='about'>
      <section className='about-container' ref={aboutRef}>

        <div className="about-left-container">
          <p>ABOUT US</p>
          <h1>We're More Than Developers, We're Your Growth Partners</h1>
          <p>Cerso is a digital solutions company dedicated to helping small businesses grow through modern websites, management systems, and a strong online presences, we combine creativity,technology and stratergy to build solutions that are simple, effective, and tailored to your needs.</p>
          <p><i className="ri-suitcase-line"></i> We work with startups,local businesses and growing companies across various industryes.</p>
        </div>

        <div className="about-right-container">
          <img src={AboutImg} alt="" />
        </div>
      </section>
    </div>
  )
}

export default About
