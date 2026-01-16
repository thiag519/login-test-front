"use client"

import { UserType } from "@/types/userType";
import { CardPost } from "./cardPost";

type Props = {
  users: UserType;
}
//{users}:Props
export const UserPost = () => {
  return (
    <div className="w-full flex items-center justify-center ">
      <CardPost   />
    </div>
  );
} 
//author={users.id} name={users.name}