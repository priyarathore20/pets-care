import Sidebar from "@/components/Sidebar";
import React from "react";

const Dashboard = ({ children }) => {
  return (
    <div
      className={` h-screen w-screen dark:bg-secondaryBlue overflow-hidden flex bg-bgLight`}
    >
      <Sidebar />
      <main className="flex-1 h-full overflow-x-hidden overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Dashboard;
