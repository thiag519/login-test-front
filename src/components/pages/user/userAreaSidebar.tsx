"use client"

import { useActiveOpenModal } from "@/components/hooks/useActiveCreatePost";

export const UserAreaSidebar = () => {
  const {active, toggleActive} = useActiveOpenModal();
  return (
    <div
      className="w-0 hidden md:flex flex-col bg-gray-900 my-13 mx-3 rounded-s-sm md:w-1/4 
      lg:w-1/5  h-4/5 right-0 items-center justify-start py-10 text-gray-400"
    >
      <div className=" text-sm flex w-4/5 h-full rounded-full p-3 items-start justify-start gap-10 flex-col">
      </div>
    </div>
  );
};
