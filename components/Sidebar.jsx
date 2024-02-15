import Link from "next/link";
import React from "react";
import { FaPaw } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-primaryBlue w-[290px] h-screen">
      <div className="flex items-center p-6">
        <FaPaw className="h-12 w-12 pr-[10px] text-formButton" />
        <h2 className="text-formHeading text-2xl font-bold">PawHub.com</h2>
      </div>
      <div className="text-formTitle px-1">--- Pet actions</div>
      <div className="flex flex-col px-7 py-4 gap-3">
        <Link
          href={"/"}
          className="text-formHeading text-lg focus:bg-formButton hover:bg-formTitle p-1 pl-3 rounded-lg"
        >
          View all Pets
        </Link>
        <Link
          href={"/"}
          className="text-formHeading text-lg focus:bg-formButton hover:bg-formTitle p-1 pl-3 rounded-lg"
        >
          Add a Pet
        </Link>
      </div>
      <div className="text-formTitle px-1 my-3">--- Owner actions</div>
      <div className="flex flex-col px-7 py-4 gap-3">
        <Link
          href={"/"}
          className="text-formHeading text-lg focus:bg-formButton hover:bg-formTitle p-1 pl-3 rounded-lg"
        >
          Login
        </Link>
        <Link
          href={"/"}
          className="text-formHeading text-lg focus:bg-formButton hover:bg-formTitle p-1 pl-3 rounded-lg"
        >
          Register
        </Link>
        <Link
          href={"/"}
          className="text-formHeading text-lg focus:bg-formButton hover:bg-formTitle p-1 pl-3 rounded-lg"
        >
          View Profile
        </Link>
        <Link
          href={"/"}
          className="text-formHeading text-lg focus:bg-formButton hover:bg-formTitle p-1 pl-3 rounded-lg"
        >
          Edit your info
        </Link>
        <Link
          href={"/"}
          className="text-formHeading text-lg focus:bg-formButton hover:bg-formTitle p-1 pl-3 rounded-lg"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
