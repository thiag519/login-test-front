import { UsersAreaType } from "@/types/usersAreaType";
import axios from "axios";

export const getUsers = async (page: number):Promise<UsersAreaType | null> => {
  //const apiUrl = process.env.NEXT_PUBLIC_URL_PUBLIC;
  
  try {
    const response = await axios.get(`/api/proxy/public/feed/users/${page || 1}`);
      //console.log(response);
 
    return response.data;
  } catch (err) {
    console.log("Falha ao carregar usuários. "+err)
    return null;
  }
}