import React from "react";
import HomeCard from "./HomeCard";

const Services = () => {
  const cardOne =
    "I can build fast responsive websites and user interfaces for web apps.";
  const cardTwo = "I can buid backend APIs and work with databases.";
  const cardThree =
    "I can build mobile applications for both Android and iOS using React Native.";
  return (
    <div className="container home-cards-container">
      <h2 className="home-title">My Services</h2>
      <HomeCard title="Frontend Web Development" text={cardOne} />
      <HomeCard title="Backend Web Development" text={cardTwo} />
      <HomeCard title="Mobile App Development" text={cardThree} />
    </div>
  );
};

export default Services;
