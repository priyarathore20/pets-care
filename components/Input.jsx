import classNames from "classnames";
import React from "react";

const Input = ({
  placeholder,
  onChange,
  type,
  label,
  value,
  disabled,
  fullWidth,
  ...props
}) => {
  return (
    <div
      className={classNames("flex mb-3 flex-col", {
        "w-full": fullWidth === true,
      })}
    >
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
          "dark:text-formHeading rounded-lg pl-3 text-grayHeading outline-none dark:bg-primaryBlue bg-white border border-formHeading py-2 px-1",
          {
            "bg-gray-100 text-gray-400 cursor-not-allowed": disabled,
          }
        )}
      />
    </div>
  );
};

export default Input;
