"use client";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import girlAvatar from "../assets/girl.jpg";
import boyAvatar from "../assets/boy.jpg";
import DarkModeToggle from "@/components/DarkModeToggle";
import PetCard from "@/components/PetCard";
import Loader from "@/components/Loader";
import axios from "axios";
import instance from "@/utils/axios";

export default function Home() {
  const [gender, setGender] = useState("boy");
  const [isLoading, setIsLoading] = useState(true);
  
  // useEffect(() => {
  //   setIsLoading(true);
  //   instance.get("/pets")
  //     .then((response) => {
  //       console.log(response.data)
  //       // setBooks(response.data.data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    <div className={`dark:bg-secondaryBlue overflow-auto flex bg-bgLight`}>
      <Sidebar />
      <main className="flex-1 flex flex-col items-center  p-6">
        <div
          className={`w-full flex items-center justify-between shadow-lg dark:bg-primaryBlue rounded-lg overflow-hidden bg-white`}
        >
          <div className="px-8 text-xl font-medium text-grayHeading dark:text-formHeading">
            All pets..!
          </div>
          <div className="relative flex ">
            <input
              placeholder="Search pets..."
              className={`py-3 px-16 text-xl outline-none  dark:text-formHeading w-full dark:bg-secondaryBlue bg-bgLight rounded-full text-black`}
            />
            <span>
              <FaSearch className="w-6 h-6 absolute text-formTitle left-8 top-3 " />
            </span>
          </div>
          <div className="shadow-lg pr-5 flex justify-between items-center gap-5 p-3">
            <DarkModeToggle />
            <Image
              src={gender == "girl" ? girlAvatar : boyAvatar}
              width={50}
              height={50}
              alt=""
              className="object-cover rounded-full"
            />
          </div>
        </div>
        {isLoading ? (
          <Loader visibility={isLoading} />
        ) : (
          <div className="flex flex-wrap gap-5 mt-8">
            <PetCard />
            <PetCard />
            <PetCard />
            <PetCard />
            <PetCard />
            <PetCard />
            <PetCard />
            <PetCard />
            <PetCard />
          </div>
        )}
      </main>
    </div>
  );
}
