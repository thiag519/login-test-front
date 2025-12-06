"use client"

import Image, { StaticImageData } from "next/image";

type Props = {
  img: StaticImageData;
  text: string;
  onClick: () => void;
};

export const ButtonCreatePost = ({img,text,onClick}:Props) => {
  return (
    <button
      onClick={() => onClick() }
      className="w-auto gap-3 flex items-center justify-between"
    >
      <Image
        className="h-8 cursor-pointer i"
        src={img}
        width={25}
        alt="adicionar"
      />
      <span>{text}</span>
    </button>
  );
};
