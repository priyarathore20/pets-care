import Image from 'next/image';
import React, { useState } from 'react';
import catImg from '../../assets/sad-cat.png';
import Dialog from '@/components/Dialog';
import instance from '@/utils/axios';
import { useRouter } from 'next/navigation';
import Loader from '@/components/Loader';

const DeletePetModal = ({ open, onClose, petId }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const deletePet = async (id) => {
    try {
      setLoading(true);
      await instance.delete(`/pets/delete-pet/${id}`, {
        headers: { Authorization: localStorage.getItem('token') },
      });
      // console.log(res.data);
      router.push('/');
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="flex justify-center bg-white dark:bg-primaryBlue shadow-xl px-5 py-8 rounded-xl w-full max-w-[360px] s:max-w-[500px] h-4/6">
        <div className="flex flex-col justify-start items-center">
          <Image src={catImg} height={300} width={300} alt="" />
          <div>
            <h3 className="font-semibold text-grayHeading text-xl dark:text-cardSubTitle">
              Are you sure you want to delete your pet?
            </h3>
            <div className="flex justify-end items-center gap-8 mt-6">
              <button
                className="bg-red shadow-md p-3 rounded-xl font-medium text-lg text-white"
                onClick={() => deletePet(petId)}
              >
                {loading ? <Loader size={'small'} /> : 'Delete'}
              </button>
              <button
                onClick={onClose}
                className="bg-bgLight shadow-md p-3 rounded-xl font-medium text-grayHeading text-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default DeletePetModal;
