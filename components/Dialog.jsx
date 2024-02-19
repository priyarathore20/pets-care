import classNames from "classnames";
import React from "react";

const Dialog = ({ open, onClose, children }) => {
  return (
    <div
      className={classNames(
        "fixed justify-center items-center w-screen h-screen z-50",
        {
          ["hidden"]: !open,
          ["flex"]: open,
        }
      )}
    >
      <div
        className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30"
        onClick={onClose}
      ></div>
      <div className={classNames("z-40 relative")}>{children}</div>
    </div>
  );
};

export default Dialog;
