import Sidebar from "@/components/Sidebar";
import React from "react";

const Dashboard = ({ children }) => {
  return (
    <div className={`dark:bg-secondaryBlue overflow-auto flex bg-bgLight`}>
      <Sidebar />
      <main className="flex-1 flex flex-col items-center  p-6">{children}</main>
    </div>
  );
};

export default Dashboard;
