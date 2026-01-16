import { UserPost } from "@/components/userPoat";
import { UserType } from "@/types/userType";

type Props = {
  users: UserType[]
}

//{users}:Props
export const FeedAreaPosts = () => {
  
  return (
    <div
      className="w-full md:w-1/2 min-h-170 my-3 flex flex-col items-center justify-center 
      scroll-m-0"
    ><div
        style={{
          scrollbarWidth: "none",
        }}
        className="w-full h-full overflow-y-scroll flex flex-col items-center"
      ><UserPost  />
      </div>
    </div>
  );
};

//key={user.id} users={user}