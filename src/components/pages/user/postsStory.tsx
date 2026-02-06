"use client";

import { Avatar } from "@/components/avatar";
import { Button } from "@/components/button";
import { useIdUser } from "@/components/hooks/useIdUser";
import { PostArea } from "@/components/postArea";
import { PostTypeStory } from "@/types/postTypeStory";



type Props = {
  userPosts: PostTypeStory[] | null | undefined;
};

export const PostsStory = ({ userPosts }: Props) => {
  
  const { userId, setUserId } = useIdUser();

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
      {userPosts?.map((post) => (
        //console.log("em post", post),
        <div key={post.post.id} className="w-4/5 max-w-100 min-w-90 h-auto my-10">
          <div
            className="w-full h-auto border-b-2 rounded-sm bg-gray-900 border-gray-400 
                flex flex-col p-6"
          >
            <div className="w-full flex items-center justify-around gap-10 border-b border-gray-400 p-3">
              <Avatar name={post.post.author.name || "No Name"} />
              <p className="text-xl text-gray-400">
                {post.post.author.name || "No Name"}
              </p>
            </div>
            <PostArea
              titlePost={` ${post.post.title}`}
              contentPost={`${post.post.content}`}
            />
            <p className="w-full h-5 text-sm text-end  text-gray-500">
              {post.post.createdAt.toString().slice(0, 10)}
            </p>
          </div>
          <div className="w-full h-auto flex items-center justify-between py-2 ">
            <Button
              name={`${post.post.reactUp} Up`}
              width={40}
              height={10}
              color="SteelBlue"
              onClick={() =>{} }
            />
            <Button
              name={`${post.post.reactDown} Down`}
              width={40}
              height={10}
              color="Tomato"
              onClick={() =>{} }
            />
          </div>
        </div>
      ))}
     
    </>
  );
};
