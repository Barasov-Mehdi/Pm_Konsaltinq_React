import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllServices } from '../slices/productSlice';
import '../scss/ServiceDetails.scss';
import { TailSpin } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

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
        </div>
    );
}

export default ServiceDetails;