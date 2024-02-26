"use client";
import Dialog from "@/components/Dialog";
import Input from "@/components/Input";
import Loader from "@/components/Loader";
import instance from "@/utils/axios";
import React, { useState } from "react";

const EditProfileModal = ({
  open,
  onClose,
  userName,
  userEmail,
  userPassword,
  userGender,
  userPhoneNumber,
}) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const editUserDetail = () => {
    try {
      const data = { name, password, phoneNumber, gender, email };
      setLoading(true);
      const userId = localStorage.getItem("userId");
      const res = instance.put(`/pets/${userId}`, data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <div
        className={`w-[520px] dark:bg-primaryBlue h-[470px] rounded-lg shadow-2xl px-5 pt-8 py-4 pb-8 flex flex-col items-center bg-white`}
      >
        <h2
          className={`mb-4 px-2 text-xl dark:text-formTitle font-medium text-grayHeading`}
        >
          Customize Your Profile! 🎨
        </h2>
        <form className="flex flex-col justify-center items-center">
          <div className="gap-2 grid grid-cols-2">
            <Input
              placeholder={userName}
              label={"Name"}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder={userPhoneNumber}
              label={"Phone Number"}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Input
              placeholder={userGender}
              label={"Gender"}
              onChange={(e) => setGender(e.target.value)}
            />
            <Input
              placeholder={userEmail}
              label={"Email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder={userPassword}
              label={"Password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex gap-5 mt-4">
            <button
              onClick={editUserDetail}
              className="space-x-1 bg-formButton rounded w-[100px] h-[38px] text-sm text-white cursor-pointer"
            >
              {!loading ? "Submit" : <Loader size={"small"} />}
            </button>
            <button
              onClick={onClose}
              className="space-x-1 bg-bgLight dark:bg-secondaryBlue shadow-inner rounded w-[100px] h-[38px] text-grayHeading text-sm dark:text-white cursor-pointer"
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
