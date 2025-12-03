import { Post } from "@/components/post";

export const FeedAreaPosts = () => {
  return (
    <div
      className="w-full md:w-1/2 h-full flex flex-col items-center justify-center scroll-m-0"
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