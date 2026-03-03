import { useSetPagePosts } from "@/components/hooks/useSetPagePosts";
import { Post } from "@/components/post";
import { getPosts } from "@/data/public/getPosts";
import { PostsAreaType } from "@/types/postsAreaType";
import { PostType } from "@/types/postType";
import { useEffect, useState } from "react";

export const FeedAreaPosts = () => {
  const {pages, setMorePagesPost, setLessPagesPost} = useSetPagePosts();
  const [postsI, setPostsI]= useState<PostsAreaType | null>(null);
  
  useEffect(()=> {getPosts(pages).then(setPostsI).catch(console.error)},[pages]);
  
  const post: PostType[] | undefined = postsI?.posts;
  return (
    <div
      className="w-full md:w-1/2 h-[90vh] my-3 flex flex-col items-center justify-center overflow-hidden
      scroll-m-0"
    ><div
        style={{
          scrollbarWidth: "none",
        }}
        className="w-full h-full overflow-y-scroll flex flex-col items-center"
      ><div className="w-full flex items-center justify-center flex-col">
          <Post userPosts={post} userValidation={false} />
        </div>
      </div>
    </div>
  );
};
