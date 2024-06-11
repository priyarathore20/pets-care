"use client";
import { useQRCode } from "next-qrcode";
import Image from "next/image";
import labraImg from "../../assets/labra.jpg";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import instance from "@/utils/axios";

const PetForPublic = () => {
  const [pet, setPet] = useState(null);
  const { Canvas } = useQRCode();

  const params = useParams();
  const { id } = params;

  const petDetails = [
    { label: "Name:", value: pet?.name },
    { label: "Species:", value: pet?.species },
    { label: "Breed:", value: pet?.breed },
    { label: "Age:", value: pet?.age },
    { label: "Sex:", value: pet?.sex },
    { label: "Color:", value: pet?.color },
  ];

  const ownerDetails = [
    { label: "Name:", value: "Priya Rathore" },
    { label: "Mobile number:", value: "8763537467" },
    { label: "City:", value: "New Delhi" },
    { label: "Email:", value: "xyz@gmail.com" },
    { label: "Gender:", value: "Female" },
  ];

  const petDetailsCard = [
    {
      label: "Description",
      value: pet?.description,
    },
    {
      label: "Health information:",
      value: pet?.healthInformation,
    },
  ];

  useEffect(() => {
    if (id) {
      const fetchPetDetails = async () => {
        try {
          const res = await instance.get(`/pets/details/${id}`, {
            headers: { Authorization: localStorage.getItem("token") },
          });
          console.log(res.data);
          setPet(res?.data);
        } catch (error) {
          console.log(error?.message);
        }
      };

      fetchPetDetails();
    }
  }, [id]);

  return (
    <div className="flex flex-col bg-gray-100 px-20 py-10 w-screen h-4/5 overflow-hidden">
      <h2 className="font-semibold text-2xl">Pet Details :</h2>
      <div className="flex justify-between items-center py-5 w-full h-full">
        <Image
          src={labraImg}
          width={300}
          height={300}
          alt="img"
          className="rounded-xl"
        />
        <div className="justify-items-center gap-4 grid grid-cols-3 w-full">
          {pet &&
            petDetails.map((item, i) => (
              <div
                className="flex flex-col border-gray-200 bg-white dark:bg-primaryBlue shadow-sm p-3 border dark:border-none rounded-lg w-full max-w-40 text-center"
                key={i}
              >
                <label className="text-gray-400 dark:text-gray-500">
                  {item?.label}
                </label>
                <p className="font-medium text-gray-500 dark:text-formHeading tracking-wide">
                  {item?.value}
                </p>
              </div>
            ))}
        </div>
        <Canvas
          text={`https://localhost:3000/${id}`}
          options={{
            errorCorrectionLevel: "M",
            margin: 3,
            scale: 4,
            width: 200,
            height: 170,
            color: {
              dark: "#000",
              light: "#FFF",
            },
          }}
        />
      </div>
      <div className="flex justify-between items-stretch gap-5 py-5 w-full">
        {pet &&
          petDetailsCard.map((item, i) => (
            <div
              className="flex flex-col justify-start border-gray-200 dark:border-navTitle bg-white dark:bg-primaryBlue p-5 border rounded-xl w-full"
              key={i}
            >
              <h5 className="pb-2 text-gray-400 dark:text-gray-500">
                {item?.label}
              </h5>
              <p className="font-medium text-gray-500 dark:text-formHeading tracking-wide">
                {item?.value}
              </p>
            </div>
          ))}
      </div>
      <div>
        <h3 className="mb-4 font-semibold text-2xl">Owner&apos;s Details :</h3>
        {ownerDetails.map((item, id) => (
          <div key={id} className="flex justify-between mb-3 w-1/4">
            <h2 className="font-medium text-formTitle/75">{item?.label}</h2>
            <h2 className="font-semibold text-black/70">{item?.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetForPublic;
