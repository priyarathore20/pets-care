import girlAvatar from "../assets/girl.jpg";
import { IoIosSearch } from "react-icons/io";
import boyAvatar from "../assets/boy.jpg";
import DarkModeToggle from "./DarkModeToggle";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

const Header = ({ input, pageName }) => {
  const [gender, setGender] = useState("boy");
  return (
    <div
      className={`w-full h-16 -p-[16px] flex items-center justify-between shadow-md dark:bg-primaryBlue rounded-lg overflow-hidden bg-white`}
    >
      <div className="px-8 text-formTitle text-lg dark:text-formHeading tracking-[0.015rem]">
        {pageName}
      </div>
      {input && (
        <div className="relative flex">
          <input
            placeholder="Search pets..."
            className={`h-10 py-3 px-11 text-lg outline-none  dark:text-formHeading w-full dark:bg-secondaryBlue bg-bgLight rounded-full text-black`}
          />
          <span>
            <IoIosSearch className="top-1.5 left-3 absolute w-7 h-7 text-formTitle" />
          </span>
        </div>
      )}
      <div className="flex justify-between items-end gap-3 shadow-md p-3 pr-5">
        <DarkModeToggle />
        <Image
          src={gender == "girl" ? girlAvatar : boyAvatar}
          width={40}
          height={40}
          alt=""
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
