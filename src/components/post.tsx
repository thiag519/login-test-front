"use client"

import { Avatar } from "./avatar";
import { Button } from "./button";
import { PostArea } from "./postArea";
import { PostType } from "@/types/postType";


type Props = {
 userPosts: PostType[];
 name:string;
};

export const Post = ({userPosts,name}:Props) => {
  const handleVoteUpButton = () => {};
  const handleVoteDownButton = () => {};

  return (
    <>
      {userPosts.map((post) => (
        <div key={post.id} className="w-4/5 max-w-100 min-w-90 h-auto my-10">
          <div
            className="w-full h-auto border-b-2 rounded-2xl bg-gray-900 border-gray-400 
            flex flex-col p-6"
          ><div className="w-full flex items-center justify-around gap-10 border-b border-gray-400 p-3"
            > <Avatar name={name} />
              <p className="text-xl text-gray-400">{name}</p>
            </div>
            <PostArea
              titlePost={` ${post.title}`}
              contentPost={`${post.content}`}
            />
            <p className="w-full h-5 text-sm text-end  text-gray-500">
              {post.createdAt.toString().slice(0, 10)}
            </p>
          </div>
          <div className="w-full h-auto flex items-center justify-between py-2 ">
            <Button
              name={`${post.reactUp} Up`}
              size={40}
              color="SteelBlue"
              onClick={handleVoteUpButton}
            />
            <Button
              name={`${post.reactDown} Down`}
              size={40}
              color="Tomato"
              onClick={() => {}}
            />
          </div>
        </div>
      ))}
    </>
  );    
}