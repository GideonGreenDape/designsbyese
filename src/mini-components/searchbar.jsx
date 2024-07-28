import searchIcon from "../Assets/Icons/searchIcon.svg"
function Searchbar() {
    return(
        <div className="hidden min-[1200px]:hidden min-[800px]:flex flex-row border-solid border-[1.5px] hover:border-[2px] w-[364px] h-[24px] items-center justify-between px-[.9%]  rounded-md border-gray">
         <img className="min-[700px]:h-[20px]  w-[26px] h-[26px]" src={searchIcon} alt="search icon" />
         <input className="focus:outline-none pb-[3px] min-[700px]:h-[18px] pl-[5px] h-[20px] w-[260px] text-[13px] text-gray " type="search" placeholder="Type to search" name="search-word" id="keyword" />
         <p className="inline-block font-montserrat font-medium text-[11px] min-[700px]:text-[11px] text-gray">close</p>
        </div>
    )
}

export default Searchbar;