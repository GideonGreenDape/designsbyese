import Ratings from "./rating";
import headerimageOne from "../Assets/images/headerimageOne.svg";
import headerimageTwo from "../Assets/images/headerimageTwo.svg";

function HeaderLayout() {
  return (
    <div className="flex flex-row gap-[60px] items-center">
      <SectionOne />
      <img className="w-[379px] h-[460px] " src={headerimageOne} alt="productImage" />
      <img className=" hidden min-1200:block  w-[300px] h-[380px] " src={headerimageTwo} alt="productsImage" />
    </div>
  );
}

function SectionOne() {
  return (
    <div className="mt-[26px] flex flex-col items-center gap-[40px]">
      <CardOne />
      <CardThree />
      <OrderButton />
    </div>
  );
}

function CardOne() {
  return (
    <div className="flex flex-col items-center gap-[15px] ">
        <p className="text-white text-center w-[220px] h-[60px] font-montserrat font-extrabold text-[22px]">
      Fashion that's as diverse as you are.
    </p>
    <p className="font-montserrat font-semibold text-[14px] text-white text-center w-[305px] h-[60px] ">
      Custom-made pieces that reflect your style. We'll guide you every step of
      the way.
    </p>
    </div>
  );
}

function CardTwo() {
  return (
    <p className="font-montserrat font-semibold text-[14px] text-white text-center w-[345px] h-[60px] ">
      Custom-made pieces that reflect your style. We'll guide you every step of
      the way.
    </p>
  );
}



function CardThree() {
  return (
   <div className="flex flex-col items-center gap-[10px] ">
     <p className="w-[220px] font-futuraStdBook font-bold text-[14px] text-white ">
      A Collection for Every Woman
    </p>
    <p className="font-futurastdBook text-center font-light text-[14px] text-white w-[331px] h-[105px]">
      This week, let your spirit soar with The Zenzele Collection, a vibrant
      explosion of ready-to-wear pieces inspired by the isiZulu word for
      "beauty." Every design bursts with playful patterns and colors, designed
      to make you feel confident and radiant.
    </p>
    <Rates />
   </div>
  );
}

function Rates() {
  return (
    <div className="flex flex-row gap-[6px]">
      <Ratings value={4.5} />
      <p className="font-futurastdBook font-medium text-[13px] text-gray">500 Reviews</p>
    </div>
  );
}

function Discount() {
  return (
    <p className="text-[9.89px] text-white font-montserrat font-semibold ">
      * 10% discount on all first time order{" "}
    </p>
  );
}


function OrderButton() {
    return (
      <div className="flex flex-col gap-[15px] items-center">
        <p className="w-[72px] h-[30px] pt-[7px] rounded hover:bg-lightpurpleshade text-center hover:cursor-pointer bg-vibrantpink font-FuturastdBook text text-[12px] font-light text-white">
        Order Now
      </p>
      <Discount />
      </div>
    );
  }

  export default HeaderLayout;