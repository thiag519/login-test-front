"use client"

import { useState } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "./input";

type Props = {
  label:Path<IFormValues>
  register: UseFormRegister<IFormValues>
  placeholder: string;
}

export const TextArea = ({placeholder,label, register}:Props) => {
  //const { register, handleSubmit } = useForm<IFormValues>();
  const [inputValue, setInputValue] = useState<string>('')
  return (
    <>
      <label
        className={`w-full min-h-1 sm:h-1/4 text-xl text-transparent`}
      >{label}
      </label>
      <textarea
        className={`w-full pt-2 text-start h-5/6 max-h-9/10 text-sm 
         border bg-gray-800/30 border-gray-600 rounded-xl px-5 shadow-2xl 
        hover:bg-gray-800 hover:border-gray-800 outline-0`}
        {...register(label)}
        placeholder={placeholder}
        required
        autoComplete="off"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></textarea>
    </>
  );
}