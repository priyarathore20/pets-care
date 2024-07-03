'use client';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Loader from '@/components/Loader';
import PetCardNew from '@/components/PetCardNew';
import Dashboard from '@/hoc/Dashboard';
import withAuth from '@/hoc/WithAuth';
import instance from '@/utils/axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Home = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [pets, setPets] = useState([]);

  const fetchPets = async () => {
    try {
      setIsLoading(true);
      const res = await instance.get('/pets', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setPets(res.data.data);
      // console.log(res.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  };
  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <Dashboard>
      <Header title="My Pets" />
      <div className="p-6 mt-[14px]">
        {isLoading ? (
          <div className="h-[70vh] w-full">
            <Loader />
          </div>
        ) : pets.length !== 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
            {pets.map((pet, index) => {
              return (
                <PetCardNew
                  id={pet?._id}
                  name={pet?.name}
                  breed={pet.breed}
                  key={index}
                  species={pet?.species}
                />
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <Image src="/sad-dog.png" height={200} width={200} alt="" />
            <p className="text-xl font-medium text-gray-500">
              No Pets to show.
            </p>
            <Button
              label={'Click to add you first pet'}
              onClick={() => {
                setIsLoading(true);
                router.push('/add-a-pet');
                setIsLoading(false);
              }}
            />
          </div>
        )}
      </div>
    </Dashboard>
  );
};

export default withAuth(Home);
