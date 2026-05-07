import { useContext } from "react"
import { UserIdToInfoContext } from "../contexts/userIdToInfoContext";

export const useUserIdToInfo = () => {
  const context = useContext(UserIdToInfoContext);
  if(!context) throw new Error('Context não encontrado');
  return context;
}