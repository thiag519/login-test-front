"use client"

import { useState } from "react";
import { Path, UseFormRegister } from "react-hook-form";

export interface IFormValues {
  name?:string;
  email?:string;
  password?:string;
  title?: string;
  content?:string; 
}

type Props = {
  label:Path<IFormValues>
  register: UseFormRegister<IFormValues>
  placeholder: string;
  type: string;
}

export const Input = ({placeholder,type,label, register}:Props) => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <>
      <label className={`w-full min-h-1 sm:h-1/4 text-xl text-transparent `}>
        {label}
      </label>
      <input
        className={`w-full text-start min-h-12 max-h-13 text-sm relative
        text-gray-400  border bg-gray-800/30 border-gray-600 rounded-xl px-5 shadow-2xl 
        hover:bg-gray-800/70 hover:border-gray-800 outline-0`}
        minLength={3}
        maxLength={100}
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