"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import girlAvatar from "../assets/girl.jpg";
import { IoIosSearch } from "react-icons/io";
import boyAvatar from "../assets/boy.jpg";
import DarkModeToggle from "@/components/DarkModeToggle";
import PetCard from "@/components/PetCard";
import Loader from "@/components/Loader";
import instance from "@/utils/axios";
import withAuth from "@/hoc/WithAuth";
import Dashboard from "@/hoc/Dashboard";
import { AuthContext } from "@/context/UserContext";
import PetCards from "@/components/PetCards";

function Home() {
  const [gender, setGender] = useState("boy");
  const [isLoading, setIsLoading] = useState(false);
  const [pets, setPets] = useState([]);
  const { webUser, setUserPet } = useContext(AuthContext);

  const fetchPets = async () => {
    try {
      setIsLoading(true);
      const res = await instance.get("/pets", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setPets(res.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  };
  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <Dashboard>
      <div
        className={`w-full h-16 -p-[16px] flex items-center justify-between shadow-md dark:bg-primaryBlue rounded-lg overflow-hidden bg-white`}
      >
        <div className="px-8 text-lg text-formTitle dark:text-formHeading">
          All pets..!
        </div>
        <div className="relative flex ">
          <input
            placeholder="Search pets..."
            className={`h-10 py-3 px-11 text-lg outline-none  dark:text-formHeading w-full dark:bg-secondaryBlue bg-bgLight rounded-full text-black`}
          />
          <span>
            <IoIosSearch className="w-7 h-7 absolute text-formTitle left-3 top-1.5 " />
          </span>
        </div>
        <div className="shadow-md pr-5 flex justify-between items-end gap-3 p-3">
          <DarkModeToggle />
          <Image
            src={gender == "girl" ? girlAvatar : boyAvatar}
            width={40}
            height={40}
            alt=""
            className="object-cover rounded-full"
          />
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap justify-evenly gap-5 mt-8">
          {pets.map((pet, index) => (
            <PetCards
              id={pet?._id}
              name={pet?.name}
              age={pet?.age}
              breed={pet.breed}
              sex={pet?.sex}
              species={pet?.species}
              key={index}
            />
          ))}
          {/* <PetCards /> */}
        </div>
      )}
    </Dashboard>
  );
}

export default Home;
