"use Client";
import { sidebarLinks } from "@/data";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <div
      className={`dark:bg-primaryBlue w-[290px] h-screen bg-white shadow-lg text-grayHeading`}
    >
      <Logo />
      {sidebarLinks.map((actions, index) => (
        <div key={index}>
          {" "}
          {actions.map((item, itemIndex) => (
            <div key={itemIndex}>
              {" "}
              <div className="flex flex-col px-7 py-4 gap-3">
                <div>{item.icon}</div>
                <Link
                  href={item.href}
                  className="dark:text-formHeading text-grayHeading text-lg focus:text-white focus:bg-formButton hover:bg-hover p-1 pl-3 rounded-lg"
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
