import { UsersAreaType } from "@/types/usersAreaType";
import axios from "axios";

export const getUsers = async (page: number):Promise<UsersAreaType | null> => {
  //onst urlPublic = process.env.URL_PUBLIC;
  
  try {
    const response = await axios.get(`http://localhost:3001/public/users/${page || 1}`);
      //console.log(response);
 
    return response.data;
  } catch (err) {
    console.log("Falha ao carregar posts. "+err)
    return null;
  }
}