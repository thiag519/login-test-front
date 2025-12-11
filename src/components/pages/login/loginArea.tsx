"use client"

import { IFormValues, Input } from "@/components/input";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

export const LoginArea = () => {
  const {register, handleSubmit} = useForm<IFormValues>();
  const onSubmit:SubmitHandler<IFormValues> = (data:IFormValues) => {console.log(JSON.stringify(data))};
  
  return (
    <div className="flex rounded-lg w-9/10 md:w-7/10 lg:w-3/5 h-7/10 bg-gray-900 lg:justify-between min-h-80">
      <div className="hidden md:flex w-2/5 lg:w-2/4 h-full min-h-80 "> </div>
      <div
        className="flex flex-col items-center justify-center w-full md:w-3/5 lg:w-2/4 h-full rounded-lg
       bg-amber-50/30 px-4 md:px-6 lg:px-10 gap-7 sm:gap-10 max-w-120 sm:min-w-110 min-h-80"
      >
        <h1 className="sm:text-4xl text-3xl text-gray-400">Login</h1>
        <div className="h-0.5 w-full bg-gray-400"></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full sm:h-2/6 h-2/5 flex flex-col "
        >
          <Input
            type="email"
            label="email"
            register={register}
            placeholder="Digite seu e-mail..."
          />
          <Input
            type="password"
            label="password"
            register={register}
            placeholder="Digite sua senha..."
          />
          <label className="w-full h-1/4 mt-6">
            <input
              className={`px-4 h-10 w-full bg-[#808080] text-white flex text-[12px] text-center rounded-3xl gap-1.5
              items-center justify-center shadow-2xl cursor-pointer hover:opacity-80`}
              type="submit"
            />
          </label>
        </form>
        <div className="h-0.5 w-full bg-gray-400"></div>
        <Link
          className="sm:text-sm text-[12px] text-gray-400"
          href={"/cadastro"}
        >
          Ainda não possue conta?
          <u className="font-bold"> Faça seu Cadastro.</u>
        </Link>
      </div>
    </div>
  );
}