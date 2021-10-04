import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Footer = () =>
{
    const element = <FontAwesomeIcon icon={faCoffee} />
    return (
        <div>
        <div className="footer-container">
          <div className="container">
            <div className=" footer row">
              <div className="col-md-5">
                <div className="left-container text-start">
                  <h1>Fataha Jeswa Academy</h1>
                  <div className="icons-container d-flex text-center ">
                   
                  </div>
                  <p className="mt-4 ">
                    <small>
                      *These statements have not been evaluated by the Food and
                      Drug Administration. These products are not intended to
                      diagnose.
                    </small>
                  </p>
  
                  <p className="mt-5">
                    <small> © Fateha Ayra, All rights reserved.</small>
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-menu-container">
                  <ul>
                    <li className="footer-menu">Home</li>
                    <li className="footer-menu">Services</li>
                    
                    <li className="footer-menu">Contact us</li>
                    <li className="footer-menu"> About us</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="right-footer-container">
                  <h3>Sign up for the newsletter</h3>
                  <input
                    className="footer-input"
                    type="text"
                    placeholder="Enter Email"
                  />
                  <div className="phone d-flex align-items-center justify-content-center mt-4">
                   
                    <div>
                      <h5>{element}+1 8 800 555 35 35</h5>
                    </div>
                  </div>
                  <div className="map d-flex align-items-center justify-content-center">

                    </div>
                    <div>
                      <p>
                         Mirpur,dhaka,
                        <br /> Bangladesh
                      </p>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    );
};

export default Footer;