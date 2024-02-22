'use client'
import Image from "next/image";
import React from "react";
import dogImg from "../assets/404.jpg";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="h-screen w-screen overflow-hidden justify-center flex items-center flex-col">
      <Image src={dogImg} height={500} width={500} alt="" />
      <h2 className="text-3xl font-medium mb-4 text-grayHeading">
        Oops! Our dog ate this page.
      </h2>
      <button
        onClick={() => router.push("/")}
        className="bg-formButton px-4 py-2 rounded-full text-white"
      >
        Return to homepage
      </button>
    </div>
  );
};

export default NotFound;
