"use client"

import { createContext, ReactNode, useEffect, useState } from "react";

interface userIdContextType {
  userId: number | null;
  loading: boolean;
  setUserId: (id:number | null) => void;
}

export const UserIdContext = createContext<userIdContextType | undefined>(undefined);

export const UserIdProvider = ({children}:{children:ReactNode}) => {
 const [userId, setUserId] = useState<number| null>(null);
 const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetch("/api/me");
        const data = await res.json();

        if(data.authenticated) {
          setUserId(data.userId);
        }else {
          setUserId(null);
        }
      } catch (error) {
        setUserId(null);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  return (
    <UserIdContext.Provider value={{userId, loading ,setUserId}}>
      {children}
    </UserIdContext.Provider>
  );
};


