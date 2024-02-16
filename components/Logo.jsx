import { FaPaw } from "react-icons/fa";

import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center p-6">
      <FaPaw className="h-12 w-12 pr-[10px] text-formButton" />
      <h2
        className={`dark:text-formHeading text-2xl font-bold  text-grayHeading`}
      >
        PeTrack
      </h2>
    </div>
  );
};

export default Logo;
