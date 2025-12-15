"use client";

import { Avatar } from "@/components/avatar";
import { Logout } from "../logout";
import { useEffect, useState } from "react";
import { UsersAreaType } from "@/types/usersAreaType";
import { getUsers } from "@/data/public/getUsers";
import { useIdUser } from "../hooks/useIdUser";

const UserHeader = () => {
  const {userId, setUserId} =useIdUser();
  const[name, setName] = useState<string | undefined>('');

  const [users, setUsers]= useState<UsersAreaType | null>(null);

  useEffect(()=> {getUsers().then(setUsers).catch(console.error)},[]);

  const userss = users?.users
  const user = userss?.find(e => e.id === userId);
    
  return (
    <header
      className={`w-dvw left-0 top-0 flex-1 py-2 h-[7vh] min-h-14 flex items-center 
      justify-center z-50 fixed bg-gray-900`}
    ><div className="w-[80%] flex items-center justify-between gap-3 ">
        <div className="text-3xl text-gray-400">
         Logo
        </div>
        <div className="h-full w-full flex items-center justify-end gap-3 ">
          <div className="h-full ">
            <Avatar name={user?.name} />   
          </div>
           <Logout/>
        </div>
      </div>
    </header>
  );
};
export default UserHeader;
