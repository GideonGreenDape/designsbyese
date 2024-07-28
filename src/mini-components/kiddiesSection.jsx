import BrandLogo from "../Assets/Icons/BrandLogo.svg";
import servicelogo  from "../Assets/Icons/servicelogo.svg"
import { useEffect,useState } from "react";

function Kiddies() {
 let images=[

 ]
 const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (width < 1000) {
    return(
        <Mobileview />
    )
  }
  else if(width>=1000){
    return(
        <PcView />
    ) 
  }
}



function Mobileview() {
    return(
        <div className="flex flex-col gap-[37px] items-center">
            <div className="flex flex-col gap-[19px] items-center">
                <Headline />
                <SubHeading />
            </div>
            <div className="w-[270px]  min-330:w-[305px] flex flex-wrap gap-x-[10px] gap-y-[10px]">
                <ImageTiles />
                <ImageTiles />
                <ImageTiles />
                <ImageTiles />
            </div>
            <div className="flex flex-col gap-[24px]">
                <OrderButton />
                <ImageCard />
            </div>
        </div>
    )
}

function PcView() {
    return(
        <div className="flex flex-row gap-[57px] items-center ">
         <div className="flex flex-col gap-[25px] items-center">
          <Headline />
          <SubHeading />
          <OrderButton />
          <ImageCard />
         </div>
         <div className="w-[544px] flex flex-wrap gap-x-[12px] gap-y-[10px]">
          <ImageTiles />
          <ImageTiles />
          <ImageTiles />
          <ImageTiles />
          <ImageTiles />
          <ImageTiles />
          <ImageTiles />
          <ImageTiles />
          <ImageTiles />
         </div>
        </div>
    )
}


function Headline() {
  return (
    <p className="w-[255px] text-center font-FuturastdBook font-bold text-[22px] text-gray">
      Dress your little ones from head to toe with our complete collection of
      kid’s apparel!
    </p>
  );
}

function SubHeading() {
  return (
    <p className="w-[240px] font-FuturastdBook text-[15px] text-gray text-center font-light ">
      Dress them for every occasion. Browse our extensive kids' selection.
    </p>
  );
}

function OrderButton() {
  return (
    <p className="w-[72px] h-[30px] pt-[7px] rounded hover:bg-lightpurpleshade text-center hover:cursor-pointer bg-vibrantpink font-FuturastdBook text text-[12px] font-light text-white">
      Order Now
    </p>
  );
}

function ImageCard() {
  return (
    <div>
      <img src={servicelogo} alt="brandlogo" />
    </div>
  );
}


function ImageTiles() {
  /**Images <img> tag should be between the div */
    return(
        <div className="w-[130px] h-[141px]  min-330:w-[146px] min-330:h-[151px]  rounded-lg bg-gray">
           
        </div>
    )
}


export default Kiddies;