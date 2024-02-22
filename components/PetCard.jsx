"use client";
import Image from "next/image";
import React from "react";
import labraImg from "../assets/labra.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";

const PetCard = ({ name, age, breed, sex, species }) => {
  return (
    <div className=" mx-auto flex h-[200px] dark:bg-primaryBlue bg-white rounded-xl shadow-md overflow-hidden w-[580px]">
      <div className="md:flex">
        {/* Left column for pet image */}
        <div>
          <Image
            className="object-cover"
            width={350}
            height={400}
            src={labraImg}
            alt=""
          />
        </div>
        {/* Right column for pet details */}
        <div className="p-8 md:w-1/2">
          <div className="uppercase tracking-wide text-sm text-grayHeading dark:text-formHeading font-semibold">
            {species}
          </div>
          <h2 className="mt-1 text-2xl leading-7 font-semibold text-grayHeading dark:text-formHeading">
            {name}
          </h2>
          <div className="flex justify-between items-center">
            <div className="mt-2 text-grayHeading font-medium dark:text-formHeading">
              <span className="text-formTitle dark:text-darkGray">Sex: </span>
              {sex}
              <br />
              <span className="text-formTitle dark:text-darkGray">Age: </span>
              {age}
              <br />
              <span className="text-formTitle dark:text-darkGray">Breed: </span>
              {breed}
              <br />
            </div>
            <Link href={"/details"}>
              <FaArrowCircleRight className="h-6 w-6 text-formHeading dark:text-grayHeading cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
