"use client"

import Header from "@/components/header/header";
import { useIdUser } from "@/components/hooks/useIdUser";
import { FeedArea } from "@/components/pages/feed/feedArea";
import { Footer } from "@/components/pages/feed/footer";
import { getUserName } from "@/data/private/getUserName";
import { useEffect, useState } from "react";


export default function Home() {
  const [name, setName] = useState<string | null>('');
  const {userId} = useIdUser();
  
  useEffect(() => {
    if(userId) {
      getUserName(userId).then(setName).catch(console.error);
    }
  }, [userId]);
  
  return (
    <div
      className="flex w-full min-h-screen items-center flex-col justify-between
     text-white overflow-hidden"
    ><Header name={name}/>
      <FeedArea />
      <Footer />
    </div>
  );
}
