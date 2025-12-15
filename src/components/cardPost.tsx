
import { Post } from "./post";
import { useEffect, useState } from "react";
import { PostsAreaType } from "@/types/postsAreaType";
import { getPosts } from "@/data/public/getPosts";
import { PostType } from "@/types/postType";

type Props = {
  author:number;
  name:string;
}

export const CardPost = ({ author, name}:Props) => {
  const [postsI, setPostsI]= useState<PostsAreaType | null>(null);
    
    useEffect(()=> {getPosts().then(setPostsI).catch(console.error)},[]);
    if(!postsI) {
      
      return null;
    };
    const post = postsI.posts;
    const postUser: PostType[] = post.filter(e =>e.userId === author);
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Post userPosts={postUser} name={name} />
    </div>
  );
}