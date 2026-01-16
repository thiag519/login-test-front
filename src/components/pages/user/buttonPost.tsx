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
      className="w-auto flex items-center justify-between"
    >
      <Image
        className="h-8 cursor-pointer i"
        src={img}
        width={32}
        height={32}
        alt="adicionar"
        sizes=""
      />
      <span>{text}</span>
    </button>
  );
};
