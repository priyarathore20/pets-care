"use client";
import Image from "next/image";
import React, { useState } from "react";
import labraImg from "../../assets/labra.jpg";
import { petDetails } from "@/data";
import { MdDelete, MdEdit } from "react-icons/md";
import EditPetModal from "@/app/details/EditPetModal";
import DeletePetModal from "./DeletePetModal";

const PetDetails = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleClose = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  return (
    <main className="flex justify-center items-center">
      <div className="h-screen w-screen flex dark:bg-secondaryBlue items-center bg-bgLight overflow-hidden">
        <div className="w-max h-max flex items-center p-8 mr-10">
          <div className="flex flex-1 gap-8 items-center justify-center flex-col">
            <h2 className="text-grayHeading dark:text-formHeading text-5xl font-bold">
              Meet Max! 🐶
            </h2>
            <Image
              src={labraImg}
              width={700}
              height={700}
              alt=""
              className="rounded-xl"
            />
            <div className="flex justify-between w-1/3 ">
              <MdEdit
                onClick={() => setIsEditModalOpen(true)}
                className="h-10 w-10 text-blue border p-2 rounded-xl hover:text-white hover:bg-blue"
              />{" "}
              <MdDelete
                onClick={() => setIsDeleteModalOpen(true)}
                className="h-10 w-10 text-red border p-2 rounded-xl hover:text-white hover:bg-red"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-wrap gap-x-16 gap-y-5 items-center  justify-center ml-10  my-8">
            {petDetails.map((item) => (
              <>
                <div className="flex flex-col text-black dark:text-darkGray text-2xl">
                  <span className="text-formTitle dark:text-darkGray text-xl">
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
      <EditPetModal open={isEditModalOpen} onClose={handleClose} />
      <DeletePetModal open={isDeleteModalOpen} onClose={handleClose} />
    </main>
  );
};

export default PetDetails;
