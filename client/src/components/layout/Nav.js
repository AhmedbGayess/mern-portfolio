import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ onOpen }) => (
  <nav className="navbar mb-5">
    <ul className="navlist">
      <li className="navlist-item">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </li>
      <li className="navlist-item">
        <NavLink to="/about" className="nav-link">
          About Me
        </NavLink>
      </li>
      <li className="navlist-item">
        <NavLink to="/portfolio" className="nav-link">
          Portfolio
        </NavLink>
      </li>
      <li className="navlist-item">
        <NavLink to="/blog" className="nav-link">
          Blog
        </NavLink>
      </li>
      <li className="navlist-item">
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </li>
    </ul>
    <div className="nav-menu-button" onClick={onOpen}>
      <div className="hamburger" />
      <div className="hamburger" />
      <div className="hamburger" />
    </div>
  </nav>
);

export default Nav;
