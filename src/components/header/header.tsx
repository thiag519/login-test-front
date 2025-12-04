"use client";

import { useState } from "react";
import { Button } from "../button";
import { Avatar } from "../avatar";
import { Search } from "../pages/feed/search";

const Header = () => {
  const [active, setActive] = useState(false);
  
  return (
    <header
      className={`w-dvw left-0 top-0 flex-1 py-2 border-b-2 border-gray-600
        h-[7vh] min-h-14 flex items-center justify-center z-50 fixed bg-gray-950/95 shadow-amber-50`}
    >
      <div className="w-[80%] flex items-center justify-between gap-3 ">
        <div className="">LOGO</div>
        <div className="h-full w-full flex items-center justify-end gap-3 ">
          <Search />
          <div className="h-full ">
            {active ? (
              <Avatar name="Thiago souza" />
            ) : (
              <Button
                name="Login"
                size={40}
                color={" #0073ff"}
                onClick={() => {}}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
