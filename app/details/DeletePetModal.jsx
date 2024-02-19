import Image from "next/image";
import React from "react";
import catImg from "../../assets/sad-cat.png";
import Dialog from "@/components/Dialog";

const DeletePetModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <div className="w-[500px] h-4/6 dark:bg-primaryBlue bg-white flex justify-center py-8 px-5 shadow-xl rounded-xl">
        <div className="flex flex-col items-center justify-start">
          <Image src={catImg} height={300} width={300} alt="" />
          <div>

            <h3 className="text-grayHeading text-xl font-semibold">
              Are you sure you want to delete your pet?
            </h3>
            <div className="flex gap-8 justify-end items-center mt-6">
              <button className="bg-red text-lg p-3 text-white font-medium shadow-md rounded-xl">
                Delete
              </button>
              <button onClick={onClose} className="bg-bgLight text-lg p-3 text-grayHeading font-medium shadow-md rounded-xl">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default DeletePetModal;
