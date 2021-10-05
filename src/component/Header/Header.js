import React from 'react';
import './Header.css'
import "animate.css"
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-title">
        <h1 className="animate__animated animate__slideInLeft ">Learning never exhausts the mind.</h1>
        <p className="animate__animated animate__slideInRight mt-5">Education is the process of facilitating learning,<br /> or the acquisition of knowledge, skills, values, morals, beliefs, and habits. <br />... Education can take place in formal or informal settings, and any experience that has a <br /> formative effect on the way one thinks, feels, or acts may be considered educational.</p>
     </div>
    </div>
  );
};

export default Header;