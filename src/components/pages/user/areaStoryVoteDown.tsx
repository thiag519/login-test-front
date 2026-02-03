"use client";

import Image from "next/image";
import { CardStoryDown } from "./cardStoryDown";
import { useActiveShowPostsDown } from "@/components/hooks/useActiveShowPostsDown";
import imgPlus from "../../../../public/images/icons8-plus-24.png";

type Props = {
  userId: number | null;
}
export const AreaStoryVoteDown = ({userId}: Props) => {
  const { activePostsDownStory, toggleActivePostsDownStory } = useActiveShowPostsDown();
  return (
    <div
      className={`w-full md:w-1/2 h-[90vh] bg-[#0a0a0a] rounded-sm p-4 ${activePostsDownStory ? "absolute" : "hidden"}`}
    >
      <h2 className="text-xl text-gray-400">Área de Votação Down</h2>
      <span
        onClick={toggleActivePostsDownStory}
        className="absolute right-4 top-4 text-gray-500 text-3xl cursor-pointer hover:text-white"
      >
        <Image src={imgPlus} alt="Mais" width={24} height={24}></Image>
      </span>
      <div
        style={{ scrollbarWidth: "none" }}
        className="w-full h-full overflow-y-auto   "
      >
        <CardStoryDown userId={userId} />
      </div>
    </div>
  );
}