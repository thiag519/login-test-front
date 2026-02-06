"use client"

import { useEffect, useState } from "react";
import { FeedAreaPosts } from "./feedAreaPosts";
import { FeedAreaSidebar } from "./feedAreaSidebar";
import { UsersAreaType } from "@/types/usersAreaType";
import { getUsers } from "@/data/public/getUsers";
import { FeedAreaCarrying } from "@/components/carrying/feedAreaCarrying";
import { useSetPagesUser } from "@/components/hooks/useSetPageUsers";

export const FeedArea = () => {
  const [users, setUsers]= useState<UsersAreaType | null>(null);
  const { pages, setMorePagesUser } = useSetPagesUser();
  
    useEffect(() => {getUsers(pages).then(setUsers).catch(console.error)},[pages]);
    if(!users) {
      return <FeedAreaCarrying />;
    }
    const user = users?.users; 

  return (
    <div
      className="w-full lg:w-4/5 h-[93vh] mt-16 flex items-start justify-center
    bottom-0"
    >
      <div
        className=" w-0 left-0 mx-3 min-h-160 my-13 rounded-e-md hidden md:flex md:w-1/4 
    lg:w-1/5 h-4/5 items-center justify-center bg-gray-900/50 text-gray-400"
      >anucios
      </div>
      <FeedAreaPosts />
      <FeedAreaSidebar users={user} />
    </div>
  );
}