import React from "react";
import { FaLaptopCode, FaServer } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";

const HomeCard = ({ title, text }) => {
  let cssClass;
  let icon;
  if (title.includes("Frontend")) {
    cssClass = "home-card-1";
    icon = <FaLaptopCode className="home-card-icon" />;
  } else if (title.includes("Backend")) {
    cssClass = "home-card-2";
    icon = <FaServer className="home-card-icon" />;
  } else if (title.includes("Mobile")) {
    cssClass = "home-card-3";
    icon = <IoIosPhonePortrait className="home-card-icon" />;
  }
  return (
    <div className={`home-card ${cssClass} shadow`}>
      <h4 className="text-center mb-4">{title}</h4>
      <div className="text-center mb-3">{icon}</div>
      <p className="text-center">{text}</p>
    </div>
  );
};

export default HomeCard;
