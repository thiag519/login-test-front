"use client"

import { Button } from "./button";
import { PostArea } from "./postArea";
import { UserPost } from "./userPoat";

type Props = {
  name: string;
  titlePost:string;
  contentPost: string;
};

export const Post = () => {

  const handleVoteUpButton = () => {

  }
  const handleVoteDownButton = () => {};

  return (
    <div className="w-4/5 max-w-100 min-w-90 h-auto my-10">
      <div
        className="w-full h-auto border-b-2 rounded-2xl bg-gray-900 border-gray-400 
      flex flex-col p-6"
      >
        <UserPost name="thiago souza" />
        <PostArea
          titlePost={`Titulo Bem legal`}
          contentPost={`Ola meu primeiro poste bem legal para isso que eu estou fazendo
            Ola meu primeiro poste bem legal para isso que eu estou fazendo
            Ola meu primeiro poste bem legal para isso que eu estou fazendo
            Ola meu primeiro poste bem legal para isso que eu estou fazendo
            Ola meu primeiro poste bem legal para isso que eu estou fazendo
            Ola meu primeiro poste bem legal para isso que eu estou fazendo
            Ola meu primeiro poste bem legal para isso que eu estou fazendo`}
        />
      </div>
      <div className="w-full h-auto flex items-center justify-between py-2 ">
        <Button
          name={`${1} Up`}
          size={40}
          color="SteelBlue"
          onClick={() => {}}
        />

        <Button
          name={`${1} Down`}
          size={40}
          color="Tomato"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}