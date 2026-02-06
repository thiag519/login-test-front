import { useContext } from "react"
import {SetUserPagesContext} from "../contexts/setPageUserContext"

export const useSetPagesUser = () => {
  const context = useContext(SetUserPagesContext);
  if(!context) throw new Error('Context não encontrado');
  return context;
}