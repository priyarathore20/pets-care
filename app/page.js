import Sidebar from "@/components/Sidebar";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-secondaryBlue overflow-hidden flex">
      <Sidebar />
      <main className="w-[1400px] flex flex-col items-center  p-7">
        <div className="w-[1100px] relative flex">
          <input
            placeholder="Search"
            className="py-4 px-12 text-xl text-formHeading w-full bg-primaryBlue"
          />
          <span>
            <FaSearch className="absolute text-formTitle left-5 top-5 w-5" />
          </span>
        </div>
      </main>
    </div>
  );
}
