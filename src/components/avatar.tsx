import { setInitialName } from "@/utils/setShortName";

type Props = {
  name: string|undefined;
}
export const Avatar = ({name}:Props) => {
  const InitialName = setInitialName(name)
  return (
    <div
      className=" rounded-full min-w-10 h-10 bg-gray-600 flex items-center 
    justify-center text-xl text-gray-400 pt-1" 
    >{InitialName}
    </div>
  );
}