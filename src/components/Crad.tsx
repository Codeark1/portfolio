

interface CardProps {
  title: string;
  emoji: string;
  buttonText: string;
  href: string;
}

export const Card: React.FC<CardProps> = ({ title, emoji, buttonText ,href }) => {
  return ( 

    <a className=" flex justify-center items-center no-underline cursor-pointer" href={href} >
      
      <div className="  text-white rounded-lg p-6 shadow-card flex flex-col justify-between items-start min-h-[350px] max-w-[250px]">
        <button className="text-sm text-[#60a5fa] border border-white px-3 py-1 rounded-full">
          {buttonText}
        </button>
        <h2 className="text-2xl font-bold mt-4">
          {title} {emoji}
        </h2>
      </div>
    </a>
  );
};
