
import { Post } from "./post";
import { useEffect, useState } from "react";
import { PostsAreaType } from "@/types/postsAreaType";
import { getPosts } from "@/data/public/getPosts";
import { PostType } from "@/types/postType";

//{ author, name}:Props
export const CardPost = () => {

  const [postsI, setPostsI]= useState<PostsAreaType | null>(null);

  useEffect(()=> {getPosts().then(setPostsI).catch(console.error)},[]);

  const post: PostType[] | undefined = postsI?.posts;
  //console.log(post?.length);
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Post userPosts={post} />
    </div>
  );
}