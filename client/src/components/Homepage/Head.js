import React from "react";
import { Link } from "react-router-dom";

const Head = () => (
  <div className="head mb-5">
    <div className="container">
      <div className="head-text">
        <h1 className="head-title">
          Hi. My name is <span className="head-name">Ahmed Ben Gayess</span>.
        </h1>
        <h1 className="head-title">I'm a Full-Stack Web Developer.</h1>
        <h5 className="mb-5 head-description">
          I can build websites and Full-Stack web applications from start to
          finish for your specific needs.
        </h5>
        <div className="text-center">
          <Link to="/portfolio" className="button-link">
            CHECK MY WORK
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Head;
