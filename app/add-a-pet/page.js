"use client";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Logo from "@/components/Logo";
import Dashboard from "@/hoc/Dashboard";
import React, { useState } from "react";
import "./styles.css";
import Loader from "@/components/Loader";
import instance from "@/utils/axios";

const AddPet = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("baby");
  const [age, setAge] = useState("2 months");
  const [species, setSpecies] = useState("dog");
  const [breed, setBreed] = useState("shitzu");
  const [sex, setSex] = useState("female");
  const [color, setColor] = useState("white");
  const [description, setDescription] = useState("whgwgij;bab;pabenjs");
  const [healthInformation, setHealthInformation] = useState(
    "jfhgfwFHV;SVJGNE;ALJGEA"
  );

  const registerPet = async (e) => {
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
      const res = await instance.post("/add-pet", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(res.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <Dashboard>
      <div
        className={`dark:bg-secondaryBlue flex flex-col justify-center center bg-bgLight`}
      >
        <Header pageName={"Add Your Pet...!"} />
        <div
          className={`w-5/6 dark:bg-primaryBlue items-center my-5 rounded-lg px-4 py-7 flex flex-col justify-center bg-white`}
        >
          <Logo />
          <h2
            className={`mb-5 px-2 text-xl dark:text-formTitle font-medium text-grayHeading`}
          >
            Add a new furry friend here! 😊
          </h2>

          <form className="flex flex-col justify-center items-center center">
            <div className="gap-4 grid grid-cols-2 ">
              <div className="flex ">
                <Input
                  label={"Name"}
                  type="text"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <Input
                  label={"Species"}
                  type="text"
                  className="input"
                  value={species}
                  onChange={(e) => setSpecies(e.target.value)}
                />
              </div>
              <div>
                <Input
                  label={"Breed"}
                  type="text"
                  className="input"
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                />
              </div>
              <div>
                <Input
                  label={"Age"}
                  type="text"
                  className="input"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div>
                <Input
                  label={"Sex"}
                  type="text"
                  className="input"
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                />
              </div>
              <div>
                <Input
                  label={"Color"}
                  type="text"
                  className="input"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <div>
                <Input
                  label={"Description"}
                  type="text"
                  className="input"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <Input
                  label={"Health Information"}
                  type="text"
                  className="input"
                  value={healthInformation}
                  onChange={(e) => setHealthInformation(e.target.value)}
                />
              </div>
            </div>
            <button
              onClick={registerPet}
              disabled={isLoading}
              className="space-x-1 bg-formButton rounded w-[368px] h-[38px] text-sm text-white"
            >
              {isLoading ? <Loader /> : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>
    </Dashboard>
  );
};

export default AddPet;
