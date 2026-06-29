import React, { useRef, useState } from 'react';
import './whyUs.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {

    const [showMenu, setShowMenu] = useState(false)

    const whyRef = useRef(null);

    useGSAP(() => {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: whyRef.current,
            start: 'top 80%',   // when the top of the section reaches 80% of the viewport
            toggleActions: 'play none none none',
        }
    });

    tl.from('.why-top-header', {
        y: -60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    })

    .from('.why-card', {
        y: -20,
        opacity: 0,
        stagger: 0.12,
        duration: 0.5,
        ease: 'power3.out',
    }, '-=0.4')

    .from('.why-card-content', {
        x: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.5');

}, { scope: whyRef });

    const whyCard = [
        {
            icon: 'ri-coin-fill',
            title: 'Affordable Solutions',
            description: 'High quality services that fit your budget without compromising results.'
        },
        {
            icon: 'ri-code-box-line',
            title: 'Fast delivery',
            description: 'We respect your time and deliver projects on schedule with effeciency.'
        },
        {
            icon: 'ri-palette-fill',
            title: 'Clean and Modren Design',
            description: 'Beautiful, user-friendly designs that leave a lasting impression.'
        },
        {
            icon: 'ri-user-2-fill',
            title: 'Affordable Solutions',
            description: 'We understand your needs'
        },
    ];
    return (
        <div>
            <section className="why-wrapper" ref={whyRef}>
                <div className="why-top-header">
                    <p>WHY CHOOSE CERSO</p>
                    <h1>Your Success is our Priority</h1>
                </div>

                <div className="why-card-container">

                    {whyCard.map((card) => {
                        return (
                            <div className="why-card">
                                <i className={card.icon}></i>
                                <div className="why-card-content">
                                    <h2>{card.title}</h2>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default WhyUs