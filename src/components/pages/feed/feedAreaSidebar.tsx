import { Avatar } from "@/components/avatar";
import { setFullName } from "@/utils/setFullName";

const name = 'thiago souza'
export const FeedAreaSidebar = () => {
  let fullName = setFullName(name);
  return (
    <div
      className="w-0 hidden md:flex flex-col bg-gray-950 my-5 mx-3 rounded-2xl md:w-1/4 lg:w-1/5 gap-7
     h-4/5 right-0 items-center justify-start py-10"
    ><div className="flex gap-3">
        <Avatar name="thiago souza" />
        <p className="text-xl flex items-center h-13  ">
          {fullName![0]} {fullName ? fullName[1] : ""}
        </p>
      </div>
      <div className="flex gap-3">
        <Avatar name="thiago souza" />
        <p className="text-xl flex items-center h-13  ">
          {fullName![0]} {fullName ? fullName[1] : ""}
        </p>
      </div>
    </div>
  );
}