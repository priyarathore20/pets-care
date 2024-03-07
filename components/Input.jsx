import classNames from "classnames";
import React from "react";

const Input = ({
  placeholder,
  onChange,
  type,
  label,
  value,
  disabled,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="text-grayHeading text-lg dark:text-formHeading">
          {label}
        </label>
      )}
      <input
        placeholder={placeholder}
        value={value}
        {...props}
        type={type}
        onChange={onChange}
        className={classNames(
          "dark:hover:border-formHeading bg-white dark:bg-primaryBlue mb-3 p-4 border rounded w-full text-formTitle text-grayHeading dark:text-formHeading outline-none",
          {
            "bg-gray-100 text-gray-400 cursor-not-allowed": disabled,
          }
        )}
      />
    </div>
  );
};

export default Input;
