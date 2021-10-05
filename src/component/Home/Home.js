import React from 'react';
import Courses from '../Courses/Courses';
import Header from '../Header/Header';
import Inspiratiob from '../Inspiration/Inspiratiob';
// import PricingPlan from '../PricingPlan/PricingPlan';



const Home = () => {
    return (
        <div>
             <Header></Header>
            <Courses></Courses>
           <Inspiratiob></Inspiratiob>
        </div>
    );
};

export default Home;