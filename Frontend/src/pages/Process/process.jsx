import React, { useRef } from 'react';
import './process.css'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Process = () => {

    const processRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: processRef.current,
                start: 'top 90%',
                toggleActions: "play none none none"
            }
        });

        tl.from(".process-header > *", {
            y: 40,
            opacity: 0,
            stagger: 0.15,
            duration: 0.7,
            ease: "power3.out"
        })

            .from(".process-card", {
                x: (index) => index % 2 === 0 ? -80 : 80,
                y: 30,
                opacity: 0,
                scale: 0.95,
                duration: 0.8,
                stagger: 0.18,
                ease: "power3.out"
            }, "-=0.2")

            .from(".process-card-left", {
                scale: 0,
                rotate: -180,
                duration: 0.5,
                stagger: 0.18,
                ease: "back.out(1.8)"
            }, "-=0.9")

            .from(".process-card-right", {
                x: -20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.18,
                ease: "power2.out"
            }, "-=0.8");
    })

    const processCard = [
        {
            icon: 'ri-message-3-line',
            title: 'Discuss',
            caption: 'We understand your Business, goals and requirements.'
        },
        {
            icon: 'ri-pencil-line',
            title: 'Design',
            caption: 'We plan and design solutions that are modern and effective.'
        },
        {
            icon: 'ri-code-s-slash-line',
            title: 'Develop',
            caption: 'We build your solution with clean code and best practices.'
        },
        {
            icon: 'ri-send-plane-line',
            title: 'Deliver',
            caption: 'We test, launch and support yor business for long-term success.'
        },
    ]
    return (
        <div id='process'>
            <section className='process-section' ref={processRef}>

                <div className="process-header">
                    <p>Our Process</p>
                    <h1>Simple Steps, Powerful Results</h1>
                </div>

                <div className="process-card-container">

                    {processCard.map((card, index) => {
                        return (
                            <div className="process-card" key={index}>
                                <div className="process-card-left"><i className={card.icon}></i></div>
                                <div className="process-card-middle">
                                    <p>0{index + 1}</p>
                                    <h2>{card.title}</h2>
                                    <small>{card.caption}</small>
                                </div>
                                <div className="process-card-right"><i className="ri-arrow-right-long-line"></i></div>
                            </div>
                        )
                    })}

                </div>

            </section>
        </div>
    )
}

export default Process
