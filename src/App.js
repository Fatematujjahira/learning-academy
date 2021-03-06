
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './component/Footer/Footer';




import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  BrowserRouter
} from "react-router-dom";
import Home from './component/Home/Home';
import Service from './component/Service/Service';
import About from './component/About/About';
import Instructor from './component/Instructor/Instructor';
import Error from './component/Error/Error';
import NavBar from './component/NavBar/NavBar';

function App()
{
  
  return (
    <div className="app">
     
      <Router>
       <NavBar></NavBar>
        <Switch>
          
          <Route exact path ="/">
          <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/service">
          <Service></Service>
          </Route>
          <Route path="/about">
          <About></About>
           
          </Route>
          <Route path="/instructor">
          <Instructor></Instructor>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      
   </div>
  );
}

export default App;
