import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import logo from '../../images/Medico-logo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div>
            <NavLink className="logo" to="/">
            <p>
            <img className='img-fluid medio_logo' src={logo} alt='medico logo'/>
            </p>
            <h5>
              <span className='name'> Medico </span> <br /> <span className="logo-text">Healthcare</span>{" "}
            </h5>{" "}
          </NavLink>
            </div>
            <div className='copy-right'>
            <p> &copy;2021, Medico Healthcare. All rights reserved. </p>
            </div>
            <div className='social-media'>
            <p> 
                <a href='https://www.facebook.com/' target='blank'><i class="fab fa-facebook-f"></i></a>
                <a href='https://www.instagram.com/?hl=en' target='blank'><i class="fab fa-instagram"></i></a>
                <a href='https://www.linkedin.com/' target='blank'><i class="fab fa-linkedin-in"></i></a>
                <a href='https://twitter.com/' target='blank'><i class="fab fa-twitter"></i></a>
            </p>
            </div>
        </div>
    );
};

export default Footer;