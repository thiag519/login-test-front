"use client"

import { createContext, ReactNode, useState } from "react";

interface ActiveContextType {
  pages: number,
  setMorePagesUser:() => void,
  setLessPagesUser:() => void,
}

export const SetUserPagesContext = createContext<ActiveContextType| undefined>(undefined);

export const SetPagesProvider = ({children}:{children: ReactNode}) => {
  const [pages, setPages] = useState<number>(1);
  const setMorePagesUser = () => setPages(pages +1);
  
    const setLessPagesUser = () => setPages(pages>1 ? pages -1 : 1);
  
  
  return (
    <SetUserPagesContext.Provider value={{ pages, setMorePagesUser, setLessPagesUser }}>
        {children} 
    </SetUserPagesContext.Provider>
  )
}