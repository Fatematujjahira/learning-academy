import React from 'react';
import Courses from '../Courses/Courses';
import Header from '../Header/Header';
import PricingPlan from '../PricingPlan/PricingPlan';
import Service from '../Service/Service';


const Home = () => {
    return (
        <div>
             <Header></Header>
            <Courses></Courses>
            <PricingPlan></PricingPlan>
            <Service></Service>
        </div>
    );
};

export default Home;