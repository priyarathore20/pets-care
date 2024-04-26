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
    <div className="flex flex-col">
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
          "dark:text-formHeading text-grayHeading outline-none dark:focus:border-formHeading dark:bg-primaryBlue bg-white border border-formTitle hover:border-formHeading py-2 px-1",
          {
            "bg-gray-100 text-gray-400 cursor-not-allowed": disabled,
          }
        )}
      />
    </div>
  );
};

export default Input;
