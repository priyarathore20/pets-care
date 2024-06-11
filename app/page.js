'use client';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import girlAvatar from '../assets/girl.jpg';
import { IoIosSearch } from 'react-icons/io';
import boyAvatar from '../assets/boy.jpg';
import DarkModeToggle from '@/components/DarkModeToggle';
import PetCard from '@/components/PetCard';
import Loader from '@/components/Loader';
import instance from '@/utils/axios';
import withAuth from '@/hoc/WithAuth';
import Dashboard from '@/hoc/Dashboard';
import { AuthContext } from '@/context/UserContext';
import PetCards from '@/components/PetCards';
import Header from '@/components/Header';
import PetCardNew from '@/components/PetCardNew';

const Home = () => {
  const [gender, setGender] = useState('boy');
  const [isLoading, setIsLoading] = useState(false);
  const [pets, setPets] = useState([]);
  const { webUser, setUserPet } = useContext(AuthContext);

  const fetchPets = async () => {
    try {
      setIsLoading(true);
      const res = await instance.get('/pets', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setPets(res.data.data);
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
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
            {pets.map((pet, index) => (
              <PetCardNew
                id={pet?._id}
                name={pet?.name}
                age={pet?.age}
                breed={pet.breed}
                sex={pet?.sex}
                species={pet?.species}
                key={index}
              />
            ))}
            {/* <PetCards /> */}
          </div>
        )}
      </div>
    </Dashboard>
  );
};

export default withAuth(Home);
