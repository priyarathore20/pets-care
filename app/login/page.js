"use client";
import Input from "@/components/Input";
import { AuthContext } from "@/context/UserContext";
import instance from "@/utils/axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { FaPaw } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import ForgotPasswordModal from "./ForgotPasswordModal";
import Loader from "@/components/Loader";
import Button from "@/components/Button";

const LoginPage = () => {
  const [email, setEmail] = useState("example1@gmail.com");
  const [password, setPassword] = useState("password");
  const [passwordModal, setPasswordModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { setWebUser } = useContext(AuthContext);

  const handleClose = () => {
    setPasswordModal(false);
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      setIsLoading(true);
      const res = await instance.post("/auth/login", data);
      console.log(data, res);
      console.log(res.data);
      const token = res?.data?.token;
      localStorage.setItem("token", token);
      const user = jwtDecode(token);
      console.log(user);
      setWebUser(user);
      router.replace("/");
      // setIsLoading(false);
    } catch (error) {
      // alert(error.message);
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-screen w-screen h-screen max-h-screen dark:bg-secondaryBlue bg-bgLight flex justify-center items-center">
      <div className="w-[445px] dark:bg-primaryBlue shadow-2xl  bg-white h-[660px] rounded-lg px-4 py-7 flex flex-col items-center">
        <div className="flex items-center p-6">
          <FaPaw className="h-12 w-12 pr-[10px] text-formButton" />
          <h2 className="dark:text-formHeading text-grayHeading text-2xl font-bold">
            PeTrack
          </h2>
        </div>
        <div className="pt-2 px-6 pb-6 flex flex-col items-start">
          <h5 className="mb-1 dark:text-formHeading tracking-normal leading-8 text-grayHeading text-2xl font-medium">
            Welcome to PeTrack! 👋🏻
          </h5>
          <p className="text-formTitle text-base font-normal tracking-[0.0094rem] leading-[1.3125rem]">
            This platform enables users to register their pets, making them
            accessible globally for anyone searching.
          </p>
        </div>
        <div className="px-6 flex flex-col items-start">
          <Input
            placeholder={"Email"}
            onChange={(e) => setEmail(e.target.value)}
            type={"text"}
            value={email}
            disabled={isLoading}
          />
          <Input
            placeholder={"Password"}
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
            value={password}
            disabled={isLoading}
          />
          <div className="w-full flex justify-end items-center mt-1 mb-4">
            <p
              onClick={() => setPasswordModal(true)}
              className="text-formButton text-base cursor-pointer tracking=[0.009375rem] leading-[1.3125rem]"
            >
              Forgot your password?
            </p>
          </div>
          <Button
            disabled={isLoading}
            isLoading={isLoading}
            onClick={loginUser}
            label={"LOGIN"}
          />
          <div className="w-[368px] p-5 flex items-center justify-center text-formTitle leading-6 dark:text-formHeading">
            New on our platform?{" "}
            <Link href={"/signup"} className="text-formButton ml-2">
              {" "}
              Create an account
            </Link>
          </div>
        </div>
      </div>
      {/* <ForgotPasswordModal open={passwordModal} onClose={handleClose} />
       */}
    </div>
  );
};

export default LoginPage;
