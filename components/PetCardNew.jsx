'use client';
import { petImg } from '@/data';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Button from './Button';
import Loader from './Loader';

const PetCardNew = ({ id, name, breed, species }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    router.push(`/details/${id}`);
    setIsLoading(false);
  };


  return (
    <div className="shadow-sm rounded-lg overflow-hidden">
      <div className="w-full h-[180px]">
        <img
          className="w-full h-full object-cover"
          alt=""
          src={petImg[species]?.src || ''}
        />
      </div>

      <div className="border-gray-200 dark:border-gray-700 bg-white dark:bg-primaryBlue p-4 border-t">
        <p className="font-medium text-cardTitle text-xl dark:text-formHeading">
          {name}
        </p>
        <p className="text-cardSubTitle text-sm">{breed}</p>

        <div className="mt-4">
          <Button
            fullWidth
            label={isLoading ? <Loader size={'small'} /> : 'View More'}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default PetCardNew;
