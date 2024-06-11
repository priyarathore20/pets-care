import Image from "next/image";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

const PetCards = ({ name, age, breed, sex, species, id }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center bg-white shadow-sm rounded-xl w-full max-w-[320px] overflow-hidden">
      <div>
        <Image
          src="/cat.jpg"
          width={300}
          height={150}
          alt=""
          className="flex-[0.5] px-3"
        />
      </div>
      <div className="flex-[0.5] border-gray-100 bg-white px-10 py-4 border-t-2 w-full">
        <h2 className="font-semibold text-4xl text-gray-600">{name}</h2>
        <div className="flex gap-1.5">
          <h2 className="font-medium text-formTitle text-lg">{breed}</h2>
          <h2 className="font-medium text-formTitle text-lg">{species}</h2>
        </div>
        <div className="flex gap-1.5 mb-4">
          <h5 className="text-formTitle/60">Age now :</h5>
          <h2 className="text-black/65">{age}</h2>
        </div>
        <h2 className="mb-3 text-black/45">{`To edit or delete, click the link provided below 👇`}</h2>
        <div className="flex justify-center mt-4">
          <Button
            label={"View more"}
            size={"small"}
            onClick={() => router.push(`/details/${id}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default PetCards;
