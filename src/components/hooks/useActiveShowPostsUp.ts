import { useContext } from "react"
import {ActiveShowPostsUpContext} from "../contexts/activeShowPostsUpStoryContext"

export const useActiveShowPostsUp = () => {
  const context = useContext(ActiveShowPostsUpContext);
  if(!context) throw new Error('Context não encontrado');
  return context;
}