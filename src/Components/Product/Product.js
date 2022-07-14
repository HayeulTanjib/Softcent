import React from 'react';
import './Product.css';
import underline from '../../Assets/Underline.png';
import phone1 from '../../Assets/phone1.PNG'
import phone2 from '../../Assets/phone2.PNG'

const Product = () => {

    return (
        <section className='product_section'>
            <div className='product_heading'>
                <div>
                    <h1>Our Products</h1>
                    <img src={underline} alt="" />
                    <p>We believe that great design should not be out of reach, so our services <br /> are less than half the price of a full-time designer.</p>
                </div>
                <div className="seemore_button">
                    <button>See More</button>
                </div>
            </div>
            <div className="product_details">
                <div className="swipexyx_product">
                    <div className='swipexyz_info'>
                    <h2>SwipeXYZ Product</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button>View Product</button>
                    </div>
                    <div>
                        <img src={phone1} alt="" />
                    </div>
                </div>
                <div className="cashback_product">
                    <div className='cashback_info'>
                    <h2>Cashback Product</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button>View Product</button>
                    </div>
                    <div>
                        <img src={phone2} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;