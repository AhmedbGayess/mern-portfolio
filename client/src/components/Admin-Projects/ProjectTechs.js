import React from "react";

const ProjectTechs = ({ onChange, onRemove, technologies }) => {
  const techs = technologies.map((tech, i) => (
    <button
      key={i}
      className="btn btn-outline-danger m-2"
      value={tech}
      onClick={onRemove}
    >
      {tech}
    </button>
  ));

  const options = [
    "HTML",
    "CSS",
    "Sass",
    "Bootstrap",
    "React",
    "Redux",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "React Native"
  ];

  const choices = options.map((choice) => (
    <option key={choice} value={choice}>
      {choice}
    </option>
  ));

  return (
    <div className="mb-5">
      <label>Technologies Used</label>
      <select className="form-control" onChange={onChange}>
        <option />
        {choices}
      </select>
      <div className="mt-3">{techs}</div>
    </div>
  );
};

export default ProjectTechs;
