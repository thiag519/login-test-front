import { useContext } from "react"
import {ActiveShowPostsDownContext} from "../contexts/activeShowPostsDownStoryContext"

export const useActiveShowPostsDown = () => {
  const context = useContext(ActiveShowPostsDownContext);
  if(!context) throw new Error('Context não encontrado');
  return context;
}