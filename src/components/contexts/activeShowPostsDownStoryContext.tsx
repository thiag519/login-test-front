"use client"

import { createContext, ReactNode, useState } from "react";

type Active = boolean;
interface ActiveContextType {
  activePostsDownStory: Active,
  toggleActivePostsDownStory:() => void
}

export const ActiveShowPostsDownContext = createContext<ActiveContextType| undefined>(undefined);

export const ActiveShowPostsDownProvider = ({children}:{children: ReactNode}) => {
  const [activePostsDownStory, setActivePostsDownStory] = useState<Active>(false);
  const toggleActivePostsDownStory = () => setActivePostsDownStory(!activePostsDownStory);
  return (
    <ActiveShowPostsDownContext.Provider value={{activePostsDownStory, toggleActivePostsDownStory} }>
        {children} 
    </ActiveShowPostsDownContext.Provider>
  )
} 