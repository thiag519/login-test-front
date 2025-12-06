"use client"

import { Button } from "@/components/button";
import { useActive } from "@/components/hooks/useActive";
import { Input } from "@/components/input";

export const CreatePost = () => {
  const {active, toggleActive} = useActive();
  return (
    <div
      className={`items-center justify-center w-full h-full min-h-150 absolute 
     flex bg-white/20`}
    >
      <div
        className="flex flex-col items-center justify-between md:rounded-xl w-full
       md:w-7/10 lg:w-2/4 max-w-2xl h-7/10  bg-gray-900"
      >
        <div className="w-full h-1/4 flex items-center justify-center relative">
          <h1 className="text-3xl text-gray-400">
            Conte-nos sua idéia!
            <button
              onClick={toggleActive}
              className="right-0 top-0 p-3 absolute cursor-pointer hover:bg-gray-500/25 rounded-full"
            >X</button>
          </h1>
        </div>
        <form
          action=""
          className="gap-3 p-4 flex-col w-full h-1/2  flex items-center justify-around"
        >
          <label className="text-sm  text-gray-400 w-9/10 md:w-3/5 max-w-300">
            Titulo
            <Input
              type="text"
              value=""
              onChange={() => {}}
              placeholder="Digite um titulo..."
            />
          </label>
          <label className="text-sm h-full text-gray-400 w-9/10 md:w-3/5 max-w-300 ">
            Descrição
            <textarea
              placeholder="Digite sua ideia..."
              className="w-full h-4/5 rounded-xl border border-gray-600 bg-gray-800/30
            shadow-2xl hover:bg-gray-800 hover:border-gray-800 outline-0 p-5"
            ></textarea>
          </label>
        </form>
        <div className="w-full h-1/4 flex items-center justify-center">
          <Button size={30} name="Enviar" color="gray" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}