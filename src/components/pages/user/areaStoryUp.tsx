import { useEffect, useState } from "react";
import axios from "axios";
import { PostTypeStory } from "@/types/postTypeStory";
import { PostsStory } from "./postsStory";

type Props = {
  userId: number | null;
}
export const CardStoryUp = ({userId}: Props) => {
  const [postsVoteUp, setPostsVoteUp] = useState<PostTypeStory[] | null>(null);

  const handlePostsStoryUp = async () => {
    try {
      if (!userId) return;
      const res = await axios.get(
        `api/proxy/private/user/historico/voteUp/${userId}`,
      );
      setPostsVoteUp(res.data.postsUp);
      //console.log("res.data.post", res.data.postsUp);
    } catch (error) {
      console.error("Erro ao buscar posts com mais votos Up:", error);
    }
  };
  useEffect(() => {
    handlePostsStoryUp();
  }, [userId]);
 // console.log("postsVoteUp", postsVoteUp?.map(e=>e.post.author));

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <PostsStory userPosts={postsVoteUp} />
    </div>
  );
}