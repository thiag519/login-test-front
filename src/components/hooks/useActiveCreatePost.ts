import { useContext } from "react"
import { ActiveOpenModalContext } from "../contexts/activeModalCreatPostContext"

export const useActiveOpenModal = () => {
  const context = useContext(ActiveOpenModalContext);
  if(!context) throw new Error('Context não encontrado');
  return context;
}