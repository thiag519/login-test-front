
import { useRouter } from "next/navigation";
import { Button } from "./button";


export const Logout = () => {
  const router = useRouter()
  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
  };
  return (
    <div>
      <Button
        color="gray"
        size={100}
        onClick={handleLogout}
        name="Sair"
      />
    </div>
  )
}