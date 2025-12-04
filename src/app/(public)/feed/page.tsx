import { FeedArea } from "@/components/pages/feed/feedArea";
import { Footer } from "@/components/pages/feed/footer";


export default function Home() {
  return (
    <div
      className="flex min-h-screen items-centerfont-sans flex-col 
     text-white overflow-hidden"
    >
      <FeedArea />
      <Footer />
    </div>
  );
}
