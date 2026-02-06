"use client"

import UserHeader from "@/components/header/userHeader";
import { useActiveOpenModal } from "@/components/hooks/useActiveCreatePost";
import { useIdUser } from "@/components/hooks/useIdUser";
import { CreatePost } from "@/components/pages/user/createPost";
import { UserArea } from "@/components/pages/user/userArea";
import { UserType } from "@/types/userType";
import axios from "axios";
import { useEffect, useState } from "react";

const Page = () => {
  const {active, toggleActive} = useActiveOpenModal();
   

    const { userId, setUserId } = useIdUser();
    const [user, setUser] = useState<UserType | null>(null);
    const [name, setName] = useState<string>('')
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const res = await axios.get(`/api/proxy/private/user/${userId}`);
          setUser(res.data.user);
          setName(res.data.user.name);
          console.log("Posts do usuário carregados", res.data.success);
        } catch (error) {
          console.log("Erro ao buscar posts do usuário", error);
        }
      };
      fetchPosts();
  
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
