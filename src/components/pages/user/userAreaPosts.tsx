import { useEffect, useState } from "react";
import { PostType } from "@/types/postType";
import axios from "axios";
import { Post } from "@/components/post";
type Props = {
  author: number|null;
}
export const UserAreaPosts = ({author}:Props) => {
  //console.log("userId no userAreaPosts", user);
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
    };
    fetchPosts();
  }, []);

  return (
    <div
      className="w-full md:w-1/2 h-9/10 my-13 flex flex-col items-center justify-center 
      scroll-m-0"
    ><div
        style={{
          scrollbarWidth: "none",
        }}
        className="w-full h-full overflow-y-scroll flex flex-col items-center"
      ><div className="w-full flex items-center justify-center flex-col">
            <Post userPosts={postUser} userValidation={true} />
          </div>
      </div>
    </div>
  );
};