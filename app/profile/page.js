'use client';
import Header from '@/components/Header';
import { AuthContext } from '@/context/UserContext';
import Dashboard from '@/hoc/Dashboard';
import withAuth from '@/hoc/WithAuth';
// import Image from 'next/image';
import React, { useContext } from 'react';
// import { MdEdit } from 'react-icons/md';
import boyImg from '../../assets/boy.jpg';
import girlImg from '../../assets/girl.jpg';
// import EditProfileModal from './EditProfileModal';

const UserProfile = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const { webUser } = useContext(AuthContext);

  // const handleClose = () => {
  //   setIsOpen(false);
  // };

  const userDetails = [
    { label: 'Name:', value: webUser?.name },
    { label: 'Email:', value: webUser?.email },
    { label: 'Gender:', value: webUser?.gender },
    { label: 'Phone:', value: webUser?.phoneNumber },
  ];

  return (
    <Dashboard>
      <Header title={`${webUser?.name}'s profile`} />
      <div className="  flex justify-center items-start my-12 px-5 dark:bg-secondaryBlue bg-bgLight w-full h-full">
        <div className="px-4 py-5 w-full max-w-[500px] dark:bg-primaryBlue bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Profile picture */}
          <div className="flex justify-center flex-col items-center py-5">
            <img
              src={webUser?.gender === 'Female' ? girlImg?.src : boyImg?.src}
              width={150}
              height={150}
              alt="Profile"
              className="rounded-full border border-grayHeading"
            />
            <div className="font-bold text-gray-500 text-3xl mt-8">
              {webUser?.name}
            </div>
          </div>
          {/* User details */}
          <div className="flex justify-center gap-x-4 items-center">
            <div className="flex-[0.5]">
              {userDetails.map((item, index) => (
                <div className=" py-2 text-right" key={index}>
                  <div className="text-gray-500 whitespace-nowrap dark:text-white/75 text-lg">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex-[0.5]">
              {userDetails.map((item, index) => (
                <div className=" py-2 " key={index}>
                  {' '}
                  <div className="text-gray-500 dark:text-white/75 text-lg">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="flex justify-center items-center mt-6 ">
            <div
              onClick={() => setIsOpen(true)}
              className="flex gap-3 items-center cursor-pointer justify-center rounded-3xl py-2 w-[200px] bg-formButton text-white"
            >
              <MdEdit className="h-5 w-5" />
              <p>Edit Profile</p>
            </div>
          </div> */}
        </div>
        {/* <EditProfileModal
          userName={webUser?.name}
          userEmail={webUser?.email}
          userGender={webUser?.gender}
          userPassword={webUser?.password}
          userPhoneNumber={webUser?.phoneNumber}
          open={isOpen}
          onClose={handleClose}
        /> */}
      </div>
    </Dashboard>
  );
};

export default withAuth(UserProfile);
