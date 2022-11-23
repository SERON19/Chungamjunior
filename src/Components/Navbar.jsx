import { NavLink } from "react-router-dom";
import logo from '../images/logo2.jpeg';

import React from 'react'

export default function Navbar() {
  return (
        <nav className="navbar" >
          <img className="logo"  src={logo} alt="logo"/>
        <h1>Chunga Mjunior</h1>
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/services">Our Services</NavLink>
          <NavLink to="/portal">Portal</NavLink>
          {/* <NavLink to="/advocates">Advocates</NavLink>
          <NavLink to="/guardian">Guardian</NavLink> */}
        </nav>
  )
}