"use client"

import { Avatar } from "@/components/avatar";
import { Post } from "@/components/post";
import { getUsers } from "@/data/getUsers";
import { UsersAreaType } from "@/types/usersAreaType";
import { UserType } from "@/types/userType";
import { useEffect, useState } from "react";

export const FeedAreaPosts = () => {
  const [users, setUsers]= useState<UsersAreaType | null>(null);
    //const [names, setNames] = useState<UserType[]>([]);
  
    useEffect(()=> {getUsers().then(setUsers).catch(console.error).finally()},[]);
    if(!users)return;
    const user = users.users;
    const post = user.find(e => e.posts)
  return (
    <div
      className="w-full md:w-1/2 h-9/10 my-3 flex flex-col items-center justify-center 
      scroll-m-0"
    ><div
        style={{
          scrollbarWidth: "none",
        }}
        className="w-full h-full overflow-y-scroll flex flex-col items-center"
      >
      {
        <div>
        <div key={``} className="w-full flex items-center justify-around gap-10 border-b
         border-gray-400 p-3">
          <Avatar name={``} />
          <p className="text-xl text-gray-400">{``}</p>
        </div>
        <Post />
        </div>
      }
      </div>
    </div>
  );
};