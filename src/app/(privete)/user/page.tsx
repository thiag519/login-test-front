import { Footer } from "@/components/pages/feed/footer";
import { UserArea } from "@/components/pages/user/userArea";

const Page = () => {
  return (
    <div
      className="flex min-h-screen items-center flex-col 
     text-white overflow-hidden"
    ><UserArea/>
    </div>
  )
};
export default Page;
