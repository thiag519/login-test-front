import { UsersAreaType } from "@/types/usersAreaType";
import axios from "axios";

export const getUsers = async (page: number):Promise<UsersAreaType | null> => {
  const apiUrl = process.env.NEXT_URL_PUBLIC;
  
  try {
    const response = await axios.get(`${apiUrl}/users/${page || 1}`);
      //console.log(response);
 
    return response.data;
  } catch (err) {
    console.log("Falha ao carregar posts. "+err)
    return null;
  }
}