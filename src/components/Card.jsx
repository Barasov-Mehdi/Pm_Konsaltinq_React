import React from 'react';
import '../scss/Card.scss';

function Card({ title, imgSrc }) {
    return (
        <div className="container">
            <div className="card">
                <div className="card__header">
                    <img src={imgSrc} alt="PM KONSALTINQ" className="card__image" width="600" />
                </div>
                <div className="card__body">
                    <h4>{title}</h4>
                </div>

            </div>

        </div>
    );
}

export default Card;
