'use client';
import Button from '@/components/Button';
import Dialog from '@/components/Dialog';
import Input from '@/components/Input';
import Loader from '@/components/Loader';
import instance from '@/utils/axios';
import React, { useState } from 'react';

const EditProfileModal = ({
  open,
  onClose,
  userName,
  userEmail,
  userGender,
  userPhoneNumber,
}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    gender: false,
  });
  const [loading, setLoading] = useState(false);

  const isValidated = () => {
    let validation = true;
    if (name.length === 0) {
      validation = false;
      setErrors((prev) => ({ ...prev, name: true }));
    }
    if (phoneNumber.length === 0) {
      validation = false;
      setErrors((prev) => ({ ...prev, phoneNumber: true }));
    }
    if (gender.length === 0) {
      validation = false;
      setErrors((prev) => ({ ...prev, gender: true }));
    }
    if (email.length === 0) {
      validation = false;
      setErrors((prev) => ({ ...prev, email: true }));
    }
    return validation;
  };

  const editUserDetail = async (e) => {
    e.preventDefault();
    if (isValidated()) {
      try {
        const data = { name, phoneNumber, gender, email };
        setLoading(true);
        const userId = localStorage.getItem('userId');
        await instance.put(`/pets/${userId}`, data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <div
        className={
          's:w-[520px] dark:bg-primaryBlue h-full rounded-lg shadow-2xl px-5 pt-8 py-4 pb-8 flex flex-col items-center bg-white'
        }
      >
        <h2
          className={
            'mb-4 px-2 text-xl dark:text-formHeading font-medium text-grayHeading'
          }
        >
          Customize Your Profile! 🎨
        </h2>
        <form className="flex flex-col justify-center items-center">
          <div className="gap-2 grid grid-cols-1 s:grid-cols-2">
            <Input
              placeholder={userName}
              label={'Name'}
              error={errors?.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder={userPhoneNumber}
              error={errors?.phoneNumber}
              value={phoneNumber}
              type="number"
              label={'Phone Number'}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Input
              placeholder={userGender}
              value={gender}
              error={errors?.gender}
              label={'Gender'}
              onChange={(e) => setGender(e.target.value)}
            />
            <Input
              placeholder={userEmail}
              error={errors?.email}
              label={'Email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex gap-5 mt-8">
            <Button
              onClick={editUserDetail}
              size={'small'}
              label={loading ? <Loader /> : 'SUBMIT'}
            />
            <button
              onClick={onClose}
              className="space-x-1 bg-bgLight dark:bg-secondaryBlue shadow-inner rounded w-[100px] h-[38px] text-grayHeading text-sm dark:text-white cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default EditProfileModal;
