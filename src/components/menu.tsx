import { useActiveMenu } from "./hooks/useActiveMenu";
import { Logout } from "./logout"
import { NavBar } from "./navBar"

export const Menu = () => {
  const {activeMenu, toggleActiveMenu} = useActiveMenu();
  return (
    <div
    style={{transition: '1s all ease-in-out'}}
      className={`w-70 h-130 bg-gray-800 absolute right-0 top-16 p-5 gap-7 py-20 flex flex-col items-start justify-center
    ${activeMenu ? "mt-0" : "-mt-130"} `}
    >
      <NavBar />
      <Logout />
    </div>
  );
};