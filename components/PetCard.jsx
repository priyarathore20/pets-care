"use client";
import Image from "next/image";
import React from "react";
import labraImg from "../assets/labra.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";

const PetCard = ({ name, age, breed, sex, species, id }) => {
  return (
    <div className="flex bg-white dark:bg-primaryBlue shadow-md mx-auto rounded-xl w-[580px] h-[200px] overflow-hidden">
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
          <div className="font-semibold text-grayHeading text-sm dark:text-formHeading uppercase tracking-wide">
            {species}
          </div>
          <h2 className="mt-1 font-semibold text-2xl text-grayHeading dark:text-formHeading leading-7">
            {name}
          </h2>
          <div className="flex justify-between items-center">
            <div className="mt-2 font-medium text-grayHeading dark:text-formHeading">
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
            <Link href={`/details/${id}`}>
              <FaArrowCircleRight className="w-6 h-6 text-formHeading dark:text-grayHeading cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
