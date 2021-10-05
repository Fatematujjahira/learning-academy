import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhoneSquareAlt, } from '@fortawesome/free-solid-svg-icons';

import {  NavLink } from 'react-router-dom';

const Footer = () =>
{
    const element = <FontAwesomeIcon icon={faPhoneSquareAlt} />
    return (
        <div>
        <div className="footer-container mt-5">
          <div className="container">
            <div className=" footer row">
              <div className="col-md-5">
                <div className="left-container text-start">
                  <h1>Fataha Jeswa Academy</h1>
                  <div className="icons-container d-flex text-center ">
                   
                  </div>
                  <p className="mt-4 ">
                    <small>
                     ****Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dignissimos voluptatum cumque molestiae incidunt placeat.
                    </small>
                  </p>
  
                  <p className="mt-5">
                    <small> © Fateha Ayra,2021 All rights reserved.</small>
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-menu-container">
                  <div className="">
  {/* -------------------navbarlink added-------------- */}
                    <ul>
                      <li>
                    <NavLink
        className="items"
        to="/home"
      >Home</NavLink></li>
      <li>
      <NavLink
         className="items"
         to="/service"
         >Service</NavLink>
      </li>
      <li><NavLink
         className="items"
         to="/about"
      >About Us</NavLink></li>
      <li><NavLink
        className="items"
        to="/instructor"
      >Instructor</NavLink>
      </li>
     </ul>
     </div>
       <div className="d-flex mt-4">
       <div className="m-2">
      <h3><i class="fab fa-facebook-square"></i></h3>
      </div>
      <div className="m-2">
      <h3><i class="fab fa-instagram"></i></h3>
      </div>
      <div className="m-2">
      <h3><i class="fab fa-linkedin"></i></h3>
      </div>
      <div className="m-2">
      <h3><i class="fab fa-youtube"></i></h3>
      </div>
      </div>
              
                  
     </div>
     </div>
              <div className="col-md-5">
                <div className="right-footer-container">
                  <h3>Sign up for the next comming course</h3>
                  <input
                    className="footer-input"
                    type="text"
                    placeholder="Enter Email"
                  />
                  <div className="phone d-flex align-items-center justify-content-center mt-4">
                   
                    <div>
                      <h5>{element}+1 8 800 555 44 55</h5>
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