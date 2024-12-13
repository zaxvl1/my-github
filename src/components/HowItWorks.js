import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        { icon: '📍', title: 'Select location', description: 'Choose the location where your food will be delivered.' },
        { icon: '📋', title: 'Choose order', description: 'Check over hundreds of menus to pick your favorite food.' },
        { icon: '💳', title: 'Pay advanced', description: 'It’s quick, safe, and simple. Select several methods of payment.' },
        { icon: '🍴', title: 'Enjoy meals', description: 'Food is made and delivered directly to your home.' },
    ];

    return (
        <div className="how-it-works">
            <h2>How does it work</h2>
            <div className="steps">
                {steps.map((step, index) => (
                    <div key={index} className="step">
                        <div className="icon">{step.icon}</div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
