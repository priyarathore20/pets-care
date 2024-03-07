"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import labraImg from "../../../assets/labra.jpg";
import qrCodeImg from "../../../assets/qrCode.png";
import EditPetModal from "@/app/details/EditPetModal";
import DeletePetModal from "../DeletePetModal";
import instance from "@/utils/axios";
import withAuth from "@/hoc/WithAuth";
import Dashboard from "@/hoc/Dashboard";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Button from "@/components/Button";

const PetDetails = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [pet, setPet] = useState(null);
  console.log(pet);
  const params = useParams();
  const { id } = params;
  console.log(id);

  const handleClose = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };

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

  // const petDetails = [
  //   { label: "Name:", value: pet?.name },
  //   { label: "Breed:", value: pet?.breed },
  //   { label: "Age:", value: pet?.age },
  //   { label: "Sex:", value: pet?.sex },
  //   { label: "Color:", value: "Brown" },
  //   { label: "Weight:", value: pet?.weight },
  // ];

  const petDetails = [
    { label: "Name:", value: "Max" },
    { label: "Breed:", value: "Labrador" },
    { label: "Age:", value: "4 months" },
    { label: "Sex:", value: "Male" },
    { label: "Color:", value: "Brown" },
    { label: "Weight:", value: "3 kg" },
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

  return (
    <Dashboard>
      <div className="flex items-center justify-start px-5 flex-col bg-bgLight dark:bg-secondaryBlue overflow-x-hidden">
        <Header pageName={"Your pet details...!"} />
        <div className="flex items-center justify-between py-5 w-full h-full">
          <Image
            src={labraImg}
            width={250}
            height={250}
            alt="img"
            className="rounded-xl"
          />
          {pet &&
            petDetails.map((item, i) => {
              <div className="w-full grid grid-cols-2">
                <div className="flex flex-col">
                  <label className="text-black">{item?.label}</label>
                  <p>{item?.value}</p>
                </div>
              </div>;
            })}
          <div className="flex flex-col items-center justify-center gap-2 flex-wrap w-[250px]">
            <Image
              src={qrCodeImg}
              height={150}
              width={150}
              alt=""
              className="rounded-lg"
            />
            <p className="text-base tracking-wide text-gray-500 w-40">Scan QR code to track your pet</p>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          {pet &&
            petDetailsCard.map((item, i) => {
              <div className="h-full w-full p-5 flex flex-col items-start justify-center" key={i}>
                <h5>{item?.label}</h5>
                <p>{item?.value}</p>
              </div>;
            })}
        </div>
        <div></div>
      </div>
      <EditPetModal open={isEditModalOpen} onClose={handleClose} />
      <DeletePetModal open={isDeleteModalOpen} onClose={handleClose} />
    </Dashboard>
  );
};

export default withAuth(PetDetails);
