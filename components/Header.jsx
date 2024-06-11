import girlAvatar from '../assets/girl.jpg';
import { IoIosSearch } from 'react-icons/io';
import boyAvatar from '../assets/boy.jpg';
import DarkModeToggle from './DarkModeToggle';
import Image from 'next/image';
import { useState } from 'react';
import Button from './Button';

const Header = ({ title }) => {
  const [gender, setGender] = useState('boy');
  return (
    <div className="mt-3 px-6 w-full">
      <div
        className={`w-full h-16 -p-[16px] flex items-center justify-between shadow-sm dark:bg-primaryBlue rounded-lg overflow-hidden bg-white px-6`}
      >
        <div className="font-semibold text-black/75 text-lg dark:text-formHeading tracking-[0.015rem]">
          {title}
        </div>

        <div className="flex justify-between items-end gap-3">
          <DarkModeToggle />
          <Image
            src={gender == 'girl' ? girlAvatar : boyAvatar}
            width={40}
            height={40}
            alt=""
            className="rounded-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
