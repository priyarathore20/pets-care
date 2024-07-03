'use client';
import { petImg } from '@/data';
import React from 'react';
import Button from './Button';
import Link from 'next/link';

const PetCardNew = ({ id, name, breed, species }) => {
  return (
    <div className="shadow-sm rounded-lg overflow-hidden">
      <div className="w-full h-[180px]">
        <img
          className="w-full h-full object-cover"
          alt=""
          src={petImg[species]?.src}
        />
      </div>

      <div className="border-gray-200 dark:border-gray-700 bg-white dark:bg-primaryBlue p-4 border-t">
        <p className="font-medium text-cardTitle text-xl dark:text-formHeading">
          {name}
        </p>
        <p className="text-cardSubTitle text-sm">{breed}</p>

        <div className="mt-4">
          <Link href={`/details/${id}`}>
            <Button fullWidth label={'View More'} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetCardNew;
