import React, { useState } from 'react';
import '../scss/Content.scss';
import Card from './Card';
import Vergi from '../assets/vergi.PNG';
import Muhasibat from '../assets/Muhasibat.PNG';
import Mətbəə from '../assets/Mətbəə.PNG';
import Poliqrafiya from '../assets/Poliqrafiya.PNG';
import { Link } from 'react-router-dom';
import NewsPage from '../components/NewsPage'

    function Content() {
        const services = [
            { title: 'Vergi', imgSrc: Vergi },
            { title: 'Mühasibat ', imgSrc: Muhasibat },
            { title: 'Mətbəə', imgSrc: Mətbəə },
            { title: 'Poliqrafiya', imgSrc: Poliqrafiya },
        ];

        return (
            <div className='contentContainer'>
                <div className='textContainer'>
                    <div className="textContent">
                        <h1 className='h1'>PM Konsaltinq</h1>
                        <p>
                            Peşəkar Mühasib Konsaltinq MMC mühasibatlıq sahəsində təcrübəli və peşəkar əməkdaşların birlikdə ərsəyə gətirdiyi bir layihədir. Şirkətimiz yarandığı tarixdən bu günədək vergi və mühasibatlıq sahəsində çoxlu sayda uğurlara imza atmışdı. Belə ki, tərəfimizdən sahibkarlıq sahəsində yeni fəaliyyətə başlamış fiziki və ya hüquqi şəxslərə biznes konsaltinq və uçot sahəsində keyfiyyətli dəstək verilmişdir.
                        </p>
                        <p>
                            Son olaraq qeyd etmək istərdik ki, fəaliyyətimiz ilə sizlərə dəstək olmaq bizim işimizin məqsədidir.
                        </p>
                    </div>

                    <div className="animationBox">


                    </div>

                </div>

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

                <NewsPage />
            </div>
        );
    }

export default Content;