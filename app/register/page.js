"use client"
import Link from "next/link";
import React from "react";
import { FaPaw } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="max-w-screen w-screen h-screen max-h-screen bg-secondaryBlue flex justify-center items-center">
      <div className="max-w-[445px] bg-primaryBlue h-[720px] rounded px-4 py-7 flex flex-col items-center">
        <div className="flex items-center p-6">
          <FaPaw className="h-12 w-12 pr-[10px] text-formButton" />
          <h2 className="text-formHeading text-2xl font-bold">PawHub.com</h2>
        </div>
        <div className="w-[368px] pt-2  pb-6 flex flex-col items-start">
          <h5 className="mb-1 text-formHeading text-2xl font-medium">
            Care starts here! 🤗
          </h5>
          <p className="text-formTitle text-base font-medium">
            Simplifying the lives of paw parents.
          </p>
        </div>
        <div className="px-6 flex flex-col items-start">
          <input
            placeholder="Name*"
            className="w-[368px] mb-3 text-formHeading bg-primaryBlue border border-formTitle rounded p-4 hover:border-formHeading"
          />
          <input
            placeholder="Phone number*"
            className="w-[368px] mb-3 text-formHeading bg-primaryBlue border border-formTitle rounded p-4 hover:border-formHeading"
          />
          <input
            placeholder="Email*"
            className="w-[368px] mb-3 text-formHeading bg-primaryBlue border border-formTitle rounded p-4 hover:border-formHeading"
          />
          <input
            placeholder="Password*"
            className="w-[368px] mb-6 text-formHeading bg-primaryBlue border border-formTitle rounded p-4 hover:border-formHeading"
          />
          <button className="w-[368px] h-[38px] space-x-1 bg-formButton text-white text-sm rounded">
            LOGIN
          </button>
          <div className="w-[368px] p-5 flex items-center justify-center text-formHeading">
            Already have an account?{" "}
            <Link href={"/login"} className="text-formButton ml-2">
              {" "}
              Sign in instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
