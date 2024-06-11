import { FaPaw } from "react-icons/fa";

import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-1 items-center gap-x-3 px-8 py-4">
      <FaPaw className="w-6 h-8 text-formButton" />
      <h2
        className={`dark:text-formHeading text-2xl font-bold  text-grayHeading`}
      >
        PeTrack
      </h2>
    </div>
  );
};

export default Logo;
