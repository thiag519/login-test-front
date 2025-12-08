import { UserPost } from "@/components/userPoat";
import { UserType } from "@/types/userType";

type Props = {
  users: UserType[]
}

export const FeedAreaPosts = ({users}:Props) => {
  
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
      {users?.map((user) => (
        <UserPost
          key={user.id}
          users={user}
        />
        )) 
      }
      </div>
    </div>
  );
};