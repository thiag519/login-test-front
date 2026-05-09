"use client"

import { Avatar } from "./avatar";
import { Button } from "./button";
import { PostArea } from "./postArea";
import { PostType } from "@/types/postType";
import { useIdUser } from "./hooks/useIdUser";
import { useSetPagePosts } from "./hooks/useSetPagePosts";
import {deletePost} from '../data/private/deletePost';
import {setVoteUp} from "../data/private/setVoteUp";
import { setVoteDown } from "@/data/private/setVoteDown";
import { ButtonPost } from "./pages/user/buttonPost";
import { useActiveOpenModal } from "./hooks/useActiveCreatePost";
import imgPlus from "../../public/images/icons8-plus-24.png";

type Props = {
 userPosts: PostType[] | null;
 userValidation: boolean;
};

export const Post = ({userPosts, userValidation}:Props) => {
  const {userId} = useIdUser();
  const {pages, setMorePagesPost} = useSetPagePosts();
  const { toggleActive} = useActiveOpenModal();

  const handleVoteUp = (postId: number, userId: number|null) => {
    setVoteUp(postId, userId);
  };
  const handleVoteDown = (postId: number, userId: number| null) => {
    setVoteDown(postId, userId);
  };

  return (
    <>
      {!userPosts?.length && (
        <div className="flex flex-col gap-20 items-center justify-center w-full max-w-100 min-w-90 h-100 my-10 ">
          <div className="w-full rounded-sm text-gray-400 text-center text-2xl">
            Vamos validar algo!
          </div>
          <div className="text-gray-400">
            <ButtonPost
              img={imgPlus}
              text="Criar post"
              onClick={() => {
                toggleActive();
              }}
            />
          </div>
        </div>
      )}
      {userPosts?.map((post) => (
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
            {userValidation && (
              <div className="flex w-auto h-auto m-5 bottom-0 left-0 absolute">
                <button
                  className="text-[12px] text-gray-200 bg-gray-500 py-1 px-2 rounded-xl"
                  onClick={() => deletePost(post.id)}
                >
                  Excluir
                </button>
              </div>
            )}
            <p className="w-full h-5 text-sm text-end  text-gray-500">
              {post.createdAt.toString().slice(0, 10)}
            </p>
          </div>
          <div className="w-full h-auto flex items-center justify-between py-2 ">
            <Button
              name={`${post.reactUp} Up`}
              width={40}
              height={10}
              color="SteelBlue"
              onClick={() => handleVoteUp(post.id, userId)}
            />
            <Button
              name={`${post.reactDown} Down`}
              width={40}
              height={10}
              color="Tomato"
              onClick={() => handleVoteDown(post.id, userId)}
            />
          </div>
        </div>
      ))}
      <div
        className={`flex w-full h-full ${userValidation ? "hidden" : "flex"}`}
      >
        {userPosts && userPosts?.length > 4 && (
          <div
            className={` h-full w-full ${userPosts.length == pages + 1 ? "hidden" : "flex"} justify-center items-end 
            text-sm text-gray-400`}
          >
            <Button
              name={`${userPosts.length == pages ? "Acabou" : "Próximos.."} `}
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

/**
 * 
 *  <ButtonPost
              img={imgPlus}
              text="Criar post"
              onClick={() => {
                toggleActive();
              }}
            />
 */