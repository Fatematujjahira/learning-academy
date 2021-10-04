import React from 'react';
import './About.css'


const About = () => {
    return (
        <div className="container">
            <div className="main  p-5  m-3">
          <h1 className="title">ABOUT US</h1>
          <div className="row row-cols-1 row-cols-md-2 g-4 m-4">
                <div className=" about  ">
                  <img className="image  m-4 h w-100 " src={'https://thumbs.dreamstime.com/b/rear-view-young-woman-working-laptop-inscription-screen-e-learning-image-square-academic-cap-girl-student-112505061.jpg'} alt="" />  
              <div className="px-3 mb-5">
              <h1>E-LEARNING</h1>
            <h5>About : Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque vero, deleniti temporibus laudantium deserunt!</h5>
            <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sequi accusamus accusantium. Error voluptate blanditiis molestias ea beatae iusto, debitis dolor. Aliquid possimus consequuntur in aut laudantium? Fugiat nam ut quaerat officiis. Aut quam sed dolores, maiores debitis dignissimos .</p>
             </div>
            </div>
               
           </div><br />
                
       <h1 className="title">Student Review</h1>
     <div className="row row-cols-1 row-cols-md-4 g-4 m-4">
      <div className="col">
      <div className="card h-100">
      <img src={'https://media.istockphoto.com/vectors/girl-studying-online-education-at-home-cartoon-vector-illustration-vector-id1280282619?k=20&m=1280282619&s=170667a&w=0&h=UUWsXOHC_TWd871US_Dmu4P33aGgO7KCn7sFREdqbQA='}className=" student card-img-top rounded-circle" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Fateha Ayra</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={'https://media.istockphoto.com/vectors/girl-studying-online-education-at-home-cartoon-vector-illustration-vector-id1280282619?k=20&m=1280282619&s=170667a&w=0&h=UUWsXOHC_TWd871US_Dmu4P33aGgO7KCn7sFREdqbQA='}className="card-img-top rounded-circle" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Sckech</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={'https://media.istockphoto.com/vectors/girl-studying-online-education-at-home-cartoon-vector-illustration-vector-id1280282619?k=20&m=1280282619&s=170667a&w=0&h=UUWsXOHC_TWd871US_Dmu4P33aGgO7KCn7sFREdqbQA='}className="card-img-top rounded-circle" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Sckech</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
                    </div>
                    <div className="col">
    <div className="card h-100">
      <img src={'https://media.istockphoto.com/vectors/girl-studying-online-education-at-home-cartoon-vector-illustration-vector-id1280282619?k=20&m=1280282619&s=170667a&w=0&h=UUWsXOHC_TWd871US_Dmu4P33aGgO7KCn7sFREdqbQA='}className="card-img-top rounded-circle" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Sckech</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  </div>
            </div>
        </div>
    );
};

export default About;