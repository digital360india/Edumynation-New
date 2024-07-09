import { Icon } from '@iconify/react';


export default function SearchBox() {
  
  return (
    <div className="search-box bg-white rounded-xl px-5 py-1">
      <form onSubmit={event => event.preventDefault()}>
        <div className="school-select w-[60vw] flex flex-col items-center justify-between sm:w-[75vw] sm:flex-row sm:relative">
          <div className="input-group w-[inherit] flex justify-between items-center px-1 sm:justify-start">
            <div className="input-with-icon-wrapper flex justify-center items-center">
              <Icon icon="solar:home-2-linear"/>
              <input 
                className="w-full sm:w-[19vw] ps-3 sm:ps-5 sm:pe-5 py-3"
                type="text"
                placeholder="School Type"
                value={``}
                readOnly
              />
            </div>
            <Icon icon="solar:alt-arrow-down-linear"/>
          </div>
          <hr className="divider w-full h-[3px] sm:w-[2.5rem] sm:absolute sm:left-[29.25%] sm:rotate-90 border-tertiaryLight"/>
          <div className="input-group w-[inherit] flex justify-between items-center px-1 sm:justify-start">
            <div className="input-with-icon-wrapper flex justify-center items-center">
              <Icon className="text-xl"icon="system-uicons:location"/>
              <input
                className="w-full ps-3 sm:ps-5 sm:pe-5 py-3 sm:w-[26.6vw]"
                type="text"
                placeholder="Search by Location"
                value={``}
                readOnly
              />
            </div>
            <Icon icon="solar:alt-arrow-down-linear"/>
          </div>
          <button
            className="px-8 py-1 my-3 rounded-lg bg-primaryBlue text-white"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
