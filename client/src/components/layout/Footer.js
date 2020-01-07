import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => (
  <div className="p-3 footer">
    <div className="container">
      <div className="mx-auto text-center mb-4">
        <Link to="/about" className="mx-3 nav-link d-inline-block text-light">
          About Me
        </Link>
        <Link to="/contact" className="mx-3 nav-link d-inline-block text-light">
          Contact Me
        </Link>
      </div>
      <div className="mx-auto text-center mb-4">
        <a
          href="https://www.linkedin.com/in/ahmed-bengayess-b69b55172/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 d-inline-block text-white footer-icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AhmedbGayess"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 d-inline-block text-white footer-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/ahmedbgayess"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 d-inline-block text-white footer-icon"
        >
          <FaTwitter />
        </a>
      </div>
      <p className="text-center">
        <a
          className=" text-muted small"
          href="http://www.freepik.com"
          rel="noopener noreferrer"
        >
          Contact page art designed by rawpixel.com / Freepik
        </a>
      </p>
      <p className="text-center text-white small">
        © Copyright 2019 — Ahmed Ben Gayess
      </p>
    </div>
  </div>
);

export default Footer;
