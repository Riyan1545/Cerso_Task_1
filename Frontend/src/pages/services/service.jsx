import React, { useRef } from 'react';
import './service.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const serviceRef = useRef(null);

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: serviceRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }

    });

    tl.from(".service-heading", {
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out"
    })
      .from(".service-subheading", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"
      }, "-=0.25")
    gsap.set(".service-card", {
      y: 60,
      opacity: 0,
      scale: 0.95
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: serviceRef.current,
        start: "top 80%",
        once: true
      }
    })
      .to(".service-card", {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 0.3,
        ease: "power3.out"
      });

    console.log(document.querySelectorAll(".service-card"));

  }, { scope: serviceRef });

  const card = [
    {
      cardicon: 'ri-macbook-line',
      title: 'Web Development',
      carddescription: 'Fast, responsive, and modern websites built to represent your brand and convert visitors into customers.',
      cardcta: 'Learn More'
    },
    {

      cardicon: 'ri-settings-2-line',
      title: 'Management Systems',
      carddescription: 'Custom systems to streamline your operations, manage processes, and improve business efficiency.',
      cardcta: 'Learn More'
    },
    {

      cardicon: 'ri-global-line',
      title: 'Digital Presence',
      carddescription: 'Fast, responsive, and modern websites built to represent your brand and convert visitors into customers.',
      cardcta: 'Learn More'
    },

    {
      cardicon: 'ri-puzzle-line',
      title: 'Custom Solutions',
      carddescription: 'Fast, responsive, and modern websites built to represent your brand and convert visitors into customers.',
      cardcta: 'Learn More',
    }

  ]

  return (
    <div id='service'>
      <section className='service-container' ref={serviceRef}>
        <div className="top-service-headers">
          <p id='heading' className='service-heading'>SERVICES</p>
          <h1 id="subheading" className='service-subheading'>Solutions That Drive Your Business Forward</h1>
        </div>
        <div className="four-coloumn-content">

          {
            card.map((card, index) => {
              return (
                <div className="web-dev service-card" key={index}>
                  <div className="icon"><i className={card.cardicon}></i></div>
                  <h4>{card.title}</h4>
                  <p>{card.carddescription}</p>
                </div>
              )
            })
          }

        </div>




      </section>

    </div>
  )
}

export default Service
