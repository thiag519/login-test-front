import { IFormValues } from "@/components/input";
import axios from "axios";

export const createPost = async (userId: number, post:IFormValues) => {
  
    try {
      const res = await axios.post(`/api/proxy/private/create/post/${userId}`, post);
      console.log("Status", res.status, post)
      return res.data;
    } catch (err) {
      console.error("Erro ao criar o post:", err);
      alert("Erro ao criar o post!"); 
    }
}