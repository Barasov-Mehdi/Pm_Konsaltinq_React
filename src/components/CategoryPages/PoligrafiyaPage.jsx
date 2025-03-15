import React, { useEffect, useState } from 'react';
import '../../scss/CategoryScss/TaxPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAllServices } from '../../slices/productSlice';
import { TailSpin } from 'react-loader-spinner';

function TaxPage() {
    const dispatch = useDispatch();
    const services = useSelector((state) => state.products.services);
    const [serb, setServ] = useState([])

    // Filter the services based on category
    useEffect(() => {
        const taxCategory = services.filter((e) => e.category === 'Poliqrafiya');
        setServ(taxCategory);
    }, [services]);

    // Function to handle WhatsApp redirect
    const handleWhatsAppRedirect = (description) => {
        const message = `Bunun haqqında məlumat almaq istəyirəm:\n ${description}`;
        const phoneNumber = '+994513161354'; // WhatsApp number
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank'); // Opens in a new tab
    };

    // Fetch services when component mounts
    useEffect(() => {
        dispatch(getAllServices());
    }, [dispatch]);

    return (
        <div className="tax-page">
            <h1>Poliqrafiya Xidmətləri</h1>
            <div className="services-container">
                {
                    serb.length > 0 ? (
                        serb.map((service) => (
                            <div className="service-item" key={service._id}>
                                <p className="service-description">
                                    {service.description}
                                </p>
                                <button
                                    onClick={() => handleWhatsAppRedirect(service.description)} // Corrected here
                                    className="more-info-button"
                                >
                                    Daha çox
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className='loading_box'>
                            <TailSpin className='loading' color="#3498db" height={50} width={50} />
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default TaxPage;
