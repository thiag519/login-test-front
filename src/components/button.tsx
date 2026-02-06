type Props = {
  width: number;
  height:number;
  name: string;
  color:string;
  onClick: () => void;
};

export const Button = ({ name,width,height, color, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: `${color}`,
        width: `${width}%`,
        height: `${height}`
      }}
      className={`px-4 h-10 flex text-[12px] text-white text-center rounded-xl gap-1.5
      items-center justify-center shadow-2xl cursor-pointer hover:opacity-80`}
    >{name}
    </button>
  );
};
