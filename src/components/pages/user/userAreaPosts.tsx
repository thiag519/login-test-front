import { Post } from "@/components/post";

export const UserAreaPosts = () => {
  return (
    <div
      className="w-full md:w-1/2 h-9/10 my-3 flex flex-col items-center justify-center 
      scroll-m-0"
    ><div
        style={{
          scrollbarWidth: "none",
        }}
        className="w-full h-full overflow-y-scroll flex flex-col items-center"
      >
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};