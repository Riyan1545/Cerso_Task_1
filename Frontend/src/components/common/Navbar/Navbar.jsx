import React, { useRef } from 'react';
import './Navbar.css';

import { NavLink } from 'react-router-dom';

import YellowButton from './buttons/YellowButton/YellowButton';
import CersoLogo from '../../../assets/images/Cerso_Logo.png';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {

    const navbarRef = useRef(null);

    useGSAP(() => {

        const tl = gsap.timeline();

        tl.from('.main-logo', {
            x: -60,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        })

        .from('.nav-link', {
            y: -20,
            opacity: 0,
            stagger: 0.12,
            duration: 0.5,
            ease: 'power3.out',
        }, '-=0.4')

        .from('.nav-right-container', {
            x: 60,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5');

    }, { scope: navbarRef });

    return (
        <header className='navbar' ref={navbarRef}>

            <div className='nav-left-container'>
                <img
                    src={CersoLogo}
                    alt="Cerso Logo"
                    className='main-logo'
                />
            </div>

            <div className='nav-link'>
                <a className='nav-link-a' href='#home'>Home</a>
                <a className='nav-link-a' href='#about'>About</a>
                <a className='nav-link-a' href='#services'>Services</a>
                <a className='nav-link-a' href='#process'>Process</a>
                <a className='nav-link-a' href='#testimonials'>Testimonials</a>
                <a className='nav-link-a' href='#contact'>Contact</a>
            </div>

            <div className='nav-right-container'>
                <YellowButton />
            </div>

            <div className="sideNav">
                <a className='nav-link-a' href='#home'>Home</a>
                <a className='nav-link-a' href='#about'>About</a>
                <a className='nav-link-a' href='#services'>Services</a>
                <a className='nav-link-a' href='#process'>Process</a>
                <a className='nav-link-a' href='#testimonials'>Testimonials</a>
                <a className='nav-link-a' href='#contact'>Contact</a>
            </div>

        </header>
    );
};

export default Navbar;