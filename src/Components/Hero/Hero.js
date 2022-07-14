import React from 'react';
import bgimg from '../../Assets/hero-bg.png';
import underline from '../../Assets/Underline.png';
import vicon1 from '../../Assets/vicon1.png';
import vicon2 from '../../Assets/vicon2.png';
import vpolygon1 from '../../Assets/vpolygon1.png';
import './Hero.css';

const Hero = () => {
    return (

        <section className='hero'>
            <div className="hero_mainText">
            <h1>Software services for <br />
                startups without <br />
                limits..
            </h1>
            <img className='underline_img' src={underline} alt="" />
            </div>
            <p>We believe that great design should not be out of reach, so our services <br /> are less than half the price of a full-time designer.</p>

            <div className='bg_img'>
                <img src={bgimg} alt="" />
                    <img src={vicon1} className="bg_icon1" alt="" />
                    <img src={vicon2} className="bg_icon2" alt="" />
                    <img src={vpolygon1} className="bg_icon3" alt="" />
            </div>
        </section>
    );
};

export default Hero;