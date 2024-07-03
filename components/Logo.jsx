import { FaPaw } from 'react-icons/fa';

import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'}>
      <div className="flex flex-1 items-center gap-x-3">
        <FaPaw className="w-6 h-8 text-formButton" />
        <h2
          className={
            'dark:text-formHeading text-2xl font-bold  text-grayHeading'
          }
        >
          PeTrack
        </h2>
      </div>
    </Link>
  );
};

export default Logo;
