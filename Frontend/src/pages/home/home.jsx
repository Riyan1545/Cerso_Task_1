import React from 'react'
import './home.css';
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import YellowButton from '../../components/common/Navbar/buttons/YellowButton/YellowButton';
import WhyUs from '../WhyUs/whyUs';

import About from '../about/about'

const Home = () => {
  const heroRef = useRef(null);

  useGSAP(() => {

    const tl = gsap.timeline();

    tl.from("#cell", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    })

      .from("#white", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.3")

      .from("#para", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.4")

      .from(".hero-container-lower-col", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.3");

  }, { scope: heroRef });
  return (
    <div id='home'>
      <section className='hero-container' ref={heroRef}>
        <div className="hero-content">
          <div className='hero-container-upper-col'>
            <p id='cell'>BUILDING DIGITAL SUCCESS</p>
            <h1 id='white'>We Build. You <span style={{ 'color': 'var(--accent-light)' }}>Grow.</span></h1>
            <p id='para'>Cerso helps small buisness establish a powerful digital presence with modern websites and smart management systems.</p>
          </div>
          <div className='hero-container-lower-col'>
            <YellowButton />
            <button className='Hero-btn-2'>Let's Build Together</button>
          </div>
        </div>
      </section>

      <About />

      <WhyUs />
    </div>
  )
}

export default Home
