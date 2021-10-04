import React from 'react';
// import NavBar from '../../NavBar/NavBar';
import './Header.css'

const Header = () => {
    return (

        
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-inner">
  <div className="carousel-item active" data-bs-interval="10000">
                    <img src={ 'https://image.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg' } className=" slider d-block w-100 " alt="..." />
                    <div className="carousel-caption d-none d-md-block">
        <h1>Learning never exhausts the mind.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, quidem.</p>
                        <button className="button">REGISTERNOW</button>
      </div>
  </div>
  <div className="carousel-item" data-bs-interval="2000">
    <img src={'https://image.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg'} className="d-block w-100" alt="..."/>
  </div>
  <div className="carousel-item">
    <img src={'https://image.freepik.com/free-photo/portrait-pretty-girl-with-bun-denim-jacket-white-t-shirt-with-gentle-smile-pink-bites-fingers-looking-aside_176532-13860.jpg'} className="d-block w-100" alt="..."/>
  </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>
    );
};

export default Header;