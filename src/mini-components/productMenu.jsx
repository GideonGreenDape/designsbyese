import Filter from "../Assets/Icons/Filter.svg";
import Tile from "../Assets/Icons/Tile.svg";
import { useState, useEffect } from "react";

const category = [
  "Shift Dress",
  "BodyCon",
  "Wrap Dress",
  "Fit & Flare",
  "A-line dress",
  "Maxi dress",
  "Midi dress",
  "Mini dress",
  "Casual dress",
  "Cocktail dress",
  "Evening dress",
  "Sun dress"
];

function ProductMenu() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (width < 450) {
    return <Mobileview />;
  }
  else if(width < 1200){
     return <Tabview />
  }
  else if(width>= 1200){
     return <Pcview />
  }
}

function Tabview() {
  return (
    <div className="flex flex-row gap-[] items-start justify-between pl-[3%] pr-[3%] ">
      <p className="font-montserrat font-semibold text-[23px] w-[400px] ">
        check out our ready to wear collection
      </p>
      <div className="flex flex-row gap-[15px] ">
        <img
          className="w-[24px] h-[24px] "
          src={Tile}
          alt="expand product tile Icon"
        />
        <img
          className="w-[24px] h-[24px] "
          src={Filter}
          alt="filter product tile Icon"
        />
      </div>
    </div>
  );
}

function Mobileview() {
  return (
    <div className="flex flex-col gap-[15px] ml-[10px] ">
      <div className="flex flex-row gap-[10px] ">
        <img
          className="w-[24px] h-[24px] "
          src={Tile}
          alt="expand product tile Icon"
        />
        <img
          className="w-[24px] h-[24px] "
          src={Filter}
          alt="filter product tile Icon"
        />
      </div>
      <p className="font-montserrat font-bold text-[18px] w-[220px] ">
        check out our ready to wear collection
      </p>
    </div>
  );
}

function ImageTile() {
  return <div className="w-[35px] h-[35px] bg-lightgray rounded "></div>;
}

function Card({ name }) {
  return (
    <div className="flex flex-col items-center gap-[15px] ">
      <ImageTile />
      <p className="font-montserrat font-medium text-[11px] text-gray">
        {" "}
        {name}
      </p>
    </div>
  );
}

function Pcview() {
  return (
    <div className="flex flex-row w-[1200px] gap-[34px] ">
      {category.map((item) => {
        return <Card name={item} />;
      })}
    </div>
  );
}


export default ProductMenu ;