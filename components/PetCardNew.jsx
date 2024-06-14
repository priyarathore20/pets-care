"use client";
import React, { useState } from "react";
import dogImg from "../assets/labra.jpg";
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

const PetCardNew = ({ id, name, breed }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    router.push(`/details/${id}`);
    setIsLoading(false);
  };

  return (
    <div className="shadow-sm rounded-lg overflow-hidden">
      <div className="w-full h-[180px]">
        <img className="w-full h-full object-cover" src={dogImg.src} />
      </div>

      <div className="border-gray-200 dark:border-gray-700 bg-white dark:bg-primaryBlue p-4 border-t">
        <p className="font-medium text-cardTitle text-xl dark:text-formHeading">
          {name}
        </p>
        <p className="text-cardSubTitle text-sm">{breed}</p>

        <div className="mt-4">
          <Button
            fullWidth
            label={isLoading ? <Loader size={"small"} /> : "View More"}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default PetCardNew;
