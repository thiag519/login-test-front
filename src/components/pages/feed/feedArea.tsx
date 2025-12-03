import { FeedAreaPosts } from "./feedAreaPosts";
import { FeedAreaSidebar } from "./feedAreaSidebar";

export const FeedArea = () => {
  return (
    <div
      className="w-full h-[93vh] border-t-2 border-gray-600 flex items-start justify-center
    fixed bottom-0">
      <div className=" w-0 left-0 fixed hidden md:flex md:w-1/4 h-full items-center justify-center bg-emerald-900">anucios
      </div>
      <FeedAreaPosts />
      <FeedAreaSidebar />
    </div>
  );
}