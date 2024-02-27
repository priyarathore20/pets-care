"use Client";
import { sidebarLinks } from "@/data";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { ReactSVG } from "react-svg";

const Sidebar = () => {
  return (
    <div
      className={`dark:bg-primaryBlue w-[260px] pt-5 h-screen bg-white shadow-lg text-grayHeading`}
    >
      <Logo />
      {sidebarLinks.map((actions, index) => (
        <div key={index} className="pt-5">
          {" "}
          <div className="text-navTitle text-xs dark:text-darkGray tracking-[0.4px]">---<span className="ml-2">ACTIONS</span></div>
          {actions.map((item, itemIndex) => (
            <div key={itemIndex}>
              {" "}
              <div className="flex justify-start items-center hover:bg-hover focus:bg-focus mx-5 mt-1 py-3 pr-[10px] pl-[15px] rounded-lg">
                <svg
                  className="w-6 h-6 text-formTitle "
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {React.createElement(item.icon, { size: 22 })}
                </svg>
                <Link
                  href={item.href}
                  className="flex-1 mr-12 p-1 pl-3 text-base text-formTitle dark:text-formHeading tracking-[0.15px]"
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
