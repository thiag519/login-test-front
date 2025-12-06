"use client"

type Props = {
  placeholder: string;
  value: string;
  type: string;
  onChange:() => void;
}

export const Input = ({placeholder,value, type, onChange}:Props) => {
  return (
    <input
      className="w-full h-11 border bg-gray-800/30 border-gray-600 rounded-xl px-5 
      shadow-2xl hover:bg-gray-800 hover:border-gray-800 outline-0"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}