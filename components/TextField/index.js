import React from "react";
import "./styles.css";

const TextField = ({ placeholder, onChange, name }) => {
  return (
    <div className="input-container w-full">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        aria-labelledby={`label-${name}`}
        className="bg-white dark:bg-primaryBlue"
      />
      <label className="label" htmlFor={name} id={`label-${name}`}>
        {name}
      </label>
    </div>
  );
};

export default TextField;
