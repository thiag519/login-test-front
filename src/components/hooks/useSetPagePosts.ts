import { useContext } from "react"
import { SetPagePostsContext } from "../contexts/setPagePostsContext";

export const useSetPagePosts = () => {
  const context = useContext(SetPagePostsContext);
  if(!context) throw new Error('Context não encontrado');
  return context;
}