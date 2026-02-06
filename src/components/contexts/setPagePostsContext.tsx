"use client";

import { createContext, ReactNode, useState } from "react";

interface ActiveContextType {
  pages: number;
  setMorePagesPost: () => void;
  setLessPagesPost: () => void;
}

export const SetPagePostsContext = createContext<ActiveContextType | undefined>(
  undefined,
);

export const SetPagePostsProvider = ({ children }: { children: ReactNode }) => {
  const [pages, setPages] = useState<number>(1);
  const setMorePagesPost = () => setPages(pages + 1);

  const setLessPagesPost = () => setPages(pages > 1 ? pages - 1 : 1);

  return (
    <SetPagePostsContext.Provider
      value={{ pages, setMorePagesPost, setLessPagesPost }}
    >
      {children}
    </SetPagePostsContext.Provider>
  );
};
