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
        // console.log(res.data);
        setIsLoading(false);
        router.push('/');
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
  };

  return (
    <Dashboard>
      <div className="items-center dark:bg-secondaryBlue flex flex-col justify-center center bg-bgLight">
        <Header title={'Add Your Pet...!'} />
        <div className="w-5/6 dark:bg-primaryBlue items-center my-5 rounded-lg px-4 py-7 flex flex-col justify-center bg-white">
          <Logo />
          <h2
            className={'mb-5 px-2 text-xl dark:text-formHeading font-medium text-grayHeading'}
          >
            Add a new furry friend here! 😊
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center center"
          >
            <div className="gap-4 grid sm:max-md:grid-cols-1 mb-6 xxs:grid-cols-2">
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
                <label className="text-grayHeading text-lg dark:text-formHeading">
                  Select species:*
                </label>
                <select
                  value={species}
                  onChange={(e) => setSpecies(e.target.value)}
                  className="py-2 dark:bg-primaryBlue dark:text-formHeading outline-none border border-formHeading rounded-lg px-2"
                >
                  <option value="" disabled>
                    Select a species
                  </option>
                  {Object.keys(petImg).map((species, i) => (
                    <option
                      // value={species}
                      key={i}
                      className="dark:text-formHeading text-gray-700 py-1 outline-none cursor-pointer"
                    >
                      {species?.charAt(0).toUpperCase() + species?.slice(1)}
                    </option>
                  ))}
                </select>
                {errors.species && (
                  <span className="text-red-500">
                    This field cannot be empty
                  </span>
                )}
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
              <div className="flex flex-col">
                <label className=" text-grayHeading text-lg dark:text-formHeading">
                  Sex:*
                </label>
                <select
                  onChange={(e) => setSex(e.target.value)}
                  className="dark:bg-primaryBlue dark:text-formHeading py-2 outline-none border min-w-36 border-formHeading rounded-lg px-2"
                >
                  {genderOptions.map((gender, i) => (
                    <option
                      value={gender}
                      key={i}
                      className="text-gray-700 dark:text-formHeading py-1 outline-none"
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
