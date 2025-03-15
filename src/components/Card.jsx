import React from 'react';
import '../scss/Card.scss';
import { useNavigate } from 'react-router-dom';

function Card({ title, imgSrc }) {
    const navigate = useNavigate();

    const goPages = () => {
        const normalizedTitle = title.trim().toLowerCase(); // Boşlukları temizle

        if (normalizedTitle === 'vergi') {
            navigate('/vergi');
        } else if (normalizedTitle === 'mühasibat') {
            navigate('/muhasibat');
        } else if (normalizedTitle === 'mətbəə') {
            navigate('/metbee');
        } else if (normalizedTitle === 'poliqrafiya') {
            navigate('/poligrafiya');
        }
    };



    return (
        <div className="container" onClick={goPages} style={{ cursor: "pointer" }}>
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
