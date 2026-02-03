import { useEffect, useState } from "react";
import { PostsAreaType } from "@/types/postsAreaType";
import { getPosts } from "@/data/public/getPosts";
import { Post } from "@/components/post";
import axios from "axios";
import { PostType } from "@/types/postType";

type Props = {
  userId: number | null;
}
export const CardStoryUp = ({userId}: Props) => {
  const [arrNumberOfPostsUp, setArrNumberOfPostsUp] = useState<number[]>([]);
  const [postsI, setPostsI] = useState<PostsAreaType | null>(null);
  
  const handlePostsStoryUp = async () => {
    try {
      if(!userId) return;
      const res = await axios.get(`api/proxy/private/user/historico/voteUp/${userId}`);
      setArrNumberOfPostsUp(res.data.historyUserVoteUp.map((p: any) => p.postId));
      //console.log("userId dentro do CardStoryUp: ", userId, arrNumberOfPostsUp);
    }catch(error) {
      console.error("Erro ao buscar posts com mais votos Up:", error);
    }
  };
  //console.log("arrNumberOfPostsUp: ", arrNumberOfPostsUp);
  useEffect(() => {
    handlePostsStoryUp();
    getPosts().then(setPostsI).catch(console.error);
  }, [userId]);

  const post: PostType[] | undefined = postsI?.posts;
  const filteredPostsUp = post?.filter(p => arrNumberOfPostsUp.includes(p.id));
 //console.log("filteredPostsUp: ", filteredPostsUp);
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Post userPosts={filteredPostsUp} />
    </div>
  );
}