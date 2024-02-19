"use client";
import Dialog from "@/components/Dialog";
import Logo from "@/components/Logo";
import { addPet } from "@/data";
import React, { useState } from "react";

const EditPetModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <div
        className={`w-[520px] dark:bg-primaryBlue h-[690px] rounded-lg shadow-2xl px-5 pt-8 py-4 pb-8 flex flex-col items-center bg-white`}
      >
        <h2
          className={`mb-5 px-2 text-xl dark:text-formTitle font-medium text-grayHeading`}
        >
          Something changed? Here we go..! 🚀
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
                  value={"xyz"}
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
    </Dialog>
  );
};

export default EditPetModal;
