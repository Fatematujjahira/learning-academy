import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navber">
     
      <NavLink
        activeStyle={ {
        fontWeight: "semi-bold",
        color: "red"
        } }className="items"
        to="/home"
      >Home</NavLink>
      <NavLink
        activeStyle={ {
        fontWeight: "semi-bold",
        color: "red"
        } } className="items"
        to="/service"
        >Service</NavLink>
      <NavLink
        activeStyle={ {
        fontWeight: "semi-bold",
        color: "red"
        } }className="items"
        to="/about"
      >About Us</NavLink>
      <NavLink
        activeStyle={ {
        fontWeight: "semi-bold",
        color: "red"
        } }className="items"
        to="/instructor"
      >Instructor</NavLink>
    </nav>
  );
};

export default NavBar;