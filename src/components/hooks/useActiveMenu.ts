import { useContext } from "react"
import { ActiveMenuContext } from "../contexts/activeToggleMenu";

export const useActiveMenu = () => {
  const context = useContext(ActiveMenuContext);
  if(!context) throw new Error('Context não encontrado');
  return context;
}