"use client"

import { Button } from "@/components/button";
import { useActive } from "@/components/hooks/useActive";
import { IFormValues, Input } from "@/components/input";
import { SubmitHandler, useForm } from "react-hook-form";
import imgPlus from "../../../../public/images/icons8-plus-24.png";
import { ButtonCreatePost } from "./buttonCreatePost";
import { TextArea } from "@/components/textArea";

export const CreatePost = () => {
  const {active, toggleActive} = useActive();

  const {register, handleSubmit,formState:{errors}, reset} = useForm<IFormValues>();
  
    const onSubmit:SubmitHandler<IFormValues> = async (data:IFormValues) => {
      console.log(data);
      //console.log(JSON.stringify(data));
      //const result = await createUser(data as RegisterType);
      /*console.log("Result no cadastro: ",result.userData);
      if(result.success){
        reset();
        router.push("/login");
      };*/
    };
  return (
    <div
      className={`items-center justify-center w-full h-full min-h-150 absolute 
     flex bg-white/20`}
    >
      <div
        className="flex flex-col rounded-sm items-center justify-between md:rounded-xl w-full
       md:w-7/10 lg:w-2/4 max-w-2xl h-7/10  bg-gray-900"
      >
        <div className="w-full h-1/4 flex items-center justify-center relative">
          <h1 className="text-3xl text-gray-400">
            Crie sua proposta!
          </h1>
            
            <div 
              className="right-0 top-0 p-2 mt-3 absolute cursor-pointer hover:bg-gray-500/25 rounded-full  
              mr-3 rotate-45">
              <ButtonCreatePost text="" img={imgPlus} onClick={toggleActive} />
            </div>
          
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="gap-3 p-4 flex-col w-full h-2/3  flex items-center justify-around"
        >
          <div className="text-sm h-1/3 text-gray-400 w-9/10 md:w-3/5 max-w-300">
  
            <Input
              type="text"
              label="title"
              register={register}
              placeholder="Digite um titulo..."
            />
          </div>
          <div className="text-sm h-2/3 text-gray-400 w-9/10 md:w-3/5 max-w-300 ">
            <TextArea
              label="content"
              register={register}
              placeholder="Digite sua ideia..."
            />
          </div>
          <div className="w-full h-1/4 flex items-center justify-center">
            <Button
              size={30}
              name="Enviar"
              color="gray"
              onClick={() => {
                handleSubmit(onSubmit);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
/**className="rounded-xl border border-gray-600 bg-gray-800/30
            shadow-2xl hover:bg-gray-800 hover:border-gray-800 outline-0 p-5" */