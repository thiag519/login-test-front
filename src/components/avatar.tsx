import { setShortName } from "@/utils/setShortName";

type Props = {
  name: string;
}
export const Avatar = ({name}:Props) => {
  let sigla = setShortName(name)
  return (
    <div className=" rounded-full w-10 h-10 bg-blue-600 flex items-center 
    justify-center text-xl">{sigla}</div>
  )
}