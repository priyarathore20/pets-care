"use client";
import Input from "@/components/Input";
import Logo from "@/components/Logo";
import { AuthContext, UserContext } from "@/context/UserContext";
import instance from "@/utils/axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SnackbarProvider, useSnackbar } from "notistack";
import React, { useContext, useState } from "react";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const { enqueueSnackbar } = useSnackbar();
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
      const res = await instance.post("/signup", data);
      console.log(res.data);
      const token = res?.data?.token;
      localStorage.setItem("token", token);
      const user = jwtDecode(token);
      console.log(user);
      setWebUser(user);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-screen w-screen h-screen max-h-screen dark:bg-secondaryBlue bg-bgLight flex justify-center items-center">
      <div className="max-w-[445px] dark:bg-primaryBlue bg-white h-[700px] shadow-2xl rounded-lg px-4 py-7 flex flex-col items-center">
        <Logo />
        <div className="w-[368px] pt-2  pb-6 flex flex-col items-start">
          <h5 className="mb-1 dark:text-formHeading text-grayHeading text-2xl font-medium">
            Care starts here! 🤗
          </h5>
          <p className="dark:text-formTitle text-grayHeading text-base font-medium">
            Simplifying the lives of paw parents.
          </p>
        </div>
        <div className="px-6 flex flex-col items-start">
          <Input
            placeholder={"Name*"}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder={"Gender*"}
            onChange={(e) => setGender(e.target.value)}
          />
          <Input
            placeholder={"Phone Number*"}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Input
            placeholder={"Email*"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder={"Password*"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={registerUser}
            className="w-[368px] h-[38px] space-x-1 bg-formButton text-white text-sm rounded"
          >
            REGISTER
          </button>
          <div className="w-[368px] p-5 flex items-center justify-center text-grayHeading dark:text-formHeading">
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
