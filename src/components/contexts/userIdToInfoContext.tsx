import { createContext, ReactNode, useState } from "react";

interface userIdToInfoType {
  active: boolean;
  userIdInfo: number | null;
  setUserIdToInfo: (id: number) => void;
  toggleActive: () => void
}

export const UserIdToInfoContext = createContext<userIdToInfoType | null>(null);

export const UserIdToInfoProvider = ({children}: {children:ReactNode}) => {
  const [userIdInfo, setUserIdInfo] = useState<number | null>(null);
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active)
  }
  const setUserIdToInfo = (id: number ) => {
    setActive(true);
    setUserIdInfo(id)
  } 
  return (
    <UserIdToInfoContext.Provider value={{userIdInfo, toggleActive, active ,setUserIdToInfo}}>
      {children}
    </UserIdToInfoContext.Provider>
  )
}