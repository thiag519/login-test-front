import { CardUser } from "./cardUserPost";
type Props = {
  user: number|null;
}
export const UserAreaPosts = ({user}:Props) => {
  //console.log("userId no userAreaPosts", user);
  return (
    <div
      className="w-full md:w-1/2 h-9/10 my-13 flex flex-col items-center justify-center 
      scroll-m-0"
    ><div
        style={{
          scrollbarWidth: "none",
        }}
        className="w-full h-full overflow-y-scroll flex flex-col items-center"
      ><CardUser
          author={user}
        />
      </div>
    </div>
  );
};