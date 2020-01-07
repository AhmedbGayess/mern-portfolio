import React from "react";

const FormInputField = ({
  name,
  label,
  value,
  placeholder,
  onChange,
  type,
  error
}) => (
  <div className="from group mb-3">
    <label htmlFor="name">{label}</label>
    <input
      id={name}
      type={type ? type : "text"}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows="10"
      className="form-control"
    />
    {error && <div className="small text-danger mt-2 ml-2">{error}</div>}
  </div>
);

export default FormInputField;
