import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const PostAuthor = () => (
  <div className="container p-5 mb-5 mt-5 border rounded shadow">
    <div className="row d-flex align-items-center">
      <div className="col-md-4">
        <img
          src={require("../../images/ahmed.jpg")}
          className="img-fluid mb-3 rounded-circle"
          alt="Ahmed Ben Gayess"
        />
        <div className="mx-auto text-center mb-4">
          <a
            href="https://www.linkedin.com/in/ahmed-bengayess-b69b55172/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 d-inline-block text-secondary"
          >
            <FaLinkedin className="text-dark" />
          </a>
          <a
            href="https://github.com/AhmedbGayess"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 d-inline-block text-secondary"
          >
            <FaGithub className="text-dark" />
          </a>
          <a
            href="https://twitter.com/ahmedbgayess"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 d-inline-block text-secondary"
          >
            <FaTwitter className="text-dark" />
          </a>
        </div>
      </div>
      <div className="col-md-8 description">
        <p className="author-text text-justify">
          My name is Ahmed Ben Gayess and I'm a a self-taught Full-Stack Web
          Developer. I'm very passionnate about what I do and I'm always up for
          a challenge. Want to build something amazing together?{" "}
          <Link to="/contact" className="text-success">
            Let's get in touch.
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default PostAuthor;
