import { Icon } from "@iconify/react";


export default function Card({ card }) {

  return (
    <li 
      className={`
        card w-[44.5%] sm:w-fit flex flex-col items-center gap-1 p-5 m-2 sm:m-0
        bg-secondaryBlue text-primaryBlue
      `}
    >
      <Icon className="icon w-[30px] h-[30px]" icon={card.icon}/>
      <div className="quantity mt-1 text-4xl font-semibold">
        {card.quantity}
      </div>
      <div className="text text-center font-semibold">
        {card.text}
      </div>
    </li>
  );
}