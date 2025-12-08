import { setShortName } from "@/utils/setShortName";

type Props = {
  name: string | undefined;
}
export const Avatar = ({name}:Props) => {
  
  return (
    <div
      className=" rounded-full w-10 h-10 bg-gray-600 flex items-center 
    justify-center text-xl text-gray-400"
    >{name?.charAt(0)?.toUpperCase()}
      {name?.split(' ')[1]?.charAt(0).toUpperCase()}
    </div>
  );
}