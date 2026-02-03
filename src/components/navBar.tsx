"use client"

import imgPlus from '../../public/images/icons8-plus-24.png';
import imgUp from '../../public/images/up.png';
import imgDown from "../../public/images/down.png";
import imgArrow from "../../public/images/icons8-arrow-50.png";
import { ButtonPost } from "./pages/user/buttonPost";
import { useActiveOpenModal } from './hooks/useActiveCreatePost';
import Link from 'next/link';
import { useActiveShowPostsUp } from './hooks/useActiveShowPostsUp';
import { useActiveShowPostsDown } from './hooks/useActiveShowPostsDown';
import { useActiveMenu } from './hooks/useActiveMenu';


export const NavBar = () => {
  const {active, toggleActive} = useActiveOpenModal();
  const {activeMenu, toggleActiveMenu} = useActiveMenu();
  const {activePostsUpStory, toggleActivePostsUpStory} = useActiveShowPostsUp();
  const {activePostsDownStory, toggleActivePostsDownStory } = useActiveShowPostsDown();

  return (
    <div
      className="w-full h-auto flex items-center justify-start rounded-t-sm "
    ><div
        className="flex h-full flex-col rounded-full text-sm gap-10 items-start text-gray-300 justify-around"
      ><ButtonPost img={imgPlus} text="Criar Post"onClick={() => {toggleActive(); toggleActiveMenu();}}/>
        <ButtonPost img={imgUp} text="Historico de votos positivos" onClick={() => {toggleActivePostsUpStory(); toggleActiveMenu();}} />
        <ButtonPost img={imgDown} text="Historico de votos negativos" onClick={() => {toggleActivePostsDownStory(); toggleActiveMenu();}} />
        <Link className='' href={'/feed'}><ButtonPost img={imgArrow} text="Voltar" onClick={() => {toggleActiveMenu();}} /></Link>
      </div>
    </div>
  );
}