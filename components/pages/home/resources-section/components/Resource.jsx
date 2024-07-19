import Link from 'next/link';

import { Icon } from '@iconify/react';


export default function Resource({ resource }) {

  return (
    <div className="resource flex flex-col gap-5">
      <Icon className="w-[40px] h-[40px]" icon={resource.icon}/>
      <div className="resource-title font-semibold">
        {resource.title}
      </div>
      <div className="resource-text">
        {resource.text}
      </div>
      <Link className="w-fit flex justify-between items-center gap-3" href={resource.link.url}>
        {resource.link.text}
        <div className="icon-wrapper rounded-[50%] border border-black p-1">
          <Icon icon={resource.link.icon}/>
        </div>
      </Link>
    </div>
  );
}
