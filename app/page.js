"use client";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import instance from "@/utils/axios";
import withAuth from "@/hoc/WithAuth";
import Dashboard from "@/hoc/Dashboard";
import Header from "@/components/Header";
import PetCardNew from "@/components/PetCardNew";
import Image from "next/image";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [pets, setPets] = useState([]);

  const fetchPets = async () => {
    try {
      setIsLoading(true);
      const res = await instance.get("/pets", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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
        ) : pets.length !== 0 ? (
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
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <Image src="/sad-dog.png" height={200} width={200} alt="" />
            <p className="text-xl font-medium text-gray-500">
              No Pets to show.
            </p>
            <Button
              label={"Click to add you first pet"}
              onClick={() => router.push("/add-a-pet")}
            />
          </div>
        )}
      </div>
    </Dashboard>
  );
};

export default withAuth(Home);
