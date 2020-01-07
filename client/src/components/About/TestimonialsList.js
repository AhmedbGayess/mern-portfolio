import React from "react";
import Testimonial from "./Testimonial";

const TestimonialsList = () => {
  const testimonials = [
    {
      author: "Amenallah Hsoumi",
      description: "Full-Stack Web Developer",
      testimonial:
        "I've known Ahmed since the beginning of 2018 when he just started learning to code, and he was capable of learning programming and web development form scratch in less than a year. He's a proactive self-taught developer capable of building fully functioning web apps. I since then collaborated with him on some projects and I still plan on collaborating with him in the future.",
      linkedin: "https://www.linkedin.com/in/amenallah-hsoumi/",
      twitter: "https://twitter.com/LazyFatArrow",
      instagram: "",
      website: "http://www.amenallah.com"
    },
    {
      author: "Melissa Ortiz",
      description: "Full-Stack Web Developer",
      testimonial:
        "I’ve known Ahmed since early 2018 and in that time, he has shown tremendous growth in his technical and communication skills. He has proven his willingness to learn new technologies and stay flexible depending on the requirements for the client. He is great at researching and implementing best practices and stays up to date with updates in the industry. He takes direction well and is easy to work with. I highly recommend Ahmed for your next project.",
      linkedin: "https://www.linkedin.com/in/melissa-ortiz/",
      twitter: "https://twitter.com/thetechielatina",
      instagram: "",
      website: ""
    },
    {
      author: "Alejandro Sierra",
      description: "Front-End Web Developer",
      testimonial:
        "Ahmed is one of the most professional people that i know. He has helped me when i needed help the most. His knowledge of web development and willingness to learn and improve new things is what sets him apart. Living in the U.S i needed someone with knowledge of React.js to help with a project. He responds quick to answer questions and help out. He uses best industry practices on all the technologies that he knows. Ahmed is definitely the person to go to with Web development practices",
      website: "http://www.minimalmvnt.com/"
    }
  ];
  const testimonialsList = testimonials.map((testimonial, i) => (
    <Testimonial key={i} testimonial={testimonial} />
  ));
  return (
    <div>
      <h1 className="mb-5 title page-title">TESTIMONIALS</h1>
      {testimonialsList}
    </div>
  );
};

export default TestimonialsList;
