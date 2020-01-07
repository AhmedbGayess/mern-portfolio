import React from "react";
import { Link } from "react-router-dom";

const HomeContact = () => (
  <div className="home-contact">
    <div className="container">
      <h2 className="home-contact-title">
        LET'S CREATE SOMETHING GREAT TOGETHER
      </h2>
      <p className="mb-4">
        If you have a cool project to work on, let's work together and make it
        real.
      </p>
      <div>
        <Link to="/contact" className="button-link">
          GET IN TOUCH
        </Link>
      </div>
    </div>
  </div>
);

export default HomeContact;
