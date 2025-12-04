import { setFullName } from "@/utils/setFullName";
import { Avatar } from "./avatar";

type Props = {
  name: string;
}
export const UserPost = ({name}:Props) => {
  let fullName = setFullName(name) as string[];
  return (
    <div className="w-full flex items-center justify-around gap-10 border-b
     border-gray-400 p-3">
      <Avatar
      name={name} />
      <p className="text-xl text-gray-400">{fullName![0]} {fullName? fullName[1]: '' }</p>
    </div>
  );
} 