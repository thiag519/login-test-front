"use client";

import { Avatar } from "@/components/avatar";
import { MenuLine } from "../pages/user/menu-line";

type Props = {
  name: string;
}

const UserHeader = ({name}: Props) => {
  return (
    <header
      className={`w-dvw left-0 top-0 flex-1 py-2 h-[7vh] min-h-14 flex items-center 
      justify-center z-50 fixed bg-gray-900`}
    ><div className="w-[80%] flex items-center justify-between gap-3 ">
        <div className="text-3xl text-gray-400">
         Logo
        </div>
        <div className="h-full w-full flex items-center justify-end gap-10">
          <div className="h-full ">
            <Avatar name={name} />   
          </div>
          <div className="h-16 w-0 flex items-center justify-center">
            <MenuLine/>
          </div> 
        </div>
      </div>
    </header>
  );
};
export default UserHeader;
