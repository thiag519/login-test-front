
import { UserType } from "@/types/userType";
import { CardUser } from "./cardUserPost";
type Props = {
  user: UserType[];
}
export const UserAreaPosts = (user:Props) => {
  
  return (
    <div
      className="w-full md:w-1/2 h-9/10 my-13 flex flex-col items-center justify-center 
      scroll-m-0"
    ><div
        style={{
          scrollbarWidth: "none",
        }}
        className="w-full h-full overflow-y-scroll flex flex-col items-center"
      >
        {user.user.map(u => (
          <CardUser
            key={u.id}
            author={u.id}
          />
        ))}
      </div>
    </div>
  );
};