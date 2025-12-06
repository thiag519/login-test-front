"use client"

import { setFullName } from "@/utils/setFullName";
import { Avatar } from "./avatar";
import { UsersAreaType } from "@/types/usersAreaType";
import { useEffect, useState } from "react";
import { getUsers } from "@/data/getUsers";
import { UserType } from "@/types/userType";

type Props = {
  userId: number;
}
export const UserPost = ({userId}:Props) => {

  
//fullName = setFullName(item.name)as string[],
  return (
    <>
      <div key={``} className="w-full flex items-center justify-around gap-10 border-b
      border-gray-400 p-3">
        <Avatar name={``} />
        <p className="text-xl text-gray-400">{``}</p>
      </div>
    </>
  );
} 