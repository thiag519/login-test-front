import { useActiveMenu } from "@/components/hooks/useActiveMenu";
import { useState } from "react";


export const MenuLine = () => {
  const {activeMenu, toggleActiveMenu} = useActiveMenu();
  return (
    <div
      style={{ transition: "ease-out 0.9s " }}
      className={` h-8  w-8 ${
        activeMenu ? "z-50 " : "z-10"
      } flex flex-col gap-1.5 items-center cursor-pointer
        justify-center absolute `}
      onClick={() => toggleActiveMenu()}
    >
      <div
        style={{ transition: "ease-out 0.5s " }}
        className={` h-0.5 w-7 bg-gray-400
          ${activeMenu ? "rotate-45 absolute w-7 " : "-rotate-[22.5] "} `}
      ></div>
      <div
        style={{ transition: "ease-out  0.5s " }}
        className={` h-0.5 w-7 bg-gray-400
          ${activeMenu ? "-rotate-45 absolute w-7 " : "rotate-[22.5] "}`}
      ></div>
      <div
        style={{ transition: "ease-out 0.5s " }}
        className={`bg-gray-400 
          ${activeMenu ? "w-0 h-0 " : " h-0.5 w-7"}`}
      ></div>
    </div>
  );
};
