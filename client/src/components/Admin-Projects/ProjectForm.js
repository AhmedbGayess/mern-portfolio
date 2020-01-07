import React from "react";
import FormInputField from "../Common/FormInputField";

const ProjectForm = ({ onChange, name, description, liveDemo, repo }) => (
  <div>
    <FormInputField
      label="Name"
      name="name"
      placeholder="Your project's name"
      onChange={onChange}
      value={name}
    />
    <FormInputField
      label="Description"
      name="description"
      placeholder="The description of your post"
      onChange={onChange}
      value={description}
    />
    <FormInputField
      label="Live Demo"
      name="liveDemo"
      placeholder="Link to a live demo"
      onChange={onChange}
      value={liveDemo}
    />
    <FormInputField
      label="Repository"
      name="repo"
      placeholder="Link to a repository"
      onChange={onChange}
      value={repo}
    />
  </div>
);

export default ProjectForm;
