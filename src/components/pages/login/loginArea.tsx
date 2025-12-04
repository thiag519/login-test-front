"use client"

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Link from "next/link";

export const LoginArea = () => {
  return (
    <div className="flex rounded-3xl w-4/5 md:w-7/10 lg:w-3/5 h-7/10 bg-gray-900">
      <div className="hidden md:flex w-2/5  lg:w-2/4 h-full "></div>
      <div
        className="flex flex-col items-center justify-center w-full md:w-3/5 lg:2/4 h-full rounded-3xl
       bg-amber-50/30 px-4 md:px-6 lg:px-10 gap-10"
      >
        <h1 className="text-4xl text-gray-400 ">Login</h1>
        <div className="h-0.5 w-full bg-gray-400"></div>
        <form className="w-full">
          <label className="w-full text-gray-400 ">
            Email
            <Input
              type="email"
              value=""
              placeholde="Digite seu e-mail..."
              onChange={() => {}}
            />
          </label>
          <label className="w-full text-gray-400">
            Senha
            <Input
              type="password"
              value=""
              placeholde="Digite sua senha..."
              onChange={() => {}}
            />
          </label>
        </form>
        <Button size={100} name="Enviar" color="gray" onClick={() => {}} />
        <div className="h-0.5 w-full bg-gray-400"></div>
        <Link className="text-sm text-gray-400" href={"/cadastro"}>
          Ainda não possue conta?
          <u className="font-bold"> Faça seu Cadastro.</u>{" "}
        </Link>
      </div>
    </div>
  );
}