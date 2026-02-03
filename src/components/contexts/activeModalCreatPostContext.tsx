"use client"

import { createContext, ReactNode, useState } from "react";

type Active = boolean;
interface ActiveContextType {
  active: Active,
  toggleActive:() => void
}

export const ActiveOpenModalContext = createContext<ActiveContextType| undefined>(undefined);

export const ActiveProvider = ({children}:{children: ReactNode}) => {
  const [activeOpenModal, setActiveOpenModal] = useState<Active>(false);
  const toggleActiveOpenModal = () => setActiveOpenModal(!activeOpenModal);
  return (
    <ActiveOpenModalContext.Provider value={{active: activeOpenModal, toggleActive: toggleActiveOpenModal} }>
        {children} 
    </ActiveOpenModalContext.Provider>
  )
}