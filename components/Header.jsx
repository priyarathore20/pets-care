"use client";
import girlAvatar from "../assets/girl.jpg";
import { LuMenu } from "react-icons/lu";
import boyAvatar from "../assets/boy.jpg";
import DarkModeToggle from "./DarkModeToggle";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "@/context/UserContext";

const Header = ({ title }) => {
  const { webUser } = useContext(AuthContext);
  const router = useRouter();
  return (
    <div className="mt-3 px-6 w-full">
      <div
        className={`w-full h-16 -p-[16px] flex items-center justify-between shadow-sm dark:bg-primaryBlue rounded-lg overflow-hidden bg-white px-6`}
      >
        <div className="font-semibold text-black/75 text-lg dark:text-formHeading tracking-[0.015rem]">
          {title}
        </div>

        <div className="flex justify-between items-center gap-3">
          <DarkModeToggle />
          <Image
            src={webUser?.gender == "Female" ? girlAvatar : boyAvatar}
            width={40}
            height={40}
            alt=""
            className="border border-black/40 rounded-full object-contain"
            onClick={() => router.push("/profile")}
          />
          <div className="block xs:hidden w-6 h-6">
            <LuMenu className="w-full h-full text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
