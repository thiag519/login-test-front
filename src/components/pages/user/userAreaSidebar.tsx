"use client"

import Image from "next/image";
import imgPlus from "../../../../public/images/icons8-plus-24.png";
import imgUp from "../../../../public/images/up.png";
import imgDown from "../../../../public/images/down.png";
import imgArrow from "../../../../public/images/icons8-arrow-50.png";
import { setFullName } from "@/utils/setFullName";
import Link from "next/link";

const name = "thiago souza";
export const UserAreaSidebar = () => {
  let fullName = setFullName(name);
  return (
    <div
      className="w-0 hidden md:flex flex-col bg-gray-900 my-5 mx-3 rounded-2xl md:w-1/4 
      lg:w-1/5 gap-7  h-4/5 right-0 items-center justify-start py-10 text-gray-400"
    >
      <div className=" text-sm flex w-4/5 h-full rounded-full p-3 items-start justify-start gap-10 flex-col">
        <Link
          href={``}
          className="w-auto gap-3 flex items-center justify-between"
        >
          <Image
            className="h-8 cursor-pointer i"
            src={imgPlus}
            width={25}
            alt="adicionar"
          />
          <span>Adicinor Post</span>
        </Link>
        <Link
          href={``}
          className="w-auto gap-3 flex items-center justify-between"
        >
          <Image
            className="h-8 cursor-pointer"
            src={imgUp}
            width={25}
            alt="ReactUp"
          />
          <span className="text-end"> ReactUp</span>
        </Link>
        <Link
          href={``}
          className="w-auto gap-3 flex items-center justify-between"
        >
          <Image
            className="h-8 cursor-pointer"
            src={imgDown}
            width={25}
            alt="ReactDown"
          />
          <span>ReactDown</span>
        </Link>
        <Link
          href={`/feed`}
          className="w-auto gap-3 flex items-center justify-between"
        >
          <Image
            className="h-10 cursor-pointer"
            src={imgArrow}
            width={30}
            alt="Retornar"
          />
          <span>Voltar</span>
        </Link>
      </div>
    </div>
  );
};
