"use client"

import imgPlus from '../../public/images/icons8-plus-24.png';
import imgUp from '../../public/images/up.png';
import imgDown from "../../public/images/down.png";
import imgArrow from "../../public/images/icons8-arrow-50.png";
import { ButtonCreatePost } from "./pages/user/buttonCreatePost";
import { useActive } from './hooks/useActive';
import Link from 'next/link';


export const NavBar = () => {
  const {active, toggleActive} = useActive()
  return (
    <div
      className="w-full md:hidden flex items-center justify-center h-13 bg-gray-900 rounded-t-sm border-t
      border-gray-400 
    bottom-0 fixed"
    >
      <div
        className=" flex w-4/5 h-full rounded-full p-3 
        items-center justify-around"
      ><ButtonCreatePost img={imgPlus} text=""onClick={toggleActive}/>
        <ButtonCreatePost img={imgUp} text="" onClick={() => {}} />
        <ButtonCreatePost img={imgDown} text="" onClick={() => {}} />
        <Link className='' href={'/feed'}><ButtonCreatePost img={imgArrow} text="" onClick={() => {}} /></Link>
      </div>
    </div>
  );
}