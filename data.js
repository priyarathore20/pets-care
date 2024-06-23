import { FaRegEye } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import DogImg from "./public/dog.webp";
import CatImg from "./public/cat.jpg";
import CowImg from "./public/cow.jpg";
import HorseImg from "./public/horse.jpg";
import BirdImg from "./public/bird.jpg";
import SnakeImg from "./public/snake.png";
import CamelImg from "./public/camel.jpg";

export const sidebarLinks = [
  {
    category: "Pet",
    links: [
      {
        name: "View all pets",
        href: "/",
        icon: FaRegEye,
      },
      { name: "Add a pet", href: "/add-a-pet", icon: IoAddCircleOutline },
    ],
  },
  {
    category: "Personal",
    links: [
      { name: "View profile", href: "/profile", icon: CgProfile },
      // { name: "Logout", href: "", icon: TbLogout2, onclick: LogoutUser },
    ],
  },
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

export const petImg = {
  Dog: DogImg,
  Cat: CatImg,
  Cow: CowImg,
  Horse: HorseImg,
  Bird: BirdImg,
  Snake: SnakeImg,
  Buffalo: CowImg,
  Camel: CamelImg
};

export const notAuthenticatedRoutes = ["/login", "/signup"];
