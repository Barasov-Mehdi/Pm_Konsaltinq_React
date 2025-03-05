import React from 'react';
import '../scss/Card.scss';

function Card({ title, imgSrc }) {
    return (
        <div className='card' role="article" aria-labelledby={title} style={{ display: "inline-block", width: "200px" }}>
            <img src={imgSrc} alt={title} className='card-image' />
            <h2 className='card-title' id={title}>{title}</h2>
        </div>
    );
}

export default Card;