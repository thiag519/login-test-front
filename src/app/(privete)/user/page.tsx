"use client"

import { useActive } from "@/components/hooks/useActive";
import { CreatePost } from "@/components/pages/user/createPost";
import { UserArea } from "@/components/pages/user/userArea";

const Page = () => {
  const {active, toggleActive} = useActive()
  return (
    <div
      className="flex min-h-screen items-center flex-col 
     text-white overflow-hidden"
    ><UserArea/>
      {active && <CreatePost/> }
    </div>
  )
};
export default Page;
