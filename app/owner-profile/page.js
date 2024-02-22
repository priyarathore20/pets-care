"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import boyImg from "../../assets/boy.jpg";
import { MdDelete, MdEdit } from "react-icons/md";
import EditProfileModal from "./EditProfileModal";
import instance from "@/utils/axios";
import girlImg from "../../assets/girl.jpg";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const res = await instance.get(`/${userId}`);
        console.log(res.data);
        setUser(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, []);

  // Mock user data
  const userDetails = [
    { label: "Name:", value: user?.name },
    { label: "Email:", value: user?.email },
    { label: "Gender:", value: user?.gender },
    { label: "Phone Number:", value: user?.phoneNumber },
    { label: "Number of Pets:", value: "3" },
  ];

  return (
    <div className=" px-4 py-8 flex justify-center items-center dark:bg-secondaryBlue bg-bgLight w-screen h-screen">
      <div className="w-[500px] h-[600px] dark:bg-primaryBlue bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Profile picture */}
        <div className="flex justify-center flex-col items-center py-5">
          <Image
            src={user?.gender == "Female" ? girlImg : boyImg}
            width={150}
            height={150}
            alt="Profile"
            className="rounded-full border border-grayHeading"
          />
          <div className="font-bold text-3xl mt-8">{user?.name}</div>
        </div>
        {/* User details */}
        {userDetails.map((item) => (
          <>
            <div className="px-12 py-2 flex justify-between items-start">
              <div className="text-grayHeading text-lg ">{item.label}</div>
              <div className="text-grayHeading text-lg">{item.value}</div>
            </div>
          </>
        ))}
        <div className="flex justify-center items-center mt-6 ">
          <div
            onClick={() => setIsOpen(true)}
            className="flex gap-3 items-center cursor-pointer justify-center rounded-3xl py-2 w-[200px] bg-formButton text-white"
          >
            <MdEdit className="h-5 w-5" />
            <p>Edit Profile</p>
          </div>
        </div>
      </div>
      <EditProfileModal
        userName={user?.name}
        userEmail={user?.email}
        userGender={user?.gender}
        userPassword={user?.password}
        userPhoneNumber={user?.phoneNumber}
        open={isOpen}
        onClose={handleClose}
      />
    </div>
  );
};

export default UserProfile;
