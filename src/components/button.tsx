type Props = {
  size: number;
  name: string;
  color:string;
  onClick: () => void;
};

export const Button = ({ name,size,color, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: `${color}`,
        width: `${size}%`,
      }}
      className={`px-4 h-10 text-white flex text-[12px] text-center rounded-xl gap-1.5
      items-center justify-center shadow-2xl cursor-pointer hover:opacity-80`}
    >
      {name}
    </button>
  );
};
