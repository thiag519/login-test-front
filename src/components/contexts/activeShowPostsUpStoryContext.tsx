"use client"

import { createContext, ReactNode, useState } from "react";

type Active = boolean;
interface ActiveContextType {
  activePostsUpStory: Active,
  toggleActivePostsUpStory:() => void
}

export const ActiveShowPostsUpContext = createContext<ActiveContextType| undefined>(undefined);

export const ActiveShowPostsUpProvider = ({children}:{children: ReactNode}) => {
  const [activePostsUpStory, setActivePostUpStory] = useState<Active>(false);
  const toggleActivePostsUpStory = () => setActivePostUpStory(!activePostsUpStory);
  return (
    <ActiveShowPostsUpContext.Provider value={{activePostsUpStory, toggleActivePostsUpStory} }>
        {children} 
    </ActiveShowPostsUpContext.Provider>
  )
}