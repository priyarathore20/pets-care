import { FaRegEye } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";

export const sidebarLinks = [
  [
    {
      name: "View all pets",
      href: "/",
      icon: FaRegEye,
    },
    { name: "Add a pet", href: "/", icon: IoAddCircleOutline },
  ],
  [
    { name: "View profile", href: "/", icon: CgProfile },
    { name: "Edit profile", href: "/", icon: FaRegEdit },
    { name: "Logout", href: "/", icon: TbLogout2 },
  ],
];

export const addPet = [
  { label: "Name:" },
  { label: "Species:" },
  { label: "Breed:" },
  { label: "Age:" },
  { label: "Sex:" },
  { label: "Color:" },
  { label: "Size:" },
  { label: "Weight:" },
  { label: "Description:" },
  { label: "Health information:" },
];

export const petDetails = [
  { label: "Species:", value: "Dog" },
  { label: "Breed:", value: "Labrador" },
  { label: "Age:", value: "3 years" },
  { label: "Sex:", value: "Male" },
  { label: "Color:", value: "Brown" },
  { label: "Size:", value: "2 ft." },
  { label: "Weight:", value: "12 kg" },
  {
    label: "description",
    value:
      "Meet Max, my loyal Labrador companion! With his glossy black coat and soulful brown eyes, Max embodies intelligence, loyalty, and boundless energy. Whether we're out for a run or cuddled up at home, his playful spirit and gentle nature make every moment brighter. Max isn't just a pet – he's family, bringing endless joy and companionship into my life.",
  },
  {
    label: "Health information:",
    value:
      "Rex is in excellent health, full of energy and ready for adventure!",
  },
];
