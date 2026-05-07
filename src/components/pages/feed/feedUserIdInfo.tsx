import { Avatar } from "@/components/avatar";
import { useUserIdToInfo } from "@/components/hooks/useUserIdToInfo";
import { getUserById } from "@/data/public/getUserById";
import { UserByIdInfoType } from "@/types/userByIdInfoType";
import Image from "next/image";
import { useEffect, useState } from "react";
import img from "../../../../public/images/icons8-close-30.png"



export const FeedUserIdInfo = () => {
  const { userIdInfo, active, toggleActive } = useUserIdToInfo();
  const [userInfo, setUserInfo] = useState<UserByIdInfoType | null>(null);
  console.log(userIdInfo);
  useEffect(()=> {getUserById(userIdInfo).then(setUserInfo).catch(console.error);},[ userInfo]);
  console.log(userInfo?.user, userIdInfo);

  if(!userInfo?.success) return;
  
  return (
    <div className={`w-4/5 h-auto relative ${active ? "flex" : "hidden"}`}>
      <span
        onClick={() => toggleActive()}
        className="absolute z-10 p-3 rounded-full hover:bg-gray-800"
      >
        <Image src={img} alt="feixar informção do usuário" width={17} />
      </span>
      <div
        className="w-full h-auto border-b-2 rounded-sm bg-gray-900 border-gray-400 
            flex flex-col p-6 relative"
      >
        <div className="w-full flex items-center justify-around gap-10 border-b border-gray-400 p-3">
          <Avatar name={userInfo?.user.name} />
          <p className="text-xl text-gray-400">{userInfo?.user.name}</p>
        </div>
        {userInfo?.user.posts.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col border-b-2 border-gray-400 p-3"
          >
            <h2 className="text-center text-xl text-gray-400 mb-3 w-full">
              {item.title}
            </h2>
            <div className="w-full h-auto text-gray-400 text-sm py-2">
              {item.content}
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="w-full h-5 text-sm text-gray-500">
                Votos positivos: {item.reactUp + item.reactUp}
              </div>
              <div className="w-full h-5 text-sm text-gray-500">
                Votos negativos: {item.reactDown + item.reactDown}
              </div>
            </div>
          </div>
        ))}
        {userInfo.user.posts.length <= 0 && (
          <div className={`w-full h-20 py-4 text-gray-400`}>
            {userInfo.user.name} ainda não possui posts para exibir!
          </div>
        )}
        <p className="w-full h-5 text-sm text-end py-3  text-gray-500">
          {userInfo?.user.createdAt.toString().slice(0, 10)}
        </p>
      </div>
    </div>
  );
}

//