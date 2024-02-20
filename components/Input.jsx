import React from "react";

const Input = ({ placeholder, onChange, type }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      className="w-[368px] mb-3 dark:text-formHeading text-grayHeading dark:bg-primaryBlue bg-white border border-formTitle rounded p-4 dark:hover:border-formHeading hover:border-grayHeading"
    />
  );
};

export default Input;
