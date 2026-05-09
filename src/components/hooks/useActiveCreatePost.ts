import { useContext } from "react"
import { ActiveModalPostContext } from "../contexts/activeModalCreatPostContext"

export const useActiveOpenModal = () => {
  const context = useContext(ActiveModalPostContext);
  if(!context) throw new Error('ActiveModalPostContext não encontrado');
  return context;
}