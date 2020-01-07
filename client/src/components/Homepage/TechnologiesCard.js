import React from "react";

const TechnologiesCard = ({ title, techs }) => {
  const list = techs.map((tech, i) => <li key={i}>{tech}</li>);
  return (
    <div className="border rounded p-1 shadow tech-card">
      <h5 className="tech-title">{title}</h5>
      <ul>{list}</ul>
    </div>
  );
};

export default TechnologiesCard;
