"use client";
import React, { useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      var element = document.getElementById("html-tag");
      if (element) {
        element.classList.add("dark");
      }
    }else{
        var element = document.getElementById("html-tag");
        if (element) {
          element.classList.remove("dark");
        } 
    }
    setIsDarkMode((prevMode) => !prevMode);
    // Optionally, you can save the user's preference to localStorage or a global state management solution
  };

  return (
    <div>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? (
          <IoSunnyOutline className="w-8 h-8 dark:text-formHeading text-black" />
        ) : (
          <IoMoonOutline className="w-8 h-8 dark:text-formHeading text-black " />
        )}
      </button>
      {/* Apply dark mode styles conditionally */}
    </div>
  );
};

export default DarkModeToggle;
