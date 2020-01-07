import React from "react";
import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";

const Testimonial = ({ testimonial }) => (
  <div className="row skill mb-5">
    <div className="col-md-5">
      <h3 className="title testimonial-title">{testimonial.author}</h3>
      <h5>{testimonial.description}</h5>
      <div>
        {testimonial.linkedin && (
          <a
            href={testimonial.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="m-2 text-secondary"
          >
            <FaLinkedin />
          </a>
        )}
        {testimonial.twitter && (
          <a
            href={testimonial.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="m-2 text-secondary"
          >
            <FaTwitter />
          </a>
        )}
        {testimonial.website && (
          <a
            href={testimonial.website}
            target="_blank"
            rel="noopener noreferrer"
            className="m-2 text-secondary"
          >
            <FaGlobe />
          </a>
        )}
      </div>
    </div>

    <div className="col-md-7">
      <p className="text-justify">{testimonial.testimonial}</p>
    </div>
  </div>
);

export default Testimonial;
