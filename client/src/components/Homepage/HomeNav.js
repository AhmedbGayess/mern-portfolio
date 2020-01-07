import React from "react";
import { NavLink } from "react-router-dom";

const HomeNav = ({ onOpenMobileNav }) => (
  <div>
    <ul className="home-navlist">
      <li className="home-navlist-item">
        <NavLink to="/" className="home-nav-link">
          Home
        </NavLink>
      </li>
      <li className="home-navlist-item">
        <NavLink to="/about" className="home-nav-link">
          About Me
        </NavLink>
      </li>
      <li className="home-navlist-item">
        <NavLink to="/portfolio" className="home-nav-link">
          Portfolio
        </NavLink>
      </li>
      <li className="home-navlist-item">
        <NavLink to="/blog" className="home-nav-link">
          Blog
        </NavLink>
      </li>
      <li className="home-navlist-item">
        <NavLink to="/contact" className="home-nav-link">
          Contact
        </NavLink>
      </li>
    </ul>
    <div className="menu-button" onClick={onOpenMobileNav}>
      <div className="hamburger" />
      <div className="hamburger" />
      <div className="hamburger" />
    </div>
  </div>
);

export default HomeNav;
