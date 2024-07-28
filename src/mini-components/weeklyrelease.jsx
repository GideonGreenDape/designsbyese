import productlist from "../utilities/productslist";
import ProductComponents from "./productCard";
import Ratings from "./rating";
import { useEffect, useState } from "react";

function ThisweekRelease({product}) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if(width < 700){
    return(
      <Mobileview product={product} />
    )
  }
  else if(width >= 700 && width < 1200){
    return (
      <Tabview product={product} />
    )
  }
  else if(width >= 1200){
      return (
        <PcView product={product} />
      )
  }
}

function Mobileview({product}) {
  return (
    <div className="ml-[22px] flex flex-col gap-[17px]">
      <ThisweekHeadline />
      <Headline />
      <StoryLine />
      <ProductComponents.ProductCard products={product} />
      <div className="flex flex-row items-center gap-[8px] w-[260px]">
        <OrderButton />
        <Rates points={4}/>
        <Reviews />
      </div>
    </div>
  );
}

function Tabview({product}) {
    return(
        <div className="flex flex-row items-start gap-[40px] min-800:gap-[70px] min-890:gap-[105px] min-800:ml-[20px]">
         <div className="flex flex-col gap-[78px]">
          <ThisweekHeadline />
          <div className="flex flex-col gap-[12px]">
            <Headline />
            <StoryLine />
            <div className="flex flex-row items-center gap-[9px]">
              <Rates points={4} />
              <Reviews />
            </div>
            <OrderButton />
          </div>
         </div>
         <ProductComponents.ProductCard products={product} />
        </div>
    )
}

function PcView({product}) {
  return(
    <div className="ml-[50px] flex flex-row gap-[91px]">
      <div className="flex flex-col gap-[39px]">
       <ThisweekHeadline />
       <ProductComponents.ProductCard products={product} />
      </div>
      <div className="mt-[129px] flex flex-col gap-[20px]">
       <Headline />
       <StoryLine />
       <SubHeading />
       <StoryLineTwo />
       <div className="flex flex-row items-center gap-[18px]">
        <Rates points={4}/>
        <Reviews />
       </div>
       <OrderButton />
       <p className="font-montserrat font-bold text-[9.89px]">0rder Today recieve May 23 , 20% discount on Purchase</p>
      </div>
    </div>
  )
}


function ThisweekHeadline() {
  return (
    <p className="font-FuturastdBook font-bold text-[19px] text-gray  min-500:w-[330px] min-600:w-[260px] min-600:text-[19px] min-1200:text-[18px]  w-[260px] leading-tight">
      This Week's Zenzele: Embrace Beauty in Every Stitch
      <span className="font-FuturastdBook font-bold text-[19px] text-gray">
        ( Iphupha Lakho Lwe-Fashion)
      </span>
    </p>
  );
}

function StoryLine() {
  return (
    <p className="text-[15px] w-[250px] min-600:w-[488px] min-700:w-[318px]  font-thin font-FuturastdBook min-360:w-[290px] text-gray  min-400:w-[343px] min-1200:w-[410px] ">
      This week, let your spirit soar with The Zenzele Collection, a vibrant
      explosion of ready-to-wear pieces inspired by the isiZulu word for
      "beauty." Every design bursts with playful patterns and colors, designed
      to make you feel confident and radiant.
    </p>
  );
}

function SubHeading() {
  return (
    <p className="font-FuturastdBook font-bold text-[14px] text-gray">
      A Collection for Every Woman
    </p>
  );
}

function StoryLineTwo() {
  return (
    <p className="text-[15px]  font-thin font-FuturastdBook text-gray w-[414px]">
      The Zenzele Collection isn't just about aesthetics; it's about celebrating
      your unique style. With a range of silhouettes and playful prints, there's
      a piece (or two!) waiting to become your new favorite.
    </p>
  );
}

function Headline() {
  return (
    <div className="font-FuturastdBook text-gray text-[15px] min-600:text-[19px]  font-bold w-[240px] min-600:w-[250px] min-600:leading-tight min-1200:text-[15px] min-1200:w-[390px] ">
      Unveil Your Inner Joy with The Zenzele Collection
    </div>
  );
}

function Rates({points}) {
  return (
    <div className="w-[85px] h-[19px] ">
      <Ratings value={points}/>
    </div>
  );
}

function Reviews() {
  return (
    <p className="font-FuturastdBook font-thin text-gray text-[12px] ">
      500 Reviews
    </p>
  );
}

function OrderButton() {
  return (
      <p className="w-[72px] h-[30px] pt-[7px]  hover:bg-lightpurpleshade text-center hover:cursor-pointer bg-lightpurple font-FuturastdBook text text-[12px] font-light text-white">
        Order Now
      </p>
    
  );
}

export default ThisweekRelease;
