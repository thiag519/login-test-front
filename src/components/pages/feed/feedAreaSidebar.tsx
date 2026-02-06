import { Avatar } from "@/components/avatar";
import { Button } from "@/components/button";
import { useSetPagesUser } from "@/components/hooks/useSetPageUsers";
import { UserType } from "@/types/userType";
import { setFullName } from "@/utils/setFullName";

type Props = {
  users:UserType[] | undefined;
}
export const FeedAreaSidebar = (users:Props) => {
  const {pages, setMorePagesUser, setLessPagesUser} = useSetPagesUser();
  return (
    <div
      className="w-0 hidden min-h-170 md:flex flex-col bg-gray-900 my-13 mx-3 rounded-s-sm md:w-1/4 
      lg:w-1/5 gap-7  h-4/5 right-0 items-center justify-start py-10 text-gray-400 px-2 
      overflow-y-auto"
    >
      {users.users?.map((user, index) => (
        <div
          key={user.id}
          className="flex w-full h-auto px-3 gap-3 border-b border-gray-400"
        >
          <Avatar name={user.name} />
          <p className="text-lg flex items-center h-13  ">
            {setFullName(user.name)}
          </p>
        </div>
      ))}
      <div className="flex w-full h-full">
        {users.users && users.users?.length > 1 && (
        <div className=" h-full w-full flex justify-center items-end text-sm text-gray-400">
          <Button
            name="Proximos.."
            width={23}
            height={10}
            color=""
            onClick={() => setMorePagesUser()}
          />
        </div>
        )}
        {pages > 1 && (
          <div className=" h-full w-full flex justify-center items-end text-sm text-gray-400">
            <Button
              name="Voltar.."
              width={23}
              height={10}
              color=""
              onClick={() => setLessPagesUser()}
            />
          </div>
        )}
      </div>
      
    </div>
  );
}