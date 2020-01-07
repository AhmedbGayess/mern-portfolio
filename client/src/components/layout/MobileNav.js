import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = ({ onClose, open }) => (
  <div className={open ? "mobile-nav" : "mobile-nav-closed"}>
    <div className="close" onClick={onClose} />
    <ul className="mobile-navlist">
      <li className="mobile-navlist-item">
        <NavLink to="/" className="mobile-nav-link" onClick={onClose}>
          Home
        </NavLink>
      </li>
      <li className="mobile-navlist-item">
        <NavLink to="/about" className="mobile-nav-link" onClick={onClose}>
          About Me
        </NavLink>
      </li>
      <li className="mobile-navlist-item">
        <NavLink to="/portfolio" className="mobile-nav-link" onClick={onClose}>
          Portfolio
        </NavLink>
      </li>
      <li className="mobile-navlist-item">
        <NavLink to="/blog" className="mobile-nav-link" onClick={onClose}>
          Blog
        </NavLink>
      </li>
      <li className="mobile-navlist-item">
        <NavLink to="/contact" className="mobile-nav-link" onClick={onClose}>
          Contact
        </NavLink>
      </li>
    </ul>
  </div>
);

export default MobileNav;
