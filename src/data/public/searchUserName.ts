
import { SearchUserNameType } from "@/types/searchUserNameType";
import axios from "axios";

export const searchUserName = async (name: string):Promise<SearchUserNameType | null>=> {
  //const apiUrl = process.env.NEXT_PUBLIC_URL_PUBLIC;
  
  try {
    const response = await axios.get(`/api/proxy/public/feed/user/${name}`);
    return response.data;
    
  } catch (err) {
    console.log("Falha ao carregar buscas usuário "+err)
    return null;
  }
}