import searchIcon from "../Assets/Icons/searchIcon.svg";
function PopupSearch({ onclick }) {
  return (
    <div className="hidden min-[1200px]:flex flex-row border-solid border-[1.8px] hover:border-[2px] w-[473px] h-[23px] items-center justify-around px-[1.3%]  rounded border-gray-300">
      <img
        className="min-[700px]:h-[16px]  w-[26px] h-[26px]"
        src={searchIcon}
        alt="search icon"
      />
      <input
        className="focus:outline-none pb-[3px] min-[700px]:h-[18px] pl-[5px] h-[18px] w-[370px] text-[12px] text-gray "
        type="search"
        placeholder="Type to search"
        name="search-word"
        id="keyword"
      />
      <p
        className="inline-block font-montserrat font-semibold text-[13px] min-[700px]:text-[11px] text-gray"
        onClick={(e) => {
          e.preventDefault();
          onclick();
        }}
      >
        close
      </p>
    </div>
  );
}

function PopupSearchMid({ onclick }) {
  return (
    <div className="hidden min-[350px]:flex flex-row border-solid border-[1px] items-center justify-around w-[250px] h-[23px] rounded border-gray">
      <img className="w-[18px] h-[18px]" src={searchIcon} alt="search icon" />
      <input
        className="focus:outline-none h-[20px] w-[176px] text-[12px]"
        type="search"
        name="search-word"
        placeholder="Type to search"
        id="search"
      />
      <p
        className="font-montserrat font-medium text-[12px] text-gray "
        onClick={(e) => {
          e.preventDefault();
          onclick();
        }}
      >
        close
      </p>
    </div>
  );
}

const searchbar = {
  PopupSearch,
  PopupSearchMid,
};

export default searchbar;
