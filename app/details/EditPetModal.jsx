"use client";
import Button from "@/components/Button";
import Dialog from "@/components/Dialog";
import Input from "@/components/Input";
import { AuthContext } from "@/context/UserContext";
import { addPet } from "@/data";
import React, { useContext, useState } from "react";

const EditPetModal = ({ open, onClose, pet }) => {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [healthInformation, setHealthInformation] = useState("");

  const EditPet = async (e) => {
    e.preventDefault();
    const data = {
      name,
      age,
      species,
      breed,
      sex,
      color,
      description,
      healthInformation,
    };
    try {
      setIsLoading(true);
      const res = await instance.post("/pets/add-pet", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(res.data);
      setIsLoading(false);
      router.push("/");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <div
        className={`w-[520px] dark:bg-primaryBlue h-[690px] rounded-lg shadow-2xl px-5 pt-8 py-4 pb-8 flex flex-col items-center bg-white`}
      >
        <h2
          className={`mb-5 px-2 text-xl dark:text-formTitle font-medium text-grayHeading`}
        >
          Something changed? Here we go..! 🚀
        </h2>
        <form className="flex flex-col justify-center items-center">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {/* <div className="flex flex-wrap gap-2 w-full"> */}
            <Input
              label={"Name"}
              placeholder={pet?.name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label={"Species"}
              placeholder={pet?.species}
              type="text"
              onChange={(e) => setSpecies(e.target.value)}
            />
            <Input
              label={"Breed"}
              placeholder={pet?.breed}
              type="text"
              onChange={(e) => setBreed(e.target.value)}
            />
            <Input
              label={"Age"}
              placeholder={pet?.age}
              type="text"
              onChange={(e) => setAge(e.target.value)}
            />
            <Input
              label={"Color"}
              placeholder={pet?.color}
              type="text"
              onChange={(e) => setColor(e.target.value)}
            />
            <Input
              label={"Sex"}
              placeholder={pet?.sex}
              type="text"
              onChange={(e) => setSex(e.target.value)}
            />
            <Input
              label={"Description"}
              placeholder={pet?.description}
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Input
              label={"Health Information"}
              placeholder={pet?.healthInformation}
              type="text"
              onChange={(e) => setHealthInformation(e.target.value)}
            />
            {/* </div> */}
          </div>
          <Button label={"SUBMIT"} onClick={EditPet}/>
        </form>
      </div>
    </Dialog>
  );
};

export default EditPetModal;
