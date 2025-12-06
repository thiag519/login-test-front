"use client"

import imgPlus from "../../../../public/images/icons8-plus-24.png";
import imgUp from "../../../../public/images/up.png";
import imgDown from "../../../../public/images/down.png";
import imgArrow from "../../../../public/images/icons8-arrow-50.png";
import { ButtonCreatePost } from "./buttonCreatePost";
import { useActive } from "@/components/hooks/useActive";


export const UserAreaSidebar = () => {
  const {active, toggleActive} = useActive();
  return (
    <div
      className="w-0 hidden md:flex flex-col bg-gray-900 my-5 mx-3 rounded-2xl md:w-1/4 
      lg:w-1/5 gap-7  h-4/5 right-0 items-center justify-start py-10 text-gray-400"
    >
      <div className=" text-sm flex w-4/5 h-full rounded-full p-3 items-start justify-start gap-10 flex-col">
        <ButtonCreatePost img={imgPlus} text="Criar Post" onClick={toggleActive} />
        <ButtonCreatePost img={imgUp} text="ReactUp" onClick={() => {}} />
        <ButtonCreatePost img={imgDown} text="ReactDown" onClick={() => {}} />
        <ButtonCreatePost img={imgArrow} text="Voltar" onClick={() => {}} />
      </div>
    </div>
  );
};
