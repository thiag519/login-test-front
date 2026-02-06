"use client"

import { UserAreaPosts } from "./userAreaPosts";
import { UserAreaSidebar } from "./userAreaSidebar";
import { AreaStoryVoteUp } from "./areaStoryVoteUp";
import { Menu } from "@/components/menu";
import { AreaStoryVoteDown } from "./areaStoryVoteDown";

type Props = {
  userId: number | null;
}

export const UserArea = ({userId}: Props) => {
  //console.log("userId no userArea", userId);
  
  return (
    <div
      className="w-full lg:w-4/5 h-[93vh] mt-16 flex items-start justify-center
      bottom-0 "
    >
      <div
        className=" w-0 left-0 mx-3 my-13 rounded-e-sm hidden md:flex md:w-1/4 
      lg:w-1/5 h-4/5 items-center justify-center bg-gray-900/50 text-gray-400"
      >
        anucios
      </div>
      <AreaStoryVoteUp userId={userId} />
      <AreaStoryVoteDown userId={userId} />
      <UserAreaPosts user={userId} />
      <UserAreaSidebar />
      <Menu />
    </div>
  );
}
