import React from 'react';
import './Services.css';
import underline from '../../Assets/Underline.png';
import branding from '../../Assets/branding.png';
import ux from '../../Assets/ux.png';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceDetails from './ServiceDetails';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <section className='services_section'>
            <div className="customer_heading">
                <h1>Our Customers</h1>
                <img src={underline} alt="" />
            </div>
            <div className='services_details'>
                {
                    services.map(service => <ServiceDetails service={service}/>)
                }
            </div>
        </section>
    );
};

export default Services;
