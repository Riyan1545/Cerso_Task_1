import React from 'react';
import './Navbar.css'

import { Link, NavLink } from 'react-router-dom'

import YellowButton from './buttons/YellowButton/YellowButton';
import CersoLogo from '../../../assets/images/Cerso_Logo.png'

const Navbar = () => {
  return (
    <div>
      <header className='navbar'>
        <div className='nav-left-container'>
            <img src={CersoLogo} alt="" className='main-logo'/>
        </div>


        <div className='nav-link'>
            <NavLink className='nav-link-a' to='/'>Home</NavLink>
            <NavLink className='nav-link-a' to='/'>About</NavLink>
            <NavLink className='nav-link-a' to='/'>Services</NavLink>
            <NavLink className='nav-link-a' to='/'>Process</NavLink>
            <NavLink className='nav-link-a' to='/'>Testimonials</NavLink>
            <NavLink className='nav-link-a' to='/'>Contact</NavLink>
        </div>


        <div className='nav-right-container'>
            <YellowButton />
        </div>
      </header>
    </div>
  )
}

export default Navbar
