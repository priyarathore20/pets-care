'use client';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Input from '@/components/Input';
import Loader from '@/components/Loader';
import Logo from '@/components/Logo';
import { petImg } from '@/data';
import Dashboard from '@/hoc/Dashboard';
import instance from '@/utils/axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import './styles.css';
import { useSnackbar } from '@/context/SnackbarProvider';

const genderOptions = ['Male', 'Female', 'Others'];

const AddPet = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    species: false,
    breed: false,
    age: false,
    sex: false,
    color: false,
    size: false,
    weight: false,
    description: false,
    healthInformation: false,
  });
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [species, setSpecies] = useState('dog');
  const [breed, setBreed] = useState('');
  const [sex, setSex] = useState('female');
  const [color, setColor] = useState('');
  const [description, setDescription] = useState('');
  const [healthInformation, setHealthInformation] = useState('');
  const router = useRouter();
  const showSnackbar = useSnackbar();

  const isValidated = () => {
    let validation = true;
    if (name.length === 0) {
      validation = false;
      setErrors((prev) => ({ ...prev, name: true }));
    }
    if (age.length === 0) {
      validation = false;
      setErrors((prev) => ({ ...prev, age: true }));
    }
    if (breed.length === 0) {
      validation = false;
      setErrors((prev) => ({ ...prev, breed: true }));
    }
    if (sex.length === 0) {
      validation = false;
      setErrors((prev) => ({ ...prev, sex: true }));
    }
    if (color.length === 0) {
      validation = false;
      setErrors((prev) => ({ ...prev, color: true }));
    }
    if (description.length === 0) {
      validation = false;
      setErrors((prev) => ({ ...prev, description: true }));
    }
    if (healthInformation.length === 0) {
      validation = false;
      setErrors((prev) => ({ ...prev, healthInformation: true }));
    }
    return validation;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (isValidated()) {
    if (isValidated()) {
      const data = {
        name,
        age,
        species,
        breed,
        sex,
        color,
        description,
        healthInformation,
      };
      try {
        setIsLoading(true);
        await instance.post('/pets/add-pet', data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        router.push('/');
        showSnackbar('Pet added successfully');
        setIsLoading(false);
      } catch (error) {
        showSnackbar(error?.response?.data?.message, 'error');
        setIsLoading(false);
      }
    } else showSnackbar('All fields are required.', 'error');
  };

  return (
    <Dashboard>
      <div className="items-center dark:bg-secondaryBlue flex flex-col justify-center center bg-transparent">
        <Header title={'Add Your Pet...!'} />
        <div className=" items-center my-5 rounded-lg px-5 py-7 flex flex-col justify-center sm:bg-white sm:dark:bg-primaryBlue">
          <div className="sm:block hidden">
            <Logo />
          </div>
          <h2
            className={
              'mb-5 px-2 text-xl dark:text-formHeading font-medium text-grayHeading'
            }
          >
            Add a new furry friend here! 😊
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center center w-full"
          >
            <div className="gap-x-4 gap-y-3 w-full grid sm:max-md:grid-cols-1 mb-3 xxs:grid-cols-2">
              <div>
                <Input
                  error={errors?.name}
                  label={'Name*'}
                  type="text"
                  fullWidth
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-grayHeading text-lg dark:text-white/75">
                  Select species:*
                </label>
                <select
                  value={species?.toLowerCase()}
                  onChange={(e) => setSpecies(e.target.value)}
                  className="py-2 dark:text-formHeading outline-none border  bg-transparent border-cardSubTitle rounded-lg px-2"
                >
                  {Object.keys(petImg).map((species, i) => (
                    <option
                      value={species.toLowerCase()}
                      key={i}
                      className="dark:text-formHeading dark:bg-black bg-white text-gray-700 py-1 outline-none cursor-pointer"
                    >
                      {species?.charAt(0).toUpperCase() + species?.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Input
                  error={errors?.breed}
                  label={'Breed*'}
                  type="text"
                  className="input"
                  value={breed}
                  fullWidth
                  onChange={(e) => setBreed(e.target.value)}
                />
              </div>
              <div>
                <Input
                  error={errors?.age}
                  label={'Age*'}
                  type="text"
                  className="input"
                  fullWidth
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className=" text-grayHeading text-lg dark:text-white/75">
                  Sex:*
                </label>
                <select
                  value={sex}
                  onChange={(e) => {
                    setSex(e.target.value);
                    // console.log(sex);
                  }}
                  className="bg-transparent dark:text-formHeading py-2 outline-none border min-w-36 border-cardSubTitle rounded-lg px-2"
                >
                  {genderOptions.map((gender, i) => (
                    <option
                      value={gender.toLowerCase()}
                      key={i}
                      className="text-gray-700 dark:bg-black bg-white dark:text-formHeading py-1 outline-none"
                    >
                      {gender}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Input
                  error={errors?.color}
                  label={'Color*'}
                  type="text"
                  className="input"
                  fullWidth
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-y-3 mb-4">
              <Input
                error={errors?.description}
                label={'Description*'}
                type="text"
                className="input"
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Input
                error={errors?.healthInformation}
                label={'Health info*'}
                fullWidth
                type="text"
                className="input"
                value={healthInformation}
                onChange={(e) => setHealthInformation(e.target.value)}
              />
            </div>

            <Button
              onClick={handleSubmit}
              disabled={isLoading}
              size={'small'}
              label={isLoading ? <Loader size={'small'} /> : 'SUBMIT'}
            />
          </form>
        </div>
      </div>
    </Dashboard>
  );
};

export default AddPet;
