import React from 'react';
import './PricingPlan.css'
const PricingPlan = () => {
    return (
        <div className="pricingPlan mt-5 p-2">
            <h1 className="title m-4">Pricing <span className="color">plan</span> </h1>
           
            <div className="">
            <div className="row m-2 mx-auto ">
                    
                    <div className="col-md-4 ">
                      <div className="cardstyle">
                        <div className="card-body">
                          <h2 className="card-title">Basic Plan</h2>
                           <h2>$40</h2>
                             <p>PER MONTH</p>                 
                          <ul>
                             <li>Basic Marketing Course</li>
                             <li>Business English</li>
                             <li>Learn Design Principles</li> 
                          <li>Financial Modeling</li>          
                          </ul>
                          <button type="button" className="btn btn-primary m-2 p-2">PURCHASE</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="cardstyle">
                        <div className="card-body">
                          <h2 className="card-title">Professional</h2>
                           <h2>$66</h2>
                             <p>PER MONTH</p>                 
                          <ul>
                             <li>Basic Marketing Course</li>
                             <li>Business English</li>
                             <li>Learn Design Principles</li> 
                          <li>Financial Modeling</li>          
                          </ul>
                          <button type="button" className="btn btn-primary m-2 p-2">PURCHASE</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="cardstyle">
                        <div className="card-body">
                          <h2 className="card-title">Exclusive</h2>
                           <h2>$102</h2>
                             <p>PER MONTH</p>                 
                          <ul>
                             <li>Basic Marketing Course</li>
                             <li>Business English</li>
                             <li>Learn Design Principles</li> 
                          <li>Financial Modeling</li>          
                          </ul>
                          <button type="button" className="btn btn-primary m-2 p-2">PURCHASE</button>
                        </div>
                      </div>
                    </div>
                    
                  </div> 
          </div>
            </div>
     
    );
};

export default PricingPlan;