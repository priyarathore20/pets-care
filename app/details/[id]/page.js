'use client';
import EditPetModal from '@/app/details/EditPetModal';
import Button from '@/components/Button';
import Header from '@/components/Header';
import { petImg } from '@/data';
import Dashboard from '@/hoc/Dashboard';
import withAuth from '@/hoc/WithAuth';
import instance from '@/utils/axios';
import { useQRCode } from 'next-qrcode';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import DeletePetModal from '../DeletePetModal';
import { useSnackbar } from '@/context/SnackbarProvider';
import Loader from '@/components/Loader';

const PetDetails = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const showSnackbar = useSnackbar();

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
    setLoading(true);
    if (id) {
      const fetchPetDetails = async () => {
        try {
          const res = await instance.get(`/pets/details/${id}`, {
            headers: { Authorization: localStorage.getItem('token') },
          });
          // console.log(res.data);
          setPet(res?.data);
          setLoading(false);
        } catch (error) {
          console.log(error?.message);
          showSnackbar(error?.response?.data?.message, 'error');
        }
      };

      fetchPetDetails();
    } else {
      setLoading(true);
      showSnackbar('Please try again later!', 'error');
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
      <Header title={pet ? `${pet?.name}'s info` : ''} />
      {loading ? (
        <div className="h-4/5 w-full">
          <Loader />
        </div>
      ) : (
        <div className="h-full w-full">
          <div className="p-6">
            <h2 className="text-3xl font-bold dark:text-white/75">{pet?.name}</h2>
            <div className="flex items-center justify-between md:flex-row gap-y-5 flex-col py-5 w-full h-full">
              <div className="flex-[0.5] max-h-[350px]">
                <img
                  src={petImg[pet?.species]?.src}
                  alt="img"
                  className="rounded-xl h-full w-full max-h-[350px] object-cover"
                />
              </div>

              <div className="flex-[0.5] flex flex-col items-center justify-center">
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
                <p className="dark:text-white/75 text-gray-700">
                  Stick it to your pet&apos;s collar.
                </p>
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
            <div className="w-full py-5 flex flex-col md:flex-row justify-between items-stretch gap-5">
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
        </div>
      )}
      <EditPetModal
        open={isEditModalOpen}
        pet={pet}
        onClose={handleClose}
        petId={pet?._id}
      />
      <DeletePetModal
        open={isDeleteModalOpen}
        petId={pet?._id}
        onClose={handleClose}
      />
    </Dashboard>
  );
};

export default withAuth(PetDetails);
