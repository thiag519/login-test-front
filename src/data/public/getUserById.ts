import { UserByIdInfoType } from "@/types/userByIdInfoType";
import axios from "axios";

export const getUserById = async (id: number | null):Promise<UserByIdInfoType | null>=> {
 const apiUrl = process.env.NEXT_PUBLIC_URL_PUBLIC;
  try {
    const response = await axios.get(`${apiUrl}/feed/user/info/${id}`);
    //console.log(response.data);
    return response.data;
  } catch (err) {
    console.log("Falha ao carregar informções do usuário  "+err)
    return null;
  }
}