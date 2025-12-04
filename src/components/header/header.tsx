"use client";

import { useState } from "react";
import { Button } from "../button";
import { Avatar } from "../avatar";
import { Input } from "../input";
import Link from "next/link";

const Header = () => {
  const [active, setActive] = useState(false);
  
  return (
    <header
      className={`w-dvw left-0 top-0 flex-1 py-2
        h-[7vh] min-h-14 flex items-center justify-center z-50 fixed bg-gray-900
      `}
    >
      <div className="w-[80%] flex items-center justify-between gap-3 ">
        <div className="text-gray-400 text-2xl">LOGO</div>
        <div className="h-full w-full flex items-center justify-end gap-3 ">
          <div className="w-2/4 min-w-40 max-w-130 h-10">
            <Input
              value=""
              placeholde="Buscar usuário..."
              type="text"
              onChange={() => {}}
            />
          </div>
          <div className="h-full ">
            {active ? (
              <Avatar name="Thiago souza" />
            ) : (
              <Link href={`/login`}>
                <Button
                  name="Login"
                  size={65}
                  color={"SteelBlue"}
                  onClick={() => {}}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
