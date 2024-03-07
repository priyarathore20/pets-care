import React from "react";
import Loader from "./Loader";
import classNames from "classnames";

const Button = ({ disabled, onClick, label, isLoading, size }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        "space-x-1 bg-formButton rounded h-[38px] text-sm text-white",
        {
          "cursor-not-allowed bg-gray-400": disabled,
          'w-20': size === "small",
          'w-[368px]' : !size
        }
      )}
    >
      {isLoading ? <Loader size={"small"} /> : label}
    </button>
  );
};

export default Button;
