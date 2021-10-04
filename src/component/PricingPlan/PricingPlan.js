import React from 'react';
import './PricingPlan.css'
const PricingPlan = () => {
    return (
        <div className="pricingPlan mt-5 mb-5 p-4">
            <h1>Pricing plans</h1>
           
            <div className="">
            <div class="row m-2 mx-auto ">
                    
                    <div class="col-md-4 ">
                      <div class="card">
                        <div class="card-body">
                          <h2 class="card-title">Basic Plan</h2>
                           <h2>$40</h2>
                             <p>PER MONTH</p>                 
                          <ul>
                             <li>Basic Marketing Course</li>
                             <li>Business English</li>
                             <li>Learn Design Principles</li> 
                          <li>Financial Modeling</li>          
                          </ul>
                          <button type="button" class="btn btn-primary m-2 p-2">PURCHASE</button>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <div class="card-body">
                          <h2 class="card-title">Professional</h2>
                           <h2>$66</h2>
                             <p>PER MONTH</p>                 
                          <ul>
                             <li>Basic Marketing Course</li>
                             <li>Business English</li>
                             <li>Learn Design Principles</li> 
                          <li>Financial Modeling</li>          
                          </ul>
                          <button type="button" class="btn btn-primary m-2 p-2">PURCHASE</button>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <div class="card-body">
                          <h2 class="card-title">Exclusive</h2>
                           <h2>$102</h2>
                             <p>PER MONTH</p>                 
                          <ul>
                             <li>Basic Marketing Course</li>
                             <li>Business English</li>
                             <li>Learn Design Principles</li> 
                          <li>Financial Modeling</li>          
                          </ul>
                          <button type="button" class="btn btn-primary m-2 p-2">PURCHASE</button>
                        </div>
                      </div>
                    </div>
                    
                  </div> 
          </div>
            </div>
     
    );
};

export default PricingPlan;