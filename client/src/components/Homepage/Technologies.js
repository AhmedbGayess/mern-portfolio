import React from "react";
import TechnologiesCard from "./TechnologiesCard";

const Technologies = () => {
  const frontendTechs = [
    "HTML",
    "CSS",
    "Sass",
    "Bootstrap",
    "Vanilla JavaScript",
    "React",
    "Redux"
  ];
  const backendTechs = ["Node.JS", "Express", "MongoDB", "Firebase"];
  const mobileTechs = ["React Native"];
  return (
    <div className="container">
      <h2 className="home-title mb-4">Technologies</h2>
      <div className="row">
        <div className="col-lg 4">
          <TechnologiesCard
            title="Frontend Development"
            techs={frontendTechs}
          />
        </div>
        <div className="col-lg 4">
          <TechnologiesCard title="Backend Development" techs={backendTechs} />
        </div>
        <div className="col-lg 4">
          <TechnologiesCard
            title="Mobile App Development"
            techs={mobileTechs}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
