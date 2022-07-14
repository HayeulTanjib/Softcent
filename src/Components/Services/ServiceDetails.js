import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = ({service}) => {
    const {service_name, img, services } = service;
    return (
        <div>
            <div className='service_title'>
            <h1>{service_name}</h1>
            <img src={img} alt="" />
            </div>
            <div>
                <ul>
                {
                    services.map(service => {
                        return(
                            <li>
                                {service}
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    );
};

export default ServiceDetails;