'use client';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Input from '@/components/Input';
import Loader from '@/components/Loader';
import Logo from '@/components/Logo';
import { useSnackbar } from '@/context/SnackbarProvider';
import { petImg } from '@/data';
import Dashboard from '@/hoc/Dashboard';
import instance from '@/utils/axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import './styles.css';

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
  const [species, setSpecies] = useState();
  const [breed, setBreed] = useState('');
  const [sex, setSex] = useState('');
  const [color, setColor] = useState('');
  const [description, setDescription] = useState('');
  const [healthInformation, setHealthInformation] = useState('');
  const router = useRouter();

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
        const res = await instance.post('/pets/add-pet', data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        console.log(res.data);
        setIsLoading(false);
        router.push('/');
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
  };

  const showSnackbar = useSnackbar();

  const handleClick = () => {
    showSnackbar('This is a  error snackbar!', 'error');
  };

  return (
    <Dashboard>
      <button
        onClick={handleClick}
        // className="top-0 left-1 z-20 fixed bg-red w-20 h-10"
      >
        Show Snackbar
      </button>
      <button
        onClick={() => {
          showSnackbar('This is a success snackbar!', 'success');
        }}
        // className="top-0 left-1 z-20 fixed bg-red w-20 h-10"
      >
        Show Snackbar
      </button>
      <div className="items-center dark:bg-secondaryBlue flex flex-col justify-center center bg-bgLight">
        <Header title={'Add Your Pet...!'} />
        <div className="w-5/6 dark:bg-primaryBlue items-center my-5 rounded-lg px-4 py-7 flex flex-col justify-center bg-white">
          <Logo />
          <h2 className="mb-5 px-2 text-xl dark:text-formTitle font-medium text-grayHeading">
            Add a new furry friend here! 😊
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center center"
          >
            <div className="gap-4 grid grid-cols-2 mb-3">
              <div>
                <Input
                  error={errors?.name}
                  label={'Name*'}
                  type="text"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className=" text-grayHeading text-lg dark:text-formHeading">
                  Select species:*
                </label>
                <select
                  onChange={(e) => {
                    setSpecies(e.target.value);
                  }}
                  className="py-2 outline-none border border-formHeading rounded-lg px-2"
                >
                  {Object.keys(petImg).map((species, i) => (
                    <option
                      value={species}
                      key={i}
                      className="text-gray-700 py-1 outline-none capitalize"
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
                  onChange={(e) => setBreed(e.target.value)}
                />
              </div>
              <div>
                <Input
                  error={errors?.age}
                  label={'Age*'}
                  type="text"
                  className="input"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div>
                <Input
                  error={errors?.sex}
                  label={'Sex*'}
                  type="text"
                  className="input capitalize"
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                />
              </div>
              <div>
                <Input
                  error={errors?.color}
                  label={'Color*'}
                  type="text"
                  className="input"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <div>
                <Input
                  error={errors?.description}
                  label={'Description*'}
                  type="text"
                  className="input"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <Input
                  error={errors?.healthInformation}
                  label={'Health Information*'}
                  type="text"
                  className="input"
                  value={healthInformation}
                  onChange={(e) => setHealthInformation(e.target.value)}
                />
              </div>
            </div>
            <Button
              onClick={handleSubmit}
              disabled={isLoading}
              label={isLoading ? <Loader size={'small'} /> : 'SUBMIT'}
            />
          </form>
        </div>
      </div>
    </Dashboard>
  );
};

export default AddPet;
