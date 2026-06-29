import React from 'react';
import './testimonials.css'

const Testimonials = () => {

  return (
    <div id='testimonials'>
      <section className='testimonial-section'>
        <div className='testimonial-header'>
            <p>Testimonials</p>
            <h1>What Our Clients Say</h1>
            
        </div>

        <div className='testimonials-card-container'>
            <div className='testimonial-card'>
                <div className="testimonial-card-header">
                    <h2><i className="ri-double-quotes-l"></i></h2>
                    <h2><i className="ri-star-line"></i></h2>
                </div>

                <div className='testimonial-card-paragraph'>
                    <p>Cerso delivered a website that exceeded our expectations.Professionals, fast, and very easy to work with!</p>
                </div>

                <div className='testimonial-card-user'>
                    <img src="https://images.pexels.com/photos/15393590/pexels-photo-15393590.jpeg?_gl=1*185cjuf*_ga*Mjc3OTg2MDM5LjE3NTY3NDE0ODg.*_ga_8JE65Q40S6*czE3ODI3Mjk0MTkkbzgkZzEkdDE3ODI3Mjk0NDckajMyJGwwJGgw" alt="" />
                    <div className='testimonial-card-user-info'>
                            <p id='para'>Ahmed R.</p>
                            <p>CEO, Trendy Mart</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
