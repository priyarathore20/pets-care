'use Client';
import { sidebarLinks } from '@/data';
import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div
      className={`dark:bg-primaryBlue w-[260px] pt-5 px-4 h-screen bg-white shadow-sm text-grayHeading`}
    >
      <Logo />
      {sidebarLinks.map((actions, index) => (
        <div key={index} className="pt-5">
          <div className="mb-3">
            <span className="font-medium text-black/75 text-sm dark:text-white/75 tracking-[0.4px]">
              {actions.category}
            </span>
          </div>
          {actions.links.map((item, itemIndex) => (
            <div key={itemIndex}>
              <Link
                href={item.href}
                className={classNames(
                  'flex justify-start items-center gap-[10px]  mb-[5px] px-4 py-[10px] rounded-lg',
                  {
                    ['hover:bg-hover dark:hover:bg-secondaryBlue ']:
                      pathname !== item?.href,
                    ['bg-formButton/15 text-formButton']:
                      pathname === item?.href,
                  }
                )}
              >
                <svg
                  className={classNames('w-6 h-6 ', {
                    ['text-formTitle dark:text-gray-500']:
                      pathname !== item?.href,
                    [' text-formButton']: pathname === item?.href,
                  })}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {React.createElement(item.icon, { size: 22 })}
                </svg>
                <div
                  className={classNames('flex-1text-base  tracking-[0.15px]', {
                    ['text-formTitle dark:text-gray-500']:
                      pathname !== item?.href,
                    [' text-formButton']: pathname === item?.href,
                  })}
                >
                  {item.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
