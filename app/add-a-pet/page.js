"use client";
import { addPet } from "@/data";
import React, { useState } from "react";
import { FaPaw } from "react-icons/fa";

const AddPet = () => {
  return (
    <div
      className={`dark:bg-secondaryBlue  w-screen h-screen flex justify-center items-center bg-bgLight`}
    >
      <div
        className={`w-[520px] dark:bg-primaryBlue h-[690px] rounded-lg shadow-2xl px-4 py-7 flex flex-col items-center bg-white`}
      >
        <div className="flex items-center p-3 justify-center">
          <FaPaw className={`h-12 w-12 pr-[10px] text-formButton`} />
          <h2
            className={`dark:text-formHeading text-2xl font-bold text-grayHeading`}
          >
            PeTrack
          </h2>
        </div>
        <h2
          className={`mb-5 px-2 text-xl dark:text-formTitle font-medium text-grayHeading`}
        >
          Add a new furry friend here! 😊
        </h2>
        <form className="flex justify-center flex-wrap gap-4 flex-1">
          {addPet.map((item, index) => (
            <>
              <div className="flex flex-col gap-0 flex-1">
                <label
                  className={`text-lg dark:text-formHeading text-grayHeading`}
                >
                  {item.label}
                </label>
                <input
                  type="text"
                  className={`dark:text-formHeading text-grayHeading outline-none dark:focus:border-formHeading dark:bg-primaryBlue bg-white border border-formTitle hover:border-formHeading py-2 px-1`}
                />
              </div>
            </>
          ))}
          <button className="w-[368px] h-[38px] space-x-1 bg-formButton text-white text-sm rounded">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPet;
