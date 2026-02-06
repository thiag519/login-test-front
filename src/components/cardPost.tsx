
import { Post } from "./post";
import { useEffect, useState } from "react";
import { PostsAreaType } from "@/types/postsAreaType";
import { getPosts } from "@/data/public/getPosts";
import { PostType } from "@/types/postType";
import { useSetPagePosts } from "./hooks/useSetPagePosts";

//{ author, name}:Props
export const CardPost = () => {
  const {pages, setMorePagesPost, setLessPagesPost} = useSetPagePosts();

  const [postsI, setPostsI]= useState<PostsAreaType | null>(null);

  useEffect(()=> {getPosts(pages).then(setPostsI).catch(console.error)},[pages]);

  const post: PostType[] | undefined = postsI?.posts;

  //console.log("posts no feed",post);
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Post userPosts={post} />
    </div>
  );
}