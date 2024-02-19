"use Client";
import { sidebarLinks } from "@/data";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { ReactSVG } from "react-svg";

const Sidebar = () => {
  return (
    <div
      className={`dark:bg-primaryBlue w-[290px]  pt-5 h-screen bg-white shadow-lg text-grayHeading`}
    >
      <Logo />
      {sidebarLinks.map((actions, index) => (
        <div key={index} className="pt-5">
          {" "}
          <div className="text-formTitle dark:text-darkGray">---Actions</div>
          {actions.map((item, itemIndex) => (
            <div key={itemIndex}>
              {" "}
              <div className="flex items-center hover:bg-hover  px-7 py-4 gap-">
                <svg
                  className="h-6 w-6 dark:text-formTitle"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {React.createElement(item.icon, { size: 24 })}
                </svg>
                <Link
                  href={item.href}
                  className="dark:text-formHeading text-grayHeading text-lg  p-1 pl-3 rounded-lg"
                >
                  {item.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
