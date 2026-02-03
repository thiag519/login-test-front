"use client"

import { createContext, ReactNode, useState } from "react";

type Active = boolean;
interface ActiveContextType {
  activeMenu: Active,
  toggleActiveMenu:() => void
}

export const ActiveMenuContext = createContext<ActiveContextType| undefined>(undefined);

export const ActiveMenuProvider = ({children}:{children: ReactNode}) => {
  const [activeMenu, setActiveMenu] = useState<Active>(false);
  const toggleActiveMenu = () => setActiveMenu(!activeMenu);
  return (
    <ActiveMenuContext.Provider value={{ activeMenu, toggleActiveMenu }}>
        {children} 
    </ActiveMenuContext.Provider>
  )
}