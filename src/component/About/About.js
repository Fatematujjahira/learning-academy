import React from 'react';
import Star from '../../Star/Star';
import './About.css'




const About = () =>
{
  
  
    return (
        <div className="container">
            <div className="main  p-5  m-3">
          <h1 className="title"> ABOUT OUR COURSE <i class="fas fa-graduation-cap"></i> </h1>
  {/* -----------------------course details added-------------------- */}
              <div className=" about mt-4 ">                 
              <div className=" aboutt-detail px-3 mb-5">
              <h1 className="text-warning p-2 mt-2">E-LEARNING SITE</h1>
            <h5 className="about-text mt-4">About : Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque vero, deleniti temporibus laudantium deserunt!</h5>
              <p className="about-text mt-5">Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat iure esse ipsum. Harum consectetur, qui itaque maxime eaque error nihil voluptates. Accusantium culpa aliquam repellat error. Aspernatur quae eveniet officiis, architecto atque, reprehenderit iste cum nesciunt hic provident iusto ut, adipisci fuga tempore? Totam dolore dolorum ullam reprehenderit impedit delectus. Quam repellat corrupti quae dolorum! Magni veritatis voluptatem officiis aperiam sint quae ut aspernatur voluptate debitis corporis. Vitae, sunt corrupti? Eveniet eligendi tenetur pariatur ex culpa, blanditiis unde odit rerum?</p>
              
              <h3 className="text-warning">"Education is your door to the future"</h3>
             </div>
            </div>
               
           </div><br />
  {/*----------------student review  start----------------- */}
       <h1 className="title">Student Review <i class="fas fa-user-graduate"></i></h1>
      <div className="row row-cols-1 row-cols-md-4 g-4 m-4">
          

  {/* ----------------student pic added ----------------*/}

      <div className="col">
      <div className="card h-100">
      <img src={'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg'}className=" student card-img-top rounded-circle" alt="..."/>
      <div className="card-body">
                <h5 className="card-title">Fateha Ayra</h5>
                <Star></Star>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       </div>
       </div>
       </div>
          
         

      <div className="col">   
      <div className="card h-100">
      <img src={'https://lh3.googleusercontent.com/ogw/ADea4I4ynicelZJdNrwDhh9g0vnVfRxemphXwllWNJRw=s83-c-mo'}className="card-img-top rounded-circle" alt="..."/>
      <div className="card-body">
                <h5 className="card-title">Farin</h5>
               <Star></Star>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      </div>
      </div>
          

    <div className="col">
    <div className="card h-100">
      <img src={'https://media-exp1.licdn.com/dms/image/C4D03AQGOQUXQlWwzYg/profile-displayphoto-shrink_200_200/0/1632237934324?e=1639008000&v=beta&t=dPgwkJlM8zBEJi1P8PFJYNnZRuegoH3bp8OSt5ql1OE'}className="card-img-top rounded-circle" alt="..."/>
      <div className="card-body">
                <h5 className="card-title">Faiza</h5>
                <Star></Star>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      </div>
      </div>
          


    <div className="col">
    <div className="card h-100">
      <img src={'https://avatars.githubusercontent.com/u/86653907?v=4'}className="card-img-top rounded-circle" alt="..."/>
      <div className="card-body">
                <h5 className="card-title">Jahira</h5>
                <Star></Star>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    </div>
    </div>
    </div>
       
    );
};

export default About;