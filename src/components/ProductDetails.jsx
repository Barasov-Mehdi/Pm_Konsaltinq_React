import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllServices } from '../slices/productSlice';
import '../scss/ProductDetails.scss';
import { Link } from 'react-router-dom';
const ProductDetails = () => {
    const dispatch = useDispatch();
    const services = useSelector((state) => state.products.services);
    const [servicesGet, setServivesGet] = useState([]);

    useEffect(() => {
        dispatch(getAllServices());
    }, [dispatch]);

    const vergiBtn = (category) => {
        const filterCategory = services.filter((e) => e.category === category);
        setServivesGet(filterCategory);
    }

    return (
        <div className="product-details">
            <h3>Xidmətlər</h3>
            <div className="button-container">
                <button onClick={() => vergiBtn('Vergi xidməti')}>Vergi</button>
                <button onClick={() => vergiBtn('Mühasibat xidməti')}>Mühasibat</button>
                <button onClick={() => vergiBtn('Mətbəə')}>Mətbəə</button>
                <button onClick={() => vergiBtn('Poliqrafiya')}>Poliqrafiya</button>
            </div>
            <ul>
                {servicesGet.length > 0 ? (
                    servicesGet.map((service) => (
                        <Link to={`/service/${service._id}`} key={service.id} className="product-card">
                            <img src={service.image} alt={service.name} />
                            <h2>{service.name}</h2>
                            {/* <p className="content">{service.description}</p> */}
                        </Link>
                    ))
                ) : (
                    (
                        services.map((service) => (
                            <Link to={`/service/${service._id}`} key={service.id} className="product-card">
                                <img src={service.image} alt={service.name} />
                                <h2>{service.name}</h2>
                                {/* <p className="content">{service.description}</p> */}
                            </Link>
                        ))
                    )
                )}
            </ul>
        </div>
    );
};

export default ProductDetails;