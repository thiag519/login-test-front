import { IFormValues } from "@/components/input";
import axios from "axios";


export const createUser = async (info:IFormValues) => {
  const infoJson = JSON.stringify(info);
  try {
    const response = await axios.post(`http://localhost:3001/public/cadastro`,infoJson,{ headers: {
      'Content-Type':'application/json'
      }
    });
    return response.data;
  } catch (err) {
    console.log("Falha ao carregar  "+err)
    return null;
  }
}