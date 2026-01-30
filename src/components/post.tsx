"use client"

import axios from "axios";
import { Avatar } from "./avatar";
import { Button } from "./button";
import { PostArea } from "./postArea";
import { PostType } from "@/types/postType";
import { useEffect, useState } from "react";
import { UsersAreaType } from "@/types/usersAreaType";
import { getUsers } from "@/data/public/getUsers";
import { FeedAreaCarrying } from "./carrying/feedAreaCarrying";
import { count } from "console";


type Props = {
 userPosts: PostType[]|undefined ;
};

export const Post = ({userPosts}:Props) => {
  const[voteUp, setVoteUp] = useState(0);
  const[voteDown, setVoteDown] = useState(0);


  const handleVoteUpButton = async (postId: number) => {
    console.log(postId);
    try {
      const res = await axios.patch(`/api/proxy/private/post/voteUp/${postId}`);
      setVoteUp(voteUp + 1);
      //console.log(res.status);
    } catch (err) {
      console.log("Erro ao votar", err);
      alert("Erro ao votar!");
    }
  };
  const handleVoteDownButton = async (postId: number) => {
    try {
      const res = await axios.patch(`/api/proxy/private/post/voteDown/${postId}`);
      setVoteDown(voteDown + 1);
      //console.log(res.status);
    } catch (err) {
      console.log("Erro ao votar", err);
      alert("Erro ao votar!");
    }
  };

  const [users, setUsers]= useState<UsersAreaType | null>(null);
    useEffect(()=> {getUsers().then(setUsers).catch(console.error)},[]);
    if(!users) {

      return <FeedAreaCarrying />;
    }
    const user = users.users; 

  
  //console.log(userPosts?.filter(post => post.id ));
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
          //console.log(post),
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
                  <Avatar name={post.author.name} />
                  <p className="text-xl text-gray-400">{post.author.name}</p>
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
                  name={`${post.reactUp + voteUp} Up`}
                  size={40}
                  color="SteelBlue"
                  onClick={() => handleVoteUpButton(post.id)}
                />
                <Button
                  name={`${post.reactDown + voteDown} Down`}
                  size={40}
                  color="Tomato"
                  onClick={() => handleVoteDownButton(post.id)}
                />
              </div>
            </div>
          )
        )
      )}
    </>
  );    
}