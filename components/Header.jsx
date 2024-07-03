'use client';
import girlAvatar from '../assets/girl.jpg';
import { LuMenu } from 'react-icons/lu';
import boyAvatar from '../assets/boy.jpg';
import DarkModeToggle from './DarkModeToggle';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { AuthContext } from '@/context/UserContext';
import { sidebarLinks } from '@/data';

const Header = ({ title }) => {
  const { webUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const logoutUser = () => {
    // console.log('called');
    localStorage.removeItem('token');
    router?.replace('/login');
  };

  return (
    <div className="mt-3 px-6 w-full">
      <div
        className={
          'w-full h-16 -p-[16px] flex items-center justify-between shadow-sm dark:bg-primaryBlue rounded-lg bg-white px-6'
        }
      >
        <div className="font-semibold text-black/75 text-lg dark:text-formHeading tracking-[0.015rem]">
          {title}
        </div>

        <div className="flex justify-between items-center gap-3">
          <DarkModeToggle />
          <Image
            src={
              webUser?.gender === 'Female' ? girlAvatar?.src : boyAvatar?.src
            }
            width={40}
            height={40}
            alt=""
            className="border border-black/40 rounded-full object-contain"
            onClick={() => router.push('/profile')}
          />
          <div className="block relative sm:hidden w-full h-full">
            <LuMenu
              className="relative w-6 h-6 text-gray-500"
              onClick={() => {
                // console.log(menuOpen);
                setMenuOpen((prev) => !prev);
              }}
            />
            <div
              className={`${
                menuOpen ? 'block' : 'hidden'
              } absolute bg-white dark:bg-primaryBlue h-56 w-36 top-8 -right-6 px-5 py-2`}
            >
              {sidebarLinks.map((actions, index) => (
                <div key={index} className="pt-5">
                  <div className="mb-2">
                    <span className="border-gray-400 border-b w-full font-medium text-black/75 text-sm dark:text-white/75 tracking-[0.4px]">
                      {actions.category}
                    </span>
                  </div>
                  {actions.links.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h1
                        className="mb-1 text-black/75 text-sm dark:text-white/75"
                        onClick={() => router.push(item?.href)}
                      >
                        {item?.name}
                      </h1>
                    </div>
                  ))}
                </div>
              ))}
              <h1
                className="mb-1 text-black/75 text-sm dark:text-white/75"
                onClick={logoutUser}
              >
                Logout
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
