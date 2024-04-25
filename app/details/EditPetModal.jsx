"use client";
import Dialog from "@/components/Dialog";
import Input from "@/components/Input";
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
        <form className="flex flex-col justify-center items-center">
          <div className="gap-4 grid grid-cols-2">
          {addPet.map((item, index) => (
            <div key={index} >
              <div className="flex flex-1 gap-2" >
                <Input
                  label={item?.label}
                  value={"xyz"}
                  type="text"
                  className={`dark:text-formHeading text-grayHeading outline-none dark:focus:border-formHeading dark:bg-primaryBlue bg-white border border-formTitle hover:border-formHeading py-2 px-1`}
                />
              </div>
            </div>
          ))}
          </div>
            <button className="space-x-1 bg-formButton rounded w-[368px] h-[38px] text-sm text-white">
              SUBMIT
            </button>
        </form>
      </div>
    </Dialog>
  );
};

export default EditPetModal;
