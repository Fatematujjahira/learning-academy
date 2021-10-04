import React from 'react';
import Courses from '../Courses/Courses';
import Header from '../Header/Header';
import PricingPlan from '../PricingPlan/PricingPlan';



const Home = () => {
    return (
        <div>
             <Header></Header>
            <Courses></Courses>
            <PricingPlan></PricingPlan>
            
        </div>
    );
};

export default Home;