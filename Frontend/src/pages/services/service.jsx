import React from 'react'
import './service.css'

const Service = () => {
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
      <section className='service-container'>
        <div className="top-service-headers">
          <p>SERVICES</p>
          <h1>Solutions That Drive Your Business Forward</h1>
        </div>
        <div className="four-coloumn-content">
          
          
          {
            card.map((card)=>{
              return(
                <div className="web-dev">
            <div className="icon"><i class={card.cardicon}></i></div>
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
