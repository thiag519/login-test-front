import { useContext } from "react"
import { ActiveContext } from "../contexts/activeContext"

export const useActive = () => {
  const context = useContext(ActiveContext);
  if(!context) throw new Error('Context não encontrado');
  return context;
}