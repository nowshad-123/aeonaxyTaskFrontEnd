import React from 'react';
import Logo from '../../Assets/dribbble.js'
import landing_img from '../../Assets/landing_image.png'
import './sign.css';
import SignIn from '../../Components/Forms/SignIn.js';

const Sign = () => {
    return (
        <div className="layout">
            <div className="left-container">
                <div className='title_container'>
                    <Logo color="#ae8a40" height="80px" width="80px" className="logo" />
                    <h6 className='title_tag'>Design the world's top <br /> designers & Creatives.</h6>
                </div>
                <img src={landing_img} alt="" className='landing_image' />
            </div>
            <div className="right-container">
                <SignIn />
            </div>
        </div>
    );
}

export default Sign;
