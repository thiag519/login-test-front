import { useEffect, useState } from "react";
import axios from "axios";
import { PostTypeStory } from "@/types/postTypeStory";
import { PostsStory } from "./postsStory";


type Props = {
  userId: number | null;
};
export const CardStoryDown = ({ userId }: Props) => {
  const [postsVoteDown, setPostsVoteDown] = useState<PostTypeStory[] | null >(null);

  const handlePostsStoryDown = async () => {
    try {
      if (!userId) return;
      const res = await axios.get(`api/proxy/private/user/historico/voteDown/${userId}`);
      setPostsVoteDown(res.data.postsDown);
    } catch (error) {
      console.error("Erro ao buscar posts com mais votos Down:", error);
    }
  };
  useEffect(() => {
    handlePostsStoryDown();
  }, [userId]);

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <PostsStory userPosts={postsVoteDown} />
    </div>
  );
};
