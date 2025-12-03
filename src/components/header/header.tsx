"use client";

import { Activity, useState } from "react";
import { Button } from "../button";
import { MenuLine } from "./menu-line";
import { Avatar } from "../avatar";
import { Search } from "../pages/feed/search";

const Header = () => {
  const [active, setActive] = useState(false)
  return (
    <header
      className={`w-dvw left-0 shadow-md top-0 flex-1 py-2
        h-[7vh] flex items-center justify-center z-50 fixed `}
    ><div className="w-[80%] flex items-center justify-between ">
        <div>LOGO</div>
        <div className="h-full flex items-center justify-center gap-2 ">
          <Search/>
          <div className="w-20 h-full ">
            { active ?
            <Avatar
              name="Thiago souza"/>
              :
            <Button
              name="Login"
              size={40}
              color="blue"
              onClick={()=>{}}
            />
            }
              
          </div>
         
        </div>
        
      </div>
    
    </header>
  );
};
export default Header;
