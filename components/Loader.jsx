import classNames from "classnames";
import React from "react";

const Loader = ({ size }) => {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div
        className={classNames(
          "rounded-full border-8  border-t-white border-formButton animate-spin",
          {
            "h-4 w-4": size === "small",
            "h-16 w-16": size === "large",
            "h-16 w-16": !size,
          }
        )}
      ></div>
    </div>
  );
};

export default Loader;
