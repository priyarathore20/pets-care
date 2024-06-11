'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import labraImg from '../../../assets/labra.jpg';
import EditPetModal from '@/app/details/EditPetModal';
import DeletePetModal from '../DeletePetModal';
import instance from '@/utils/axios';
import withAuth from '@/hoc/WithAuth';
import Dashboard from '@/hoc/Dashboard';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Button from '@/components/Button';
import { useQRCode } from 'next-qrcode';

const PetDetails = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [pet, setPet] = useState(null);

  const hostName =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';

  const { Canvas } = useQRCode();

  const params = useParams();
  const { id } = params;

  const handleClose = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  useEffect(() => {
    if (id) {
      const fetchPetDetails = async () => {
        try {
          const res = await instance.get(`/pets/details/${id}`, {
            headers: { Authorization: localStorage.getItem('token') },
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

  const petDetails = [
    { label: 'Name:', value: pet?.name },
    { label: 'Species:', value: pet?.species },
    { label: 'Breed:', value: pet?.breed },
    { label: 'Age:', value: pet?.age },
    { label: 'Sex:', value: pet?.sex },
    { label: 'Color:', value: pet?.color },
  ];

  const petDetailsCard = [
    {
      label: 'Description',
      value: pet?.description,
    },
    {
      label: 'Health information:',
      value: pet?.healthInformation,
    },
  ];

  return (
    <Dashboard>
      <Header title={`${pet?.name} (${pet?.breed})`} />
      <div className="p-6 mt-[14px]">
        <div className="flex items-center justify-between py-5 w-full h-full">
          <div className="flex-[0.5] max-h-[350px]">
            <img
              src={labraImg?.src}
              alt="img"
              className="rounded-xl h-full w-full max-h-[350px] object-cover"
            />
          </div>

          <div className="flex-[0.5] flex justify-center">
            <Canvas
              text={`${hostName}/${id}`}
              options={{
                errorCorrectionLevel: 'M',
                margin: 3,
                scale: 4,
                width: 200,
                height: 170,
                color: {
                  dark: '#000',
                  light: '#FFF',
                },
              }}
            />
          </div>
        </div>
        <div className="w-full mt-3">
          <div className="w-full grid grid-cols-2 gap-4 justify-items-center md:grid-cols-3 ">
            {pet &&
              petDetails.map((item, i) => (
                <div
                  className="flex flex-col text-center rounded-lg border dark:bg-primaryBlue dark:border-none border-gray-200 shadow-sm bg-white p-3 w-full"
                  key={i}
                >
                  <label className="text-gray-400 dark:text-gray-500">
                    {item?.label}
                  </label>
                  <p className="text-gray-500 font-medium tracking-wide dark:text-formHeading">
                    {item?.value}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="w-full py-5 flex justify-between items-stretch gap-5">
          {pet &&
            petDetailsCard.map((item, i) => (
              <div
                className="w-full  p-5 flex flex-col justify-start bg-white dark:bg-primaryBlue dark:border-navTitle rounded-xl border-gray-200 border"
                key={i}
              >
                <h5 className="text-gray-400 dark:text-gray-500 pb-2">
                  {item?.label}
                </h5>
                <p className="text-gray-500 font-medium tracking-wide dark:text-formHeading">
                  {item?.value}
                </p>
              </div>
            ))}
        </div>
        <div className="flex gap-5 justify-center mt-5 items-center w-full">
          <Button
            label={'Edit'}
            size={'small'}
            onClick={() => setIsEditModalOpen(true)}
          />
          <Button
            label={'Delete'}
            size={'small'}
            onClick={() => setIsDeleteModalOpen(true)}
          />
        </div>
      </div>
      <EditPetModal open={isEditModalOpen} pet={pet} onClose={handleClose} />
      <DeletePetModal
        open={isDeleteModalOpen}
        petId={pet?._id}
        onClose={handleClose}
      />
    </Dashboard>
  );
};

export default withAuth(PetDetails);
