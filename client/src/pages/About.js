import React from "react";
import TestimonialsList from "../components/About/TestimonialsList";

const AboutPage = () => (
  <div className="container">
    <h1 className="mb-5 title page-title">ABOUT ME</h1>
    <p className="about-me mb-5">
      After spending two years in law school, I didn't want to spend my life
      doing something I dont like, and that's why I decided to dropout. I later
      found something I fell in love with, coding. I taught myself coding and
      I'm so passionate about it that it took me less than a year to become a
      Full-Stack developer, so it's safe to say that I'm a fast learner. Being
      self-taught, I learned to be disciplined and determined. It also proves
      that I'm always ready to upgrade my skills and learn something new.
      Teamwork is also one of my strengths and collaborating on projects is
      always exciting to me. I speak 3 languages: Arabic, French and English,
      which is helpful to communicate with various and diverse clients.
    </p>
    <TestimonialsList />
  </div>
);

export default AboutPage;
