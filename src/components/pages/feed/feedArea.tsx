import { FeedAreaPosts } from "./feedAreaPosts";
import { FeedAreaSidebar } from "./feedAreaSidebar";
import { Footer } from "./footer";

export const FeedArea = () => {
  return (
    
      <div
        className="w-full h-[93vh] mt-16 flex items-start justify-center
        bottom-0"
      >
        <div className=" w-0 left-0 mx-3 my-5 rounded-2xl hidden md:flex md:w-1/4 
        lg:w-1/5 h-4/5 items-center justify-center bg-emerald-900">
          anucios
        </div>
        <FeedAreaPosts />
        <FeedAreaSidebar />
      </div>
      
    
    
  );
}