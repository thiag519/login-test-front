"use client"

import { useActiveOpenModal } from "@/components/hooks/useActiveCreatePost";
import { useIdUser } from "@/components/hooks/useIdUser";
import { CreatePost } from "@/components/pages/user/createPost";
import { UserArea } from "@/components/pages/user/userArea";

const Page = () => {
  const {active, toggleActive} = useActiveOpenModal();
  const {userId, setUserId} = useIdUser();
  
  return (
    <div
      className="flex min-h-screen items-center flex-col 
     text-white overflow-hidden"
    >
      <UserArea/>
      {active && <CreatePost userId={userId}/> }
    </div>
  )
};
export default Page;
