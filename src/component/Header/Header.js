import React from 'react';
// import NavBar from '../../NavBar/NavBar';
import './Header.css'

const Header = () => {
    return (

        
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active" data-bs-interval="10000">
                    <img src={ 'https://image.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg' } class=" slider d-block w-100 " alt="..." />
                    <div class="carousel-caption d-none d-md-block">
        <h1>Learning never exhausts the mind.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, quidem.</p>
                        <button className="button">REGISTERNOW</button>
      </div>
  </div>
  <div class="carousel-item" data-bs-interval="2000">
    <img src={'https://image.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg'} class="d-block w-100" alt="..."/>
  </div>
  <div class="carousel-item">
    <img src={'https://image.freepik.com/free-photo/portrait-pretty-girl-with-bun-denim-jacket-white-t-shirt-with-gentle-smile-pink-bites-fingers-looking-aside_176532-13860.jpg'} class="d-block w-100" alt="..."/>
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>
    );
};

export default Header;