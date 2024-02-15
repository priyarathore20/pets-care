"use client"
import Link from "next/link";
import React from "react";
import { FaPaw } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="max-w-screen w-screen h-screen max-h-screen bg-secondaryBlue flex justify-center items-center">
      <div className="w-[445px] bg-primaryBlue h-[660px] rounded px-4 py-7 flex flex-col items-center">
        <div className="flex items-center p-6">
          <FaPaw className="h-12 w-12 pr-[10px] text-formButton" />
          <h2 className="text-formHeading text-2xl font-bold">PawHub.com</h2>
        </div>
        <div className="pt-2 px-6 pb-6 flex flex-col items-start">
          <h5 className="mb-1 text-formHeading text-2xl font-medium">
            Welcome to PawHub! 👋🏻
          </h5>
          <p className="text-formTitle text-base font-medium">
            This platform enables users to register their pets, making them
            accessible globally for anyone searching.
          </p>
        </div>
        <div className="px-6 flex flex-col items-start">
          <input
            placeholder="Email"
            className="w-[368px] mb-6 text-formHeading bg-primaryBlue border border-formTitle rounded p-4 hover:border-formHeading"
          />
          <input
            placeholder="Password"
            className="w-[368px] mb-6 text-formHeading bg-primaryBlue border border-formTitle rounded p-4 hover:border-formHeading"
          />
          <button className="w-[368px] h-[38px] space-x-1 bg-formButton text-white text-sm rounded">
            LOGIN
          </button>
          <div className="w-[368px] p-5 flex items-center justify-center text-formHeading">
            New on our platform?{" "}
            <Link href={"/register"} className="text-formButton ml-2">
              {" "}
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
