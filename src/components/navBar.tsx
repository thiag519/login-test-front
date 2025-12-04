import Image from "next/image";
import imgPlus from '../../public/images/icons8-plus-24.png';
import imgUp from '../../public/images/up.png';
import imgDown from "../../public/images/down.png";
import imgArrow from "../../public/images/icons8-arrow-50.png";
import Link from "next/link";


export const NavBar = () => {
  return (
    <div
      className="w-full md:hidden flex items-center justify-center h-20 bg-gray-900 rounded-t-2xl border-t border-gray-400 
    bottom-0 fixed"
    >
      <div
        className=" flex w-4/5 h-full rounded-full p-3 
      items-center justify-around"
      >
        <Link href={``}>
          <Image
            className="h-8 cursor-pointer"
            src={imgPlus}
            width={25}
            alt="adicionar"
          />
        </Link>
        <Link href={``}>
          <Image
            className="h-8 cursor-pointer"
            src={imgPlus}
            width={25}
            alt="adicionar"
          />
        </Link>
        <Link href={``}>
          <Image
            className="h-8 cursor-pointer"
            src={imgUp}
            width={25}
            alt="ReactUp"
          />
        </Link>
        <Link href={``}>
          <Image
            className="h-8 cursor-pointer"
            src={imgDown}
            width={25}
            alt="ReactDown"
          />
        </Link>
        <Link href={`/feed`}>
          <Image
            className="h-10 cursor-pointer"
            src={imgArrow}
            width={30}
            alt="Retornar"
          />
        </Link>
      </div>
    </div>
  );
}