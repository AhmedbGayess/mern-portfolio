import React from "react";
import Gallery from "./Gallery";

const Project = ({ project }) => {
  const techs = project.technologies.map((tech, i) => (
    <span key={i} className="badge badge-secondary m-1">
      {tech}
    </span>
  ));
  return (
    <div className="m-5 project">
      <div className="text-center mb-3">
        <h3 className="project-title">{project.name}</h3>
        <p className="project-description">{project.description}</p>
        {techs}
      </div>
      <div>
        <Gallery images={project.images} />
      </div>
      <div className="text-center">
        {project.repo && (
          <a
            className="project-button button-link"
            href={project.repo}
            rel="noopener noreferrer"
            target="_blank"
          >
            REPOSITORY
          </a>
        )}
        {project.liveDemo && (
          <a
            className="project-button button-link"
            href={project.liveDemo}
            rel="noopener noreferrer"
            target="_blank"
          >
            SEE LIVE
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
