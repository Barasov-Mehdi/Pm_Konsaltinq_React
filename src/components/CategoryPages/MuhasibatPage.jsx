import React, { useEffect, useState } from 'react';
import '../../scss/CategoryScss/TaxPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAllServices } from '../../slices/productSlice';
import { TailSpin } from 'react-loader-spinner';

function MuhasibatPage() {
    const dispatch = useDispatch();
    const services = useSelector((state) => state.products.services);
    const [serb, setServ] = useState([])

    useEffect(() => {
        const taxCategory = services.filter((e) => e.category === 'Mühasibat xidməti');
        setServ(taxCategory);
    }, [services]);


    useEffect(() => {
        dispatch(getAllServices());
    }, [dispatch]);

    return (
        <div className="tax-page">
            <h1>Mühasibat xidməti</h1>
            <div className="services-container">
                {
                    serb.length > 0 ? (
                        serb.map((service) => (
                            <div className="service-item" key={service._id}>
                                <p className="service-description">
                                    {service.description}
                                </p>
                                <button className="more-info-button">Daha çox</button>
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

export default MuhasibatPage;