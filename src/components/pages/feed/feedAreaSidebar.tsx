import { Avatar } from "@/components/avatar";
import { UserType } from "@/types/userType";

type Props = {
  users:UserType[];
}
export const FeedAreaSidebar = (users:Props) => {
  
  return (
    <div
      className="w-0 hidden min-h-160 md:flex flex-col bg-gray-900 my-5 mx-3 rounded-s-sm md:w-1/4 
      lg:w-1/5 gap-7  h-4/5 right-0 items-center justify-start py-10 text-gray-400 px-2"
    >{users.users.map((user, index) => (
      //index >= 5 &&
      <div key={user.id} className="flex w-full px-3 gap-3 border-b border-gray-400">
        <Avatar name={user.name} />
        <p className="text-lg flex items-center h-13  ">
          {user.name}
        </p>
      </div>
    ))
    }
    </div>
  );
}