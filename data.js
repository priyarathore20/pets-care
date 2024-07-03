import { CgProfile } from 'react-icons/cg';
import { FaRegEye } from 'react-icons/fa';
import { IoAddCircleOutline } from 'react-icons/io5';
import BirdImg from './public/bird.jpg';
import CamelImg from './public/camel.jpg';
import CatImg from './public/cat.jpg';
import CowImg from './public/cow.jpg';
import DogImg from './public/dog.webp';
import HorseImg from './public/horse.jpg';
import SnakeImg from './public/snake.png';

export const sidebarLinks = [
  {
    category: 'Pet',
    links: [
      {
        name: 'View all pets',
        href: '/',
        icon: FaRegEye,
      },
      { name: 'Add a pet', href: '/add-a-pet', icon: IoAddCircleOutline },
    ],
  },
  {
    category: 'Personal',
    links: [
      { name: 'View profile', href: '/profile', icon: CgProfile },
      // { name: "Logout", href: "", icon: TbLogout2, onclick: LogoutUser },
    ],
  },
];

export const addPet = [
  { label: 'Name:' },
  { label: 'Species:' },
  { label: 'Breed:' },
  { label: 'Age:' },
  { label: 'Sex:' },
  { label: 'Color:' },
  { label: 'Size:' },
  { label: 'Weight:' },
  { label: 'Description:' },
  { label: 'Health info:' },
];

export const petImg = {
  dog: DogImg,
  cat: CatImg,
  cow: CowImg,
  horse: HorseImg,
  bird: BirdImg,
  snake: SnakeImg,
  buffalo: CowImg,
  camel: CamelImg,
};

export const notAuthenticatedRoutes = ['/login', '/signup'];
