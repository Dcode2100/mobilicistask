import React from "react";

const SidebarNav = ({ title, active }) => {
  return (
    <div className=" h-min  flex justify-center   ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-full mr-[11px]"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
      >
        <path
          d="M6.11108 10.7778L9.66664 7.22223L6.11108 3.66667"
          stroke="#9197B3"
          strokeWidth="1.77778"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div
        className={`w-[164px] h-[47px] flex  ${
          active && "border rounded-[8.89px] shadow"
        } border-indigo-900 items-center justify-center text-indigo-950 text-xl font-normal`}
      >
        {title}
      </div>
    </div>
  );
};
const Sidebar = () => {
  return (
    <div className="bg-white max-md:hidden  h-screen flex-col w-1/5 pt-8 z-1 flex justify-between fixed top-0 border ">
      <div className=" flex flex-col gap-[36px] ">
        <h3 className="text-neutral-800 text-opacity-90 text-2xl font-medium w-max h-[47px]  flex justify-center px-5  items-center rounded-[8.89px] m-auto shadow border border-black border-opacity-20">
          Dashboard
        </h3>
        <div className="flex flex-col gap-[25px]">
          <SidebarNav title={"My Profile"} active={true} />
          <SidebarNav title={"My Connections"} active={false} />
        </div>
      </div>
      <div className="text-neutral-800 text-opacity-90 text-base font-medium p-8 text-center cursor-pointer  ">
        Log Out
      </div>
    </div>
  );
};

export default Sidebar;
