import React from "react";

const FormTextArea = ({ name, label, value, onChange, error }) => (
  <div className="from group mb-3">
    <label htmlFor={name}>{label}</label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="form-control"
      rows={10}
    />
    {error && <div className="small text-danger mt-2 ml-2">{error}</div>}
  </div>
);

export default FormTextArea;
