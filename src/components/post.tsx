"use client"

import { useEffect, useState } from "react";
import { Button } from "./button";
import { PostArea } from "./postArea";
import { UserPost } from "./userPoat";
import { getPosts } from "@/data/getPosts";
import { PostType } from "@/types/postType";
import { PostsAreaType } from "@/types/postsAreaType";
import { setFullName } from "@/utils/setFullName";
import { UsersAreaType } from "@/types/usersAreaType";
import { getUsers } from "@/data/getUsers";


type Props = {
  posts: PostType[]
};

export const Post = () => {
  const handleVoteUpButton = () => {};
  const handleVoteDownButton = () => {};

  const [posts, setPosts]= useState<PostsAreaType | null>(null);
  useEffect(()=> {getPosts().then(setPosts).catch(console.error).finally()},[]);
  if(!posts)return;
  const post = posts.posts;
  console.log(post)
  return (
    <>
      {post.map(
        (item, i) => (
          (
            <div key={i} className="w-4/5 max-w-100 min-w-90 h-auto my-10">
              <div
                className="w-full h-auto border-b-2 rounded-2xl bg-gray-900 border-gray-400 
          flex flex-col p-6"
              >
                
                <PostArea
                  titlePost={` ${item.title}`}
                  contentPost={`${item.content}`}
                />
                <p className="w-full h-5 text-sm text-end  text-gray-500">
                  {item.createdAt.toString().slice(0, 10)}</p>
              </div>
              <div className="w-full h-auto flex items-center justify-between py-2 ">
                <Button
                  name={`${item.reactUp} Up`}
                  size={40}
                  color="SteelBlue"
                  onClick={handleVoteUpButton}
                />

                <Button
                  name={`${item.reactDown} Down`}
                  size={40}
                  color="Tomato"
                  onClick={() => {}}
                />
              </div>
            </div>
          )
        )
      )}
    </>
  );    
}