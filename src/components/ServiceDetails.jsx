
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getAllServices } from '../slices/productSlice';
import '../scss/ServiceDetails.scss';
import { TailSpin } from 'react-loader-spinner';

function ServiceDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const services = useSelector((state) => state.products.services);
    const [service, setService] = useState(null);

    useEffect(() => {
        dispatch(getAllServices());
    }, [dispatch]);

    useEffect(() => {
        if (services.length > 0) {
            const response = services.find((e) => e._id === id);
            setService(response);
        }
    }, [services, id]);

    const shareOnWhatsApp = () => {
        if (service) {
            const message = `Salam! Bu ${service.name} xidməti haqqinda daha ətraflı danışardınız.`;
            const phoneNumber = "+994513161354"; // Updated phone number
            const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
        }
    };

    return (
        <div className="service-details">
            {!service ? (
                <TailSpin className='loading' color="#3498db" height={50} width={50} />
            ) : (
                <div className="service-header">
                    <Link className='goHome' to='/'>Əsas səhifə</Link>

                    <div>
                        <img src={service.image} alt={service.name} />
                    </div>
                    <div>
                        <h2>{service.name}</h2>
                    </div>
                    <div>
                        <p>{service.description}</p>
                    </div>
                </div>
            )}
            <button className="whatsapp-btn" onClick={shareOnWhatsApp}>
                Bizdən soruş
            </button>
        </div>
    );
}

export default ServiceDetails;