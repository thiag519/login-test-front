import { CardPost } from "@/components/cardPost";

export const FeedAreaPosts = () => {
  
  return (
    <div
      className="w-full md:w-1/2 h-[90vh] my-3 flex flex-col items-center justify-center overflow-hidden
      scroll-m-0"
    ><div
        style={{
          scrollbarWidth: "none",
        }}
        className="w-full h-full overflow-y-scroll flex flex-col items-center"
      ><CardPost  />
      </div>
    </div>
  );
};
