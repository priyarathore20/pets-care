'use client';
import Header from '@/components/Header';
import Input from '@/components/Input';
import Logo from '@/components/Logo';
import Dashboard from '@/hoc/Dashboard';
import React, { useState } from 'react';
import './styles.css';
import Loader from '@/components/Loader';
import instance from '@/utils/axios';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import { petImg } from '@/data';

const AddPet = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [sex, setSex] = useState('');
  const [color, setColor] = useState('');
  const [description, setDescription] = useState('');
  const [healthInformation, setHealthInformation] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
  };

  return (
    <Dashboard>
      <div
        className={`items-center dark:bg-secondaryBlue flex flex-col justify-center center bg-bgLight`}
      >
        <Header title={'Add Your Pet...!'} />
        <div
          className={`w-5/6 dark:bg-primaryBlue items-center my-5 rounded-lg px-4 py-7 flex flex-col justify-center bg-white`}
        >
          <Logo />
          <h2
            className={`mb-5 px-2 text-xl dark:text-formTitle font-medium text-grayHeading`}
          >
            Add a new furry friend here! 😊
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center center"
          >
            <div className="gap-4 grid grid-cols-2 mb-3">
              <div>
                <Input
                  label={'Name*'}
                  type="text"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors?.name && (
                  <p className="text-red/80">*This field is required</p>
                )}
              </div>
              <div>
                <label>Select species:</label>
                <select>
                {petImg.map((item,i)=> (
                  <option key={i}>{item?.species}</option>
                ))}
                </select>
                {errors?.species && (
                  <p className="text-red/80">*This field is required</p>
                )}
              </div>
              <div>
                <Input
                  label={'Breed*'}
                  type="text"
                  className="input"
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                />
                {errors?.breed && (
                  <p className="text-red/80">*This field is required</p>
                )}
              </div>
              <div>
                <Input
                  label={'Age*'}
                  type="text"
                  className="input"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
                {errors?.age && (
                  <p className="text-red/80">*This field is required</p>
                )}
              </div>
              <div>
                <Input
                  label={'Sex*'}
                  type="text"
                  className="input"
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                />
                {errors?.name && (
                  <p className="text-red/80">Please write in uppercase.</p>
                )}
              </div>
              <div>
                <Input
                  label={'Color*'}
                  type="text"
                  className="input"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
                {errors?.color && (
                  <p className="text-red/80">*This field is required</p>
                )}
              </div>
              <div>
                <Input
                  label={'Description*'}
                  type="text"
                  className="input"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                {errors?.description && (
                  <p className="text-red/80">*This field is required</p>
                )}
              </div>
              <div>
                <Input
                  label={'Health Information*'}
                  type="text"
                  className="input"
                  value={healthInformation}
                  onChange={(e) => setHealthInformation(e.target.value)}
                />
                {errors?.info && (
                  <p className="text-red/80">*This field is required</p>
                )}
              </div>
            </div>
            <Button
              onClick={handleSubmit}
              disabled={isLoading}
              label={isLoading ? <Loader /> : 'SUBMIT'}
            />
          </form>
        </div>
      </div>
    </Dashboard>
  );
};

export default AddPet;
