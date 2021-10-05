import React from 'react';
import './Service.css'
import { Button, Carousel } from 'react-bootstrap';
import Inspiratiob from '../Inspiration/Inspiratiob';
import img3 from'../../image/f1.jpg'
import img2 from'../../image/f5.jpg'
import img1 from '../../image/a1.jpg'
import "animate.css"
const Service = () => {
  return (
      
    <div className="container mb-4 p-2">
      <Carousel fade>
  <Carousel.Item className="carousel-container">
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      <Button className="p-3 m-2" variant="outline-danger">REGISTER NOW
      </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carousel-container">
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       <Button className="p-3 m-2" variant="outline-danger">REGISTER NOW
      </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carousel-container">
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      <Button className="p-3 m-2" variant="outline-danger">REGISTER NOW
      </Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      <div className="service">
        
                <h1 className="animate__animated animate__slideInLeft title m-5">What We Do</h1>
            <div className="row">
 
  <div className="col-sm-6 mt-5">
      
 <div className="">
   <img className="service-img w-100" src={'https://as1.ftcdn.net/v2/jpg/02/13/82/62/500_F_213826245_YDGakRFaMESU4Eb8Rxk29vPi6RVWePh3.jpg'} alt="" />
   </div>

     </div>
     <div className="col-sm-6 mt-5">
    <h1>What we are taught</h1>
       
    <div className="card mt-3">
      <div className="card-body">
 
        <h5 className="card-title">Business English</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
       
      </div>
    </div><br />
    <div className="card ">
      <div className="card-body">
        <h5 className="card-title">Web Designing</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
       
      </div>
    </div><br />
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Financial Modeling</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
       
      </div>
    </div><br />
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Academic English
        Deve Robbins</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
       
      </div>
    </div>
  </div>
</div>
        </div>
        <div className="cataguries p-5 mt-5 ">
          <h1>Learning Possibilities</h1>
          <p className="mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet mollitia ducimus, illo numquam officiis architecto quasi pariatur perferendis delectus doloremque et saepe facilis, incidunt sed iure minus. Perferendis, sunt culpa!</p>
          <ul>
            <li><h5>
              We enrich lives through learning.
            </h5></li>
            <li><h5>
              Maximizing potential through individual attention
            </h5></li>
            <li><h5>
              The trusted name for specialized training
            </h5></li>
            <li><h5>
              People teach. People learn. This is where they connect.
            </h5></li>
            <li><h5>Together we create a loving community</h5></li>
            
          </ul>
        </div>
        <div className=" p-4 m-4">
        <Inspiratiob></Inspiratiob> 
        </div>
        </div>
    );
};

export default Service;