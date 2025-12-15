import { useContext } from "react"
import { UserIdContext } from "../contexts/userIdContext"

export const useIdUser = () => {
  const context = useContext(UserIdContext);
  if(!context) throw new Error ("Erro ao encontra context.");
  return context
};