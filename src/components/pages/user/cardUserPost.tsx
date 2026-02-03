
import { useEffect, useState } from "react";
import { PostsAreaType } from "@/types/postsAreaType";
import { getPosts } from "@/data/public/getPosts";
import { Post } from "@/components/post";

type Props = {
  author:number;
}

export const CardUser = ({ author}:Props) => {

  const [postsI, setPostsI]= useState<PostsAreaType | null>(null);
    
    useEffect(()=> {getPosts().then(setPostsI).catch(console.error)},[]);
    if(!postsI)return null;
    const post = postsI.posts;
    const postUser = post.filter(e => e.userId === author);

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Post
        userPosts={postUser}
      />
    </div>
  );
}