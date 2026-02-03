"use client"

import Image, { StaticImageData } from "next/image";

type Props = {
  img: StaticImageData;
  text: string;
  onClick: () => void;
};

export const ButtonPost = ({img,text,onClick}:Props) => {
  return (
    <button
      onClick={() => onClick() }
      className="w-full text-start flex items-center justify-start gap-3 hover:text-white
      border-b-2 border-transparent hover:border-white pb-1"
    ><Image
        className="h-6 cursor-pointer "
        src={img}
        width={22}
        height={22}
        alt="adicionar"
        sizes=""
      />
      <span>{text}</span>
    </button>
  );
};
