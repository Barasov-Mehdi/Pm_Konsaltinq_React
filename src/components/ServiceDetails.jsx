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
        console.log("All Services:", services); 
        console.log("Requested ID:", id);

        if (services.length > 0) {
            
            const matchedService = services.find((e) => e._id === id);
            console.log("Matched Service:", matchedService); 
            setService(matchedService); 
        } else {
            console.log("No services found."); 
        }
    }, [services, id]);

    const shareOnWhatsApp = () => {
        if (service && service.description) {
            const message = `Salam! Bunun haqqinda məlumat almaq istəyirəm: ${service.description}`;
            const phoneNumber = "+994513161354"; 
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
                        <h2>{service.category}</h2>
                        <h3>{service.description}</h3> 
                    </div>
                </div>
            )}
            <button className="whatsapp-btn" onClick={shareOnWhatsApp} disabled={!service}>
                Bizdən soruş
            </button>
        </div>
    );
}

export default ServiceDetails;