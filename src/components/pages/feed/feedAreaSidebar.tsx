import { Avatar } from "@/components/avatar";
import { setFullName } from "@/utils/setFullName";

const name = 'thiago souza'
export const FeedAreaSidebar = () => {
  let fullName = setFullName(name);
  return (
    <div className="w-0 hidden md:flex md:w-1/4 gap-3 fixed h-full right-0 items-start justify-center py-10">
      <Avatar name="thiago souza" />
      <p className="text-xl flex items-center h-13  ">
        {fullName![0]} {fullName ? fullName[1] : ""}
      </p>
    </div>
  );
}