"use client";
import { createContext, useState } from "react";

export const PetInfoContext = createContext();

const PetContextProvider = ({ children }) => {
  const [petImg, setPetImg] = useState(null);

  return (
    <PetInfoContext.Provider value={{ petImg, setPetImg }}>
      {children}
    </PetInfoContext.Provider>
  );
};

export default PetContextProvider;
