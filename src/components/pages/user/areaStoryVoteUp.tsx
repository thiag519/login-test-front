"use client";

import { CardStoryUp } from "./cardStoryUp";
import { useActiveShowPostsUp } from "@/components/hooks/useActiveShowPostsUp";

type Props = {
  userId: number | null;
}
export const AreaStoryVoteUp = ({userId}: Props) => {
  const { activePostsUpStory, toggleActivePostsUpStory } = useActiveShowPostsUp();
  return (
    <div 
      className={`w-full md:w-1/2 h-[90vh] bg-[#0a0a0a] rounded-sm p-4 ${activePostsUpStory ? 'absolute': 'hidden'}`}>
      <h2 className="text-xl text-gray-400 h-10">Área de Votação Up</h2> 
      <span onClick={toggleActivePostsUpStory} 
      className="absolute right-4 top-4 text-gray-500 text-3xl cursor-pointer hover:text-white ">x</span>
      <div style={{scrollbarWidth: 'none'}}
        className="w-full h-full overflow-y-auto">
        <CardStoryUp userId={userId} />
      </div>
    </div>
  );
}