import React from 'react';
import img1 from '../../image/player-4.png'
import img2 from '../../image//player-6.png'
import img3 from '../../image/player-1.png'
import img4 from '../../image/player-2.png'
import img5 from '../../image/player-5.png'
import img6 from '../../image/player-3.png'
const Instructor = () => {
    return (
        <div className=" container p-2 mb-5">
        <h1 className="title">Intractor Information</h1>
        {/* --------------------------instractor pic added---------------- */}
        
           <div className="row row-cols-2 row-cols-md-3 g-4 m-4">
      <div className="col">
      <div className="card h-100">
      <img src={img3}className=" student card-img-top w-100" alt="..."/>
      <div className="card-body">
            <h2 className="card-title">Alex Gaby</h2>
            <h4>Assistant Professor</h4>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      </div>
      </div>
          


  <div className="col">
       <div className="card h-100">
       <img src={img1}className="card-img-top " alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Oliver</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      </div>
      </div>
          

  <div className="col">
  <div className="card h-100">
        <img src={img4}className="card-img-top rounded-circle" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Jeiray alex</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      </div>
      </div>
      <div className="col">
      <div className="card h-100">
      <img src={img2}className="card-img-top rounded-circle" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Yoyo Diban</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      </div>
      </div>
          


     <div className="col">
    <div className="card h-100">
        <img src={img5}className="card-img-top rounded-circle" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Amilia jeo</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
    </div>
  </div>
                    <div className="col">
    <div className="card h-100">
       <img src={img6}className="card-img-top rounded-circle" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Heyloo Kaise</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
};

export default Instructor;