"use client"

import UserHeader from "@/components/header/userHeader";
import { useActiveOpenModal } from "@/components/hooks/useActiveCreatePost";
import { useIdUser } from "@/components/hooks/useIdUser";
import { CreatePost } from "@/components/pages/user/createPost";
import { UserArea } from "@/components/pages/user/userArea";
import { getUserName } from "@/data/private/getUserName";
import { useEffect, useState } from "react";

const Page = () => {
  const {active} = useActiveOpenModal();
  const { userId } = useIdUser();

    //const [user, setUser] = useState<UserType | null>(null);
    const [name, setName] = useState<string>('')
  
    useEffect(() => {
     getUserName(userId).then(setName).catch(console.error);
    }, [userId]);

  if (!name) {
    return <div className="w-full h-full">Carregando...</div>;
  }
  //console.log("userId no page.tsx", userId, 'name:', name);
  return (
    <>
      <UserHeader name={name}/>
      <div
        className="flex min-h-screen items-center flex-col 
      text-white overflow-hidden"
      >
        <UserArea userId={userId} />
        {active && <CreatePost userId={userId}/> }
      </div>
    </>
  )
};
export default Page;
