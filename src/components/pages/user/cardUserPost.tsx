
import { useEffect, useState } from "react";
import { Post } from "@/components/post";
import axios from "axios";
import { PostType } from "@/types/postType";

type Props = {
  author:number|null;
}

export const CardUser = ({ author}:Props) => {
  const [postUser, setPostUser] = useState<PostType[] | null>(null);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`/api/proxy/private/posts/${author}`);
        setPostUser(res.data.posts);
       //console.log("Posts do usuário carregados", res.data.posts);
      } catch (error) {
        console.log("Erro ao buscar posts do usuário", error);
      }
      
    }
    fetchPosts();
  }, []);
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Post
        userPosts={postUser}
      />
    </div>
  );
}