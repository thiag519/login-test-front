"use client"

import { useState } from "react";
import { Path, useForm, UseFormRegister } from "react-hook-form";

export interface IFormValues {
  "name"?:string;
  "email":string;
  "password":string;
  "pesquisa"?:string;
}

type Props = {
  label:Path<IFormValues>
  register: UseFormRegister<IFormValues>
  placeholder: string;
  type: string;
}

export const Input = ({placeholder,type,label, register}:Props) => {
  //const { register, handleSubmit } = useForm<IFormValues>();
  const [inputValue, setInputValue] = useState<string>('')
  return (
    <>
      <label
        className={`w-full h-1/4 text-xl text-transparent ${label =="pesquisa"? 'hidden': label}`}
      >{label}
      </label>
      <input
        className="w-full h-full text-sm text-gray-400  border bg-gray-800/30 border-gray-600 rounded-xl px-5 
          shadow-2xl hover:bg-gray-800 hover:border-gray-800 outline-0"
        type={type}
        {...register(label)}
        placeholder={placeholder}
        required
        autoComplete="off"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </>
  );
}
//label.charAt(0).toUpperCase().concat(label.substring(1, label.length))