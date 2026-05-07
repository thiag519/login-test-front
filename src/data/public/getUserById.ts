import { UserByIdInfoType } from "@/types/userByIdInfoType";
import axios from "axios";

export const getUserById = async (id: number | null):Promise<UserByIdInfoType | null>=> {
 
  //console.log(id)
  try {
    const response = await axios.get(`http://localhost:3001/public/feed/user/info/${id}`);
    //console.log(response.data);
    return response.data;
  } catch (err) {
    console.log("Falha ao carregar  "+err)
    return null;
  }
}