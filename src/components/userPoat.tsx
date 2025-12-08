"use client"

import { UserType } from "@/types/userType";
import { CardPost } from "./cardPost";

type Props = {
  users: UserType;
}
export const UserPost = ({users}:Props) => {
  return (
    <div className="w-full flex items-center justify-center ">
      <CardPost author={users.id} name={users.name}  />
    </div>
  );
} 