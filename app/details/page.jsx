import Image from "next/image";
import React from "react";
import labraImg from "../../assets/labra.jpg";
import { petDetails } from "@/data";

const PetDetails = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center dark:bg-secondaryBlue bg-bgLight">
      <div className="h-[550px] w-4/6 bg-white dark:bg-primaryBlue flex justify-start items-center p-8">
        <div className="flex flex-1 gap-8 items-center justify-start flex-col">
          <Image
            src={labraImg}
            width={500}
            height={500}
            alt=""
            className="rounded-xl"
          />
          <h2 className="text-grayHeading dark:text-formHeading text-5xl font-bold">
            Meet Max! 🐶
          </h2>
        </div>
        <div className="flex flex-1 flex-wrap flex-col">
          {petDetails.map((item) => (
            <>
              <div className="flex ">
                <span className="text-formTitle dark:text-darkGray">
                  {item.label}
                </span>
                {item.value}
              </div>
              <br />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
