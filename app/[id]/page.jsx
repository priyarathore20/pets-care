'use client';
import instance from '@/utils/axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const PetForPublic = () => {
  const [data, setData] = useState(null);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (id) {
      const fetchPetDetails = async () => {
        try {
          const res = await instance.get(
            `/pets/get-pet-and-owner-details/${id}`
          );
          // console.log(res.data);
          setData(res?.data);
        } catch (error) {
          console.log(error?.message);
        }
      };

      fetchPetDetails();
    }
  }, [id]);

  const petDetails = [
    { label: 'Name:', value: data?.name },
    { label: 'Species:', value: data?.species },
    { label: 'Breed:', value: data?.breed },
    { label: 'Age:', value: data?.age },
    { label: 'Sex:', value: data?.sex },
    { label: 'Color:', value: data?.color },
  ];

  const ownerDetails = [
    { label: 'Name:', value: data?.ownerName },
    { label: 'Mobile number:', value: data?.ownerPhoneNumber },
    { label: 'Email:', value: data?.ownerEmail },
    { label: 'Gender:', value: data?.ownerGender },
  ];

  const petDetailsCard = [
    {
      label: 'Description',
      value: data?.description,
    },
    {
      label: 'Health information:',
      value: data?.healthInformation,
    },
  ];

  return (
    <div className="flex flex-col bg-gray-100 px-20 py-10 w-screen h-4/5 overflow-hidden">
      <h2 className="font-semibold text-2xl text-center xs:text-left">
        Pet Details :
      </h2>
      <div className="mt-3">
        <div className="flex pb-5 w-full h-full">
          <div className="max-h-[350px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/dog.webp"
              alt="img"
              className="rounded-xl w-full h-full max-h-[350px] object-cover"
            />
          </div>
        </div>
        <div className="mt-3 w-full">
          <div className="justify-items-center gap-4 grid md:grid-cols-3 xs:grid-cols-2 xxs:grid-cols-1 w-full">
            {data &&
              petDetails.map((item, i) => (
                <div
                  className="flex flex-col border-gray-200 bg-white dark:bg-primaryBlue shadow-sm p-3 border dark:border-none rounded-lg w-full text-center"
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
        </div>
        <div className="flex md:flex-row flex-col justify-between items-stretch gap-5 py-5 w-full">
          {data &&
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
      </div>
      <div>
        <h3 className="mb-4 font-semibold text-2xl">Owner&apos;s Details :</h3>
        {ownerDetails.map((item, id) => (
          <div key={id} className="flex justify-between mb-3 w-full md:w-[40%]">
            <h2 className="font-medium text-formTitle/75">{item?.label}</h2>
            <h2 className="font-semibold text-black/70">{item?.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetForPublic;
