import { useState } from "react";


export const MenuLine = () => {
  const [active, setActive] = useState(false)
  return (
    <div
      style={{ transition: "ease-out 0.9s " }}
      className={` h-8  w-8 ${
        active ? "z-50 " : "z-0"
      } flex flex-col gap-1.5 items-center cursor-pointer
        justify-center absolute `}
      onClick={() => setActive}
    >
      <div
        style={{ transition: "ease-out 0.5s " }}
        className={` h-0.5 w-7 bg-white
          ${active ? "rotate-45 absolute w-7 " : "-rotate-[22.5] "} `}
      ></div>
      <div
        style={{ transition: "ease-out  0.5s " }}
        className={` h-0.5 w-7 bg-white
          ${active ? "-rotate-45 absolute w-7 " : "rotate-[22.5] "}`}
      ></div>
      <div
        style={{ transition: "ease-out 0.5s " }}
        className={`bg-white
          ${active ? "w-0 h-0 " : " h-0.5 w-7"}`}
      ></div>
    </div>
  );
};
