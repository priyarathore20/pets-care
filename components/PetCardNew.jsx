import React from 'react';
import dogImg from '../assets/labra.jpg';
import Button from './Button';
import Link from 'next/link';

const PetCardNew = ({ id, imgSrc, name, age, breed, sex, species }) => {
  return (
    <div className="shadow-sm rounded-lg overflow-hidden">
      <div className="w-full h-[180px]">
        <img className="w-full h-full object-cover" src={dogImg.src} />
      </div>

      <div className="border-gray-200 bg-white p-4 border-t">
        <p className="font-medium text-cardTitle text-xl">{name}</p>
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
