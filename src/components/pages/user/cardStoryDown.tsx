import { useEffect, useState } from "react";
import { PostsAreaType } from "@/types/postsAreaType";
import { getPosts } from "@/data/public/getPosts";
import { Post } from "@/components/post";
import axios from "axios";
import { PostType } from "@/types/postType";

type Props = {
  userId: number | null;
};
export const CardStoryDown = ({ userId }: Props) => {
  const [arrNumberOfPostsDown, setArrNumberOfPostsDown] = useState<number[]>([]);
  const [postsI, setPostsI] = useState<PostsAreaType | null>(null);

  const handlePostsStoryDown = async () => {
    try {
      if (!userId) return;
      const res = await axios.get(
        `api/proxy/private/user/historico/voteDown/${userId}`,
      );
      setArrNumberOfPostsDown(
        res.data.historyUserVoteDown.map((p: any) => p.postId),
      );
      //console.log("userId dentro do CardStoryDown: ", userId, arrNumberOfPostsDown);
    } catch (error) {
      console.error("Erro ao buscar posts com mais votos Down:", error);
    }
  };
  //console.log("arrNumberOfPostsDown: ", arrNumberOfPostsDown);
  useEffect(() => {
    handlePostsStoryDown();
    getPosts().then(setPostsI).catch(console.error);
  }, [userId]);

  const post: PostType[] | undefined = postsI?.posts;
  const filteredPostsDown = post?.filter((p) =>
    arrNumberOfPostsDown.includes(p.id),
  );
  //console.log("filteredPostsDown: ", filteredPostsDown);
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Post userPosts={filteredPostsDown} />
    </div>
  );
};
