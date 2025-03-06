import React, { useState } from 'react';
import '../scss/Content.scss';
import Card from './Card';
import Vergi from '../assets/vergi.PNG';
import Muhasibat from '../assets/Muhasibat.PNG';
import Mətbəə from '../assets/Mətbəə.PNG';
import Poliqrafiya from '../assets/Poliqrafiya.PNG';

function Content({ showMenu, showSearch, setShowSearch }) {
    const services = [
        { title: 'Vergi', imgSrc: Vergi },
        { title: 'Mühasibat ', imgSrc: Muhasibat },
        { title: 'Mətbəə', imgSrc: Mətbəə },
        { title: 'Poliqrafiya', imgSrc: Poliqrafiya },
    ];

    const closeSearchBox = () => {
        setShowSearch(false)
    }

    return (
        <div className='contentContainer'>
            <div className='textContainer'>
                <div className="textContent">
                    <h1 className='h1'>PM Konsaltinq</h1>
                    <p>
                        PM Konsaltinq, 2015-ci ildən etibarən müştərilərinə peşəkar xidmətləri təqdim edir.
                        İxtisaslaşdığımız sahələr arasında Vergi xidməti, Mətbəə və Poliqrafiya mövcuddur.
                        Peşəkar komandamız, iş proseslərinizi optimallaşdırmaq və müştəri məmnuniyyətini yüksəltmək məqsədilə buradadır.
                    </p>
                    <p>
                        Müştəri ehtiyaclarını ön planda tutaraq, xüsusi həllər təqdim edirik.
                        Daha ətraflı məlumat almaq və ya bizimlə əlaqə saxlayın.
                    </p>
                </div>

                <div className="animationBox">


                </div>

            </div>

            <h2>Xidmətlərimiz</h2>
            <a href="">
                <div className='cardsContainer'>
                    {services.map((service, index) => (
                        <Card key={index} title={service.title} imgSrc={service.imgSrc} />
                    ))}
                </div>
            </a>

            {showMenu && ( // showMenu true ise menü gösteriliyor
                <section className='barMenu'>
                    <div className='barNavBox'>
                        <a href="#">Əsas səhifə</a>
                        <a href="#">Haqqımızda</a>
                        <a href="#">Yeniliklər</a>
                        <a href="#">Xidmətlər</a>
                        <a href="#">Ünvan</a>
                    </div>
                    <div className='barasBox'>
                        <p>BarasSoftWare</p>
                    </div>

                </section>
            )}

            {
                showSearch && (
                    <section className='searchContainer'>
                        <p onClick={closeSearchBox} className='closeButton'>X</p>
                        <input type="text" placeholder="Xidmət Axtar..." className='searchInput' />
                        <button className='searchButton'>Axtar</button>
                    </section>
                )
            }

        </div>
    );
}

export default Content;