import React from "react";
import Loader from "./Loader";
import classNames from "classnames";

const Button = ({ disabled, onClick, label, isLoading }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames("space-x-1 bg-formButton rounded w-[368px] h-[38px] text-sm text-white", {
        "cursor-not-allowed bg-gray-400":disabled
      })}
    >
      {isLoading ? <Loader size={"small"} /> : label}
    </button>
  );
};

export default Button;
