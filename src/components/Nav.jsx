import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
  return (
    <nav className="nav-container">
      <ul>
        <li className="about-me">
          <NavLink to="/" className="nav-link">About Me</NavLink>
        </li>
        <li className="project">
          <NavLink to="/project" className="nav-link">Project</NavLink>
        </li>
        <li className="contact">
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
