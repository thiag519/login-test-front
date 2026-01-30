import { FeedArea } from "@/components/pages/feed/feedArea";
import { Footer } from "@/components/pages/feed/footer";


export default function Home() {
  return (
    <div
      className="flex w-full min-h-screen items-center flex-col justify-between
     text-white overflow-hidden"
    >
      <FeedArea />
      <Footer />
    </div>
  );
}
