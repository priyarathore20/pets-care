import { FaRegEye } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";

const LogoutUser = ({ router }) => {
  localStorage.removeItem("token");
  router?.replace("/login");
};

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
      { name: "Logout", href: "/login", icon: TbLogout2, onclick: LogoutUser },
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


