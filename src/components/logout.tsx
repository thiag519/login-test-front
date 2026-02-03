
import { useRouter } from "next/navigation";


export const Logout = () => {
  const router = useRouter()
  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/feed");
  };
  return (
    <div className="w-[87%] h-auto pl-9 border-b-2 border-transparent hover:border-white pb-1">
      <button
        className="w-full text-start text-gray-400 text-sm hover:text-white "
        onClick={handleLogout}
        name="Sair"
      >
        Sair
      </button>
    </div>
  );
}