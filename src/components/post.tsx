"use client"

import axios from "axios";
import { Avatar } from "./avatar";
import { Button } from "./button";
import { PostArea } from "./postArea";
import { PostType } from "@/types/postType";
import { useState } from "react";
import { useIdUser } from "./hooks/useIdUser";
import { useSetPagePosts } from "./hooks/useSetPagePosts";



type Props = {
 userPosts: PostType[] |  null | undefined;
};

export const Post = ({userPosts}:Props) => {
  const[voteUp, setVoteUp] = useState(0);
  const[voteDown, setVoteDown] = useState(0);
  const {userId, setUserId} = useIdUser();
  const {pages, setMorePagesPost, setLessPagesPost} = useSetPagePosts();

  const handleVoteUpButton = async (postId: number): Promise<void> => {
    try {
      if(userId) {
        const res = await axios.patch(`/api/proxy/private/post/voteUp/${postId}`);
        setVoteUp(voteUp + 1);
        //console.log(res.status);
      }else {
        alert("Você precisa estar logado para votar!");
      } 
    } catch (err) {
      if(!userId) {
        alert("Você precisa estar logado para votar!");    
      }
      console.log("Erro ao votar", err);
      alert("Você já votou nesse post!");
    }
  };
  //console.log("userId no post", userPosts?.length, pages);

  const handleVoteDownButton = async (postId: number): Promise<void> => {
    try {
      if(userId) {
        const res = await axios.patch(`/api/proxy/private/post/voteDown/${postId}`);
        setVoteDown(voteDown + 1);
        //console.log(res.status);
      }else {
        alert("Você precisa estar logado para votar!");
      }
    } catch (err) {
      if (!userId) {
        alert("Você precisa estar logado para votar!");
      }
      console.log("Erro ao votar", err);
      alert("Você já votou nesse post!");
    }
  };

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
        <div key={post.id} className="w-4/5 max-w-100 min-w-90 h-auto my-10">
          <div
            className="w-full h-auto border-b-2 rounded-sm bg-gray-900 border-gray-400 
                flex flex-col p-6 relative"
          >
            <div className="w-full flex items-center justify-around gap-10 border-b border-gray-400 p-3">
              <Avatar name={post.author.name || "No Name"} />
              <p className="text-xl text-gray-400">
                {post.author.name || "No Name"}
              </p>
            </div>
            <PostArea
              titlePost={` ${post.title}`}
              contentPost={`${post.content}`}
            />
            {userId && (
              <div className="flex w-auto h-auto m-5 bottom-0 left-0 absolute">
                <button className="text-[12px] text-gray-200 bg-gray-500 py-1 px-2 rounded-xl" onClick={()=>{}}>Deletar publicação</button>
              </div>
            )}
            <p className="w-full h-5 text-sm text-end  text-gray-500">
              {post.createdAt.toString().slice(0, 10)}
            </p>
          </div>
          <div className="w-full h-auto flex items-center justify-between py-2 ">
            <Button
              name={`${post.reactUp + voteUp} Up`}
              width={40}
              height={10}
              color="SteelBlue"
              onClick={() => handleVoteUpButton(post.id)}
            />
            <Button
              name={`${post.reactDown + voteDown} Down`}
              width={40}
              height={10}
              color="Tomato"
              onClick={() => handleVoteDownButton(post.id)}
            />
          </div>
        </div>
      ))}
      <div className="flex w-full h-full">
        {userPosts && userPosts?.length > 1 && (
          <div
            className={` h-full w-full ${userPosts.length == pages + 1 ? "hidden" : "flex"} justify-center items-end 
            text-sm text-gray-400`}
          >
            <Button
              name={`${userPosts.length == pages + 1 ? "Acabou" : "Próximos.."} `}
              width={23}
              height={10}
              color=""
              onClick={() => setMorePagesPost()}
            />
          </div>
        )}
      </div>
    </>
  );    
}