"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Logo from "@/components/Logo";
import { AuthContext, UserContext } from "@/context/UserContext";
import instance from "@/utils/axios";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SnackbarProvider, useSnackbar } from "notistack";
import React, { useContext, useState } from "react";

const RegisterPage = () => {
  const [name, setName] = useState("Shikha");
  const [email, setEmail] = useState("userr1@gmail.com");
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("7348920345");
  const [password, setPassword] = useState("password");
  const [gender, setGender] = useState("Female");
  // const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const { setWebUser } = useContext(AuthContext);

  const data = [name, email, phoneNumber, password, gender];

  const registerUser = async (e) => {
    // e.preventDefault();
    const data = {
      name,
      email,
      phoneNumber,
      password,
      gender,
    };
    try {
      setIsLoading(true);
      const res = await instance.post("/signup", data);
      console.log(res.data);
      const token = res?.data?.token;
      localStorage.setItem("token", token);
      const user = jwtDecode(token);
      setWebUser(user);
      router.replace("/");
      setIsLoading(false)
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-screen w-screen h-screen max-h-screen dark:bg-secondaryBlue bg-bgLight flex justify-center items-center">
      <div className="max-w-[445px] dark:bg-primaryBlue bg-white h-[700px] shadow-2xl rounded-lg px-4 py-7 flex flex-col items-center">
        <Logo />
        <div className="w-full pt-2 px-6 pb-6 flex flex-col items-start">
          <h5 className="mb-1 dark:text-formHeading leading-8 text-grayHeading text-2xl font-medium">
            Care starts here! 🤗
          </h5>
          <p className="dark:text-gray-500 text-formTitle leading-[1.3125rem] tracking-[0.0094rem] text-base font-medium">
            Simplifying the lives of paw parents.
          </p>
        </div>
        <div className="px-6 py-3 flex flex-col items-start">
          <Input
            placeholder={"Name*"}
            onChange={(e) => setName(e.target.value)}
            value={name}
            disabled={isLoading}
            type={"text"}
          />
          <Input
            placeholder={"Gender*"}
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            disabled={isLoading}
            type={"text"}
          />
          <Input
            placeholder={"Phone Number*"}
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            disabled={isLoading}
            type={"number"}
          />
          <Input
            placeholder={"Email*"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
            type={"email"}
          />
          <Input
            placeholder={"Password*"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoading}
            type={"password"}
          />
          <Button
            label={"REGISTER"}
            onClick={registerUser}
            disabled={isLoading}
            isLoading={isLoading}
          />
          <div className="w-[368px] p-5 flex items-center justify-center text-formTitle dark:text-formHeading">
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

export default RegisterPage;
