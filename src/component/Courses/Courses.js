import React, { useEffect, useState } from 'react';
import PricingPlan from '../PricingPlan/PricingPlan';
import './Courses.css';
const Courses = () =>{
  const [courses, setCourses] = useState([]);
 
 

  useEffect(() => {
    fetch(
     './course.JSON'
    )
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
    
    console.log(courses);
  return (
    <div className="container all-teams">
      <div className="all-team">
        <h1 className="title">Popular Online Courses</h1>
      </div>
      <div className="search-team">
        <input className="p-2 m-2" type="text" placeholder="choose your course"/>{" "}
        <button className="btn p-2 btn-danger">Search</button>
      </div>
      <div className="teams">
        <div className="row">
          {courses?.map((courses) => (
            <div className="col-md-4">
              <div className="cart m-2 p-2">
                <div className="cart-details">
                  <img className=" image w-100" src={courses.img} alt="" />
                </div>
                <div className="text-area">
                  <h4>{courses.title}</h4>
                  <p>{courses.name}</p>
                 
                  <p>{courses.description}</p>
                  <h5>{courses.type}</h5>
                    <button className="btn btn-success">Details</button>
              
                </div>
              </div>
            </div>
          ))}
        </div>
          </div>
          {/* <div className=" plan p-5 mt-5"> */}
          <PricingPlan></PricingPlan>
         {/* </div> */}
      </div>
      
     
  );
};



export default Courses;