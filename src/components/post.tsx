"use client"

import { Avatar } from "./avatar";
import { Button } from "./button";
import { PostArea } from "./postArea";
import { PostType } from "@/types/postType";


type Props = {
 userPosts: PostType[]|undefined ;
};

export const Post = ({userPosts}:Props) => {
  const handleVoteUpButton = () => {};
  const handleVoteDownButton = () => {};
  
  console.log(userPosts)
  return (
    <>
      {!userPosts && (
        <div className="w-4/5 max-w-100 min-w-90 h-auto my-10">
          <div
            className="w-full h-auto border-b-2 rounded-sm bg-gray-900 border-gray-400 
            flex flex-col p-6"
          >
            <div className="w-full flex items-center justify-around gap-10 border-b border-gray-400 p-3">
              <Avatar name={"No Name"} />
              <p className="text-xl text-gray-400">{"No Name"}</p>
            </div>
            <div className="w-full flex items-center justify-around gap-10 border-b border-gray-400 p-3">
              <p className="text-xl text-gray-400">Postes não encontrados</p>
            </div>
          </div>
        </div>
      )}
      {userPosts?.map(
        (post) => (
          console.log(post),
          (
            <div
              key={post.id}
              className="w-4/5 max-w-100 min-w-90 h-auto my-10"
            >
              <div
                className="w-full h-auto border-b-2 rounded-sm bg-gray-900 border-gray-400 
                flex flex-col p-6"
              >
                <div className="w-full flex items-center justify-around gap-10 border-b border-gray-400 p-3">
                  <Avatar name={post.name} />
                  <p className="text-xl text-gray-400">{post.name}</p>
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
                  onClick={handleVoteDownButton}
                />
              </div>
            </div>
          )
        )
      )}
    </>
  );    
}