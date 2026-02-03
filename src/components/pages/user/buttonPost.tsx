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
      className="w-auto flex items-center justify-between gap-3 hover:text-white"
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
