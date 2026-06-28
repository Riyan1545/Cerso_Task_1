import React from 'react';
import './whyUs.css'

const WhyUs = () => {

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
            <section className="why-wrapper">
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