"use client";
import instance from "@/utils/axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [webUser, setWebUser] = useState(null);
  const [userPet, setUserPet] = useState(0);
  // console.log(webUser);

  const fetchPetInfo = async () => {
    try {
      const res = await instance.get("/pets", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(res?.data?.count);
      setUserPet(res.data.count);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPetInfo();
  }, []);

  return (
    <AuthContext.Provider value={{ webUser, setWebUser, userPet, setUserPet }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
