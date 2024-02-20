"use client";
import Dialog from "@/components/Dialog";
import { userDetails } from "@/data";
import React, { useState } from "react";

const EditProfileModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <div
        className={`w-[520px] dark:bg-primaryBlue h-[350px] rounded-lg shadow-2xl px-5 pt-8 py-4 pb-8 flex flex-col items-center bg-white`}
      >
        <h2
          className={`mb-4 px-2 text-xl dark:text-formTitle font-medium text-grayHeading`}
        >
          Customize Your Profile! 🎨
        </h2>
        <form className="flex justify-center flex-wrap gap-4 flex-1">
          {userDetails.map((item, index) => (
            <>
              <div className="flex flex-col w-32 flex-1">
                <label
                  className={`text-lg dark:text-formHeading text-grayHeading`}
                >
                  {item.label}
                </label>
                <input
                  value={""}
                  type={item.type}
                  className={`dark:text-formHeading text-grayHeading outline-none dark:focus:border-formHeading dark:bg-primaryBlue bg-white border border-formTitle hover:border-formHeading py-2 px-1`}
                />
              </div>
            </>
          ))}
          <div className="flex gap-5">
            <button className="w-[100px] cursor-pointer h-[38px] space-x-1 bg-formButton text-white text-sm rounded">
              Submit
            </button>
            <button
              onClick={onClose}
              className="w-[100px] h-[38px] cursor-pointer space-x-1 bg-bgLight dark:bg-secondaryBlue shadow-inner text-grayHeading dark:text-white text-sm rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default EditProfileModal;
