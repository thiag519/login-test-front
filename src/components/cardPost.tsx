
import { Post } from "./post";
import { useEffect, useState } from "react";
import { PostsAreaType } from "@/types/postsAreaType";
import { getPosts } from "@/data/public/getPosts";
import { UserType } from "@/types/userType";

type Props = {
  author:number;
  name:string;
}

export const CardPost = ({ author, name}:Props) => {

  const [postsI, setPostsI]= useState<PostsAreaType | null>(null);
    
    useEffect(()=> {getPosts().then(setPostsI).catch(console.error)},[]);
    if(!postsI)return null;
    const post = postsI.posts;
    const postUser = post.filter(e => e.userId === author)
    console.log(postUser)

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Post userPosts={postUser} name={name} />
    </div>
  );
}