
import { UserType } from "@/types/userType";
import { CardUser } from "./cardUser";
type Props = {
  user: UserType[];
}
export const UserAreaPosts = (user:Props) => {
  
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
        {user.user.map(u => (
          <CardUser
            key={u.id}
            name={u.name}
            author={u.id}
          />
        ))
        }
      </div>
    </div>
  );
};