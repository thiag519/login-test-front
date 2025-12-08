
import { useEffect, useState } from "react";
import { PostsAreaType } from "@/types/postsAreaType";
import { getPosts } from "@/data/getPosts";
import { Post } from "@/components/post";

type Props = {
  author:number;
  name:string;
}

export const CardUser = ({ author, name}:Props) => {

  const [postsI, setPostsI]= useState<PostsAreaType | null>(null);
    
    useEffect(()=> {getPosts().then(setPostsI).catch(console.error)},[]);
    if(!postsI)return null;
    const post = postsI.posts;
    const postUser = post.filter(e => e.userId === author)
    console.log(postUser)

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Post
        name={name}
        userPosts={postUser}
      />
    </div>
  );
}