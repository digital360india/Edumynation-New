import { Icon } from "@iconify/react";


export default function Card({ card }) {

  return (
    <li 
      className={`
        card w-[44.5%] flex flex-col items-center gap-1 m-2 p-5
        bg-secondaryBlue text-primaryBlue
      `}
    >
      <Icon className="icon w-[30px] h-[30px]" icon={card.icon}/>
      <div className="quantity mt-1 text-2xl font-semibold">
        {card.quantity}
      </div>
      <div className="text text-center font-semibold">
        {card.text}
      </div>
    </li>
  );
}