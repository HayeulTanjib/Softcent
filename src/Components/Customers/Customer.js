import React from 'react';
import './Customer.css';
import underline from '../../Assets/Underline.png';
import ubs from '../../Assets/customer1.png';
import hsbc from '../../Assets/customer2.png';
import myfitlab from '../../Assets/customer3.png';
import appsero from '../../Assets/customer4.png';

const Customer = () => {
    return (
        <section className='customer_section'>
            <div className="customer_heading">
                <h1>Our Customers</h1>
                <img src={underline} alt="" />
            </div>
            <div className="customers_logo">
                <img src={ubs} alt="" />
                <img src={hsbc} alt="" />
                <img src={myfitlab} alt="" />
                <img src={appsero} alt="" />
            </div>

        </section>
    );
};

export default Customer;