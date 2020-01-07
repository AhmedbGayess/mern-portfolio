import React from "react";

const Delete = ({ deleteItem, name }) => (
  <div className="border p-5 m-5 text-center">
    <h5 className="text-danger mb-3">Danger Zone</h5>
    <p className="mb-3">This {name} will be deleted permanently</p>
    <button className="btn btn-danger" onClick={deleteItem}>
      Delete
    </button>
  </div>
);

export default Delete;
