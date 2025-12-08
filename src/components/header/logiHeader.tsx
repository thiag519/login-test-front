"use client";

import { Avatar } from "@/components/avatar";

const LoginHeader = () => {
  
  return (
    <header
      className={`w-dvw left-0 top-0 flex-1 py-2 h-[7vh] min-h-14 flex items-center 
      justify-center z-50 fixed bg-gray-900`}
    ><div className="w-[80%] flex items-center justify-between gap-3 ">
        <div className="text-3xl text-gray-400">
         Logo
        </div>
        <div className="h-full w-full flex items-center justify-end gap-3 ">
          <div className="h-full ">
            <Avatar name="Thiago souza" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default LoginHeader;