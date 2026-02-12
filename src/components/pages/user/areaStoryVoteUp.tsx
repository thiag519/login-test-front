"use client";

import Image from "next/image";
import { CardStoryUp } from "./cardStoryUp";
import { useActiveShowPostsUp } from "@/components/hooks/useActiveShowPostsUp";
import imgPlus from "../../../../public/images/icons8-plus-24.png";


type Props = {
  userId: number | null;
}
export const AreaStoryVoteUp = ({userId}: Props) => {
  const { activePostsUpStory, toggleActivePostsUpStory } = useActiveShowPostsUp();
  return (
    <div
      className={`w-full md:w-1/2 h-[90vh] bg-gray-950 z-20 rounded-sm p-4 
        ${activePostsUpStory ? "absolute" : "hidden"}`}
    >
      <h2 className="text-xl text-gray-400 h-10">Área de Votação Up</h2>
      <span
        onClick={toggleActivePostsUpStory}
        className="absolute right-4 top-4 rotate-45 text-gray-500 text-3xl cursor-pointer hover:text-white"
      > <Image src={imgPlus} alt="Mais" width={24} height={24}></Image>
      </span>
      <div
        style={{ scrollbarWidth: "none" }}
        className="w-full h-full overflow-y-auto"
      >
        <CardStoryUp userId={userId} />
      </div>
    </div>
  );
}