import React from "react";

const AdminProject = ({ project }) => (
  <div className="col-xs">
    <div
      className="border text-center m-3"
      style={{ height: "400px", width: "350px" }}
    >
      <div style={{ height: "250px" }} className="d-flex align-items-center">
        <img
          src={`/images/${project.images[0]}`}
          className="p-2 img-fluid m-auto"
          style={{ maxHeight: "200px", maxWidth: "200px" }}
        />
      </div>
      <div className="p-2">
        <h5 className="m-2 text-dark">{project.name}</h5>
        <p className="text-muted">{project.description}</p>
      </div>
    </div>
  </div>
);

export default AdminProject;
