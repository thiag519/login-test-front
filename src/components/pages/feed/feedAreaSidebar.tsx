import { Avatar } from "@/components/avatar";
import { UserType } from "@/types/userType";

type Props = {
  users:UserType[];
}
export const FeedAreaSidebar = (users:Props) => {
  
  return (
    <div
      className="w-0 hidden md:flex flex-col bg-gray-900 my-5 mx-3 rounded-2xl md:w-1/4 
      lg:w-1/5 gap-7  h-4/5 right-0 items-center justify-start py-10 text-gray-400"
    >{users.users.map( user => (
      <div key={user.id} className="flex gap-3 border-b border-gray-400">
        <Avatar name={user.name} />
        <p className="text-xl flex items-center h-13  ">
          {user.name}
        </p>
      </div>
    ))
    }
    </div>
  );
}