import classNames from "classnames";
import React from "react";

const Loader = ({ visibility }) => {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div
        className={classNames(
          "h-16 w-16 rounded-full border-8  border-t-formButton border-grayHeading animate-spin",
          {
            ["block"]: visibility,
            ["hidden"]: !visibility,
          }
        )}
      ></div>
    </div>
  );
};

export default Loader;
