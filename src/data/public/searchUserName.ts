
import { SearchUserNameType } from "@/types/searchUserNameType";
import axios from "axios";

export const searchUserName = async (name: string):Promise<SearchUserNameType | null>=> {
  
  try {
    const response = await axios.get(`http://localhost:3001/public/feed/user/${name}`);
      //console.log(response.data);
    return response.data;
  } catch (err) {
    console.log("Falha ao carregar  "+err)
    return null;
  }
}