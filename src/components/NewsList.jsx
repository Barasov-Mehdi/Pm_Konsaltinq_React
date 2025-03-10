import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Vergi from '../assets/vergi.PNG';
import Muhasibat from '../assets/Muhasibat.PNG';
import Mətbəə from '../assets/Mətbəə.PNG';
import Poliqrafiya from '../assets/Poliqrafiya.PNG';
import Card from './Card';

function NewsList() {
    const services = [
        { title: 'Vergi', imgSrc: Vergi },
        { title: 'Mühasibat ', imgSrc: Muhasibat },
        { title: 'Mətbəə', imgSrc: Mətbəə },
        { title: 'Poliqrafiya', imgSrc: Poliqrafiya },
    ];

    return (
        <div>
                <h1>Lorem ipsum dolor sit amet.</h1>
            <h2>Xidmətlərimiz</h2>

            <div className='cardsContainer'>
                {services.map((service, index) => (
                    <div key={index}>
                        <Link to="/ProductDetails">
                            <Card title={service.title} imgSrc={service.imgSrc} />
                        </Link>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default NewsList
