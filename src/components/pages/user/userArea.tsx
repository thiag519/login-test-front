import { NavBar } from "@/components/navBar";
import { UserAreaPosts } from "./userAreaPosts";
import { UserAreaSidebar } from "./userAreaSidebar";

export const UserArea = () => {
  return (
    
    <div
      className="w-full lg:w-4/5 h-[93vh] mt-16 flex items-start justify-center
      bottom-0"
    >
      <div className=" w-0 left-0 mx-3 my-5 rounded-2xl hidden md:flex md:w-1/4 
      lg:w-1/5 h-4/5 items-center justify-center bg-gray-900/50 text-gray-400">
        anucios
      </div>
      <UserAreaPosts/>
      <UserAreaSidebar/>
      <NavBar/>
    </div> 
  );
}