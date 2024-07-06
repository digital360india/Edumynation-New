import { Icon } from '@iconify/react';


export default function SearchBox() {
  
  return (
    <div className="search-box bg-white rounded-xl px-5 py-1">
      <form onSubmit={event => event.preventDefault()}>
        <div className="school-select  flex flex-col items-center justify-center ">
          <div className="input-group flex items-center">
            <Icon icon="solar:home-2-linear"/>
            <input 
              className="ps-5 pe-3 py-3"
              type="text"
              placeholder="School Type"
              value={``}
              readOnly
            />
            <Icon icon="solar:alt-arrow-down-linear"/>
          </div>
          <hr className="w-full"/>
          <div className="input-group flex items-center">
            <Icon icon="system-uicons:location"/>
            <input
              className="ps-5 pe-3 py-3"
              type="text"
              placeholder="Search by Location"
              value={``}
              readOnly
            />
            <Icon icon="solar:alt-arrow-down-linear"/>
          </div>
          <button
            className="px-8 py-1 my-3 rounded-xl bg-primaryBlue text-white"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
