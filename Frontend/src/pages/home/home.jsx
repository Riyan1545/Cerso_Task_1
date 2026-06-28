import React from 'react'
import './home.css';

import YellowButton from '../../components/common/Navbar/buttons/YellowButton/YellowButton'

const Home = () => {
  return (
    <div>
      <section className='hero-container'>
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
    </div>
  )
}

export default Home
