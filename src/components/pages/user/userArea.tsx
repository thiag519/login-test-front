"use client"

import { UserAreaPosts } from "./userAreaPosts";
import { UserAreaSidebar } from "./userAreaSidebar";
import { useEffect, useState } from "react";
import { UsersAreaType } from "@/types/usersAreaType";
import { getUsers } from "@/data/public/getUsers";
import { useIdUser } from "@/components/hooks/useIdUser";
import { AreaStoryVoteUp } from "./areaStoryVoteUp";
import { Menu } from "@/components/menu";
import { AreaStoryVoteDown } from "./areaStoryVoteDown";


export const UserArea = () => {
  const { userId, setUserId } = useIdUser();
  const [users, setUsers]= useState<UsersAreaType | null>(null);
   
  useEffect(()=> {getUsers().then(setUsers).catch(console.error)},[]);
  if(!users)return null;
  const user = users.users;
  if(!userId) {
    console.log("userId ausente: ", userId)
  }
  const userValidationId = user.filter(e => e.id === userId)

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
      <UserAreaPosts user={userValidationId} />
      <UserAreaSidebar />
      <Menu />
    </div>
  );
}
