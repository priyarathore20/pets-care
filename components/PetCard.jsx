import Image from "next/image";
import React from "react";
import labraImg from "../assets/labra.jpg";

const PetCard = () => {
  return (
    <div className=" mx-auto flex h-[200px] dark:bg-primaryBlue bg-white rounded-xl shadow-md overflow-hidden w-[600px]">
      <div className="md:flex">
        {/* Left column for pet image */}
        <div>
          <Image
            className="object-cover"
            width={400}
            height={400}
            src={labraImg}
            alt=""
          />
        </div>
        {/* Right column for pet details */}
        <div className="p-8 md:w-1/2">
          <div className="uppercase tracking-wide text-sm text-grayHeading dark:text-formHeading font-semibold">
            Dog
          </div>
          <h2 className="mt-1 text-2xl leading-7 font-semibold text-grayHeading dark:text-formHeading">
            Max
          </h2>
          <div className="mt-2 text-grayHeading font-medium dark:text-formHeading">
            <span className="text-formTitle dark:text-darkGray">
              Sex:{" "}
            </span>
            Male
            <br />
            <span className="text-formTitle dark:text-darkGray">
              Age:{" "}
            </span>
            3 years
            <br />
            <span className="text-formTitle dark:text-darkGray">
              Breed:{" "}
            </span>
            Labrador
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
