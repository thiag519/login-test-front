import { IFormValues } from "@/components/input";
import axios from "axios";


export const createUser = async (info:IFormValues) => {
  const infoJson = JSON.stringify(info);
  const apiUrl = process.env.URL_PUBLIC;
  try {
    const response = await axios.post(`${apiUrl}/cadastro`,infoJson,{ headers: {
      'Content-Type':'application/json'
      }
    });
    return response.data;
  } catch (err) {
    console.log("Falha ao carregar  "+err)
    return null;
  }
}