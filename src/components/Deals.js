import React from 'react';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import './Deals.css';

const Deals = () => {
    const deals = [
        { discount: '15%', days: '6 Days Remaining', img: image1 },
        { discount: '10%', days: '6 Days Remaining', img: image2 },
        { discount: '25%', days: '7 Days Remaining', img: image3 },
        { discount: '20%', days: '8 Days Remaining', img: image4 },
    ];

    return (
        <div className="deals">
            {deals.map((deal, index) => (
                <div key={index} className="deal-card">
                    <img src={deal.img} alt={`Deal ${index + 1}`} />
                    <div className="discount">{deal.discount} Off</div>
                    <div className="details">
                        <p>Greys Vage</p>
                        <span>{deal.days}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Deals;
