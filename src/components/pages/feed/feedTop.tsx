import { Avatar } from "@/components/avatar"
import { Search } from "./search"

export const FeedTop = () => {
  return (
    <div className="w-full h-[8vh] fixed flex items-center justify-center mt-12 z-50">
      <div className="w-4/5 h-22">
       <div className="w-full h-full gap-4 flex items-center justify-end">
        <Search/>
        <Avatar
          name="thiago souza"
        />
       </div>
      </div>
    </div>
  )
}