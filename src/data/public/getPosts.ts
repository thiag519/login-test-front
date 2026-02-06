
import { PostsAreaType } from "@/types/postsAreaType";
import axios from "axios";

export const getPosts = async (pages: number):Promise<PostsAreaType | null> => {
  //onst urlPublic = process.env.URL_PUBLIC;
  try {
    const response = await axios.get(`http://localhost:3001/public/feed/${pages || 1}`);
    //console.log("response do getPost",response.data);
 
    return response.data;
  } catch (err) {
    console.log("Falha ao carregar posts. "+err)
    return null;
  }
}