"use client";
import Button from "@/components/Button";
import Dialog from "@/components/Dialog";
import Input from "@/components/Input";
import instance from "@/utils/axios";
import React, { useState } from "react";

const EditPetModal = ({ open, onClose, pet, petId }) => {
  const [name, setName] = useState(pet?.name);
  const [species, setSpecies] = useState(pet?.species);
  const [breed, setBreed] = useState(pet?.breed);
  const [age, setAge] = useState(pet?.age);
  const [sex, setSex] = useState(pet?.sex);
  const [color, setColor] = useState(pet?.color);
  const [description, setDescription] = useState(pet?.description);
  const [healthInformation, setHealthInformation] = useState(
    pet?.healthInformation
  );
  const [isLoading, setIsLoading] = useState(false);

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
      const res = await instance.put(`/pets/edit-pet/${petId}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // console.log(res.data);
      setIsLoading(false);
      onClose(true);
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
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label={"Species"}
              type="text"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
            />
            <Input
              label={"Breed"}
              type="text"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
            <Input
              label={"Age"}
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <Input
              label={"Color"}
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <Input
              label={"Sex"}
              type="text"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            />
            <Input
              label={"Description"}
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Input
              label={"Health Information"}
              type="text"
              value={healthInformation}
              onChange={(e) => setHealthInformation(e.target.value)}
            />
            {/* </div> */}
          </div>
          <Button label={"SUBMIT"} onClick={EditPet} />
        </form>
      </div>
    </Dialog>
  );
};

export default EditPetModal;
