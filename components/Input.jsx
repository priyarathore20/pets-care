import React from "react";

const Input = ({ placeholder, onChange, type, label }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="text-lg dark:text-formHeading text-grayHeading">
          {label}
        </label>
      )}
      <input
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        className="w-full mb-3 dark:text-formHeading text-grayHeading dark:bg-primaryBlue bg-white border border-formTitle rounded p-4 dark:hover:border-formHeading hover:border-grayHeading"
      />
    </div>
  );
};

export default Input;
