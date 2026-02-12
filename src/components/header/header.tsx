"use client";

import { useEffect, useState } from "react";
import { Button } from "../button";
import { Avatar } from "../avatar";
import Link from "next/link";
import { searchUserName } from "@/data/public/searchUserName";
import { SearchUserNameType } from "@/types/searchUserNameType";
import { useIdUser } from "../hooks/useIdUser";


type Props = {
  name: string | null
}

const Header = ({name}:Props) => { 
  const {userId, setUserId} =  useIdUser();
  const [search, setSearch ] = useState<SearchUserNameType | null>(null);
  const [value, setValue] = useState('');

  useEffect(()=> {
    searchUserName(value).then(setSearch).catch(console.error);

  },[value]);


  const arrName = search?.arrName

  return (
    <header
      className={`w-dvw left-0 top-0 flex-1 py-2
        h-[7vh] min-h-14 flex items-center justify-center z-50 fixed bg-gray-900
      `}
    >
      <div className="w-[80%]  lg:w-7/10 flex items-center justify-between gap-3 ">
        <div className="text-gray-400 text-2xl">LOGO </div>
        <div className="h-full w-full flex items-center justify-end gap-3 ">
          <form
            onSubmit={() => {}}
            className="w-2/4 min-w-40 max-w-130 h-10 top-0"
          >
            <input
              className="w-full min-h-10 sm:h-full text-sm text-gray-400  border bg-gray-800/30 border-gray-600 rounded-xl px-5 
              shadow-2xl hover:bg-gray-800 hover:border-gray-800 outline-0"
              type="search"
              placeholder={"Buscar..."}
              required
              autoComplete="off"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <div
              className={`w-full h-auto ${arrName? 'flex': 'hidden'} flex-col bg-gray-900 border-b p-3 text-gray-500 border-gray-400 rounded-b-lg`}
            >
              {arrName &&
                arrName.map((item, index) => (
                  <ul key={index}>
                    <li>{item}</li>
                  </ul>
                ))}
            </div>
          </form>
          <div className="h-full w-10 ">
            {userId ? (
              <Link href={'/user'}>
                <Avatar name={name} />
              </Link>
            ) : (
              <Link href={'/login'}>
              <div className=" w-10 rounded-full h-10 bg-gray-700 ">
                <Button name="Login" height={10} width={100} color={""} onClick={() => {}} />
              </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
