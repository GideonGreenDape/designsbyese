import LargeBrandicon from "../Assets/Icons/LargeBrandicon.svg";
import { useEffect,useState } from "react";


function FeaturesCard() {
    const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (width <= 664) {
    return <Mobileview />;
  }
  else if(width < 1200){
     return <Tabview />
  }
  else if(width>= 1200){
     return <Pcview />
  }
}

function Mobileview() {
  return (
    <div className="flex flex-col gap-[0px] items-start w-[280px] ">
      <p className="w-[280px] font-futurastdBook font-bold text-[30px] leading-tight text-darkgray">
        Celebrate You in Style. Bespoke & Custom Made Dresses for Any Event.
      </p>
      <div className="w-[280px]  min-400:w-[365px] h-[384px] mt-[30px] relative ">
        <p className="w-[280px] min-350:w-[330px] min-400:w-[355px] z-150 font-futurastdBook font-light leading-snug text-[16px] text-gray text-center">
          Let us craft the perfect dress for every unforgettable moment. Whether
          you're walking down the aisle, celebrating a milestone birthday, or
          gracing a formal event, our team of skilled designers and dressmakers
          is here to transform your vision into a bespoke masterpiece. We offer
          both a curated collection of ready-to-wear pieces for those seeking
          instant style, and the personalized experience of custom-made and
          bespoke dress creation. From classic silhouettes to trendsetting
          designs, every detail is meticulously considered to flatter your
          unique figure and express your personal style. Tell us about your
          dream dress, your special occasion, and we'll guide you through the
          design process, ensuring a dress that not only fits perfectly but
          makes you feel confident and radiant.
        </p>
        <img
          className="w-[278px] h-[290px] absolute right-[0%] top-[47%] min-400:right-[2%] min-400:top-[25%]  "
          src={LargeBrandicon}
          alt="Brand Logo Icon"
        />
        <p className="font-futuraStdBook font-medium text-gray text-[12px] ml-[60%] min-400:ml-[65%] mt-[12%] ">
          -DesignsbyEse Team
        </p>
      </div>
    </div>
  );
}

function Pcview() {
  return (
    <div className="flex flex-col gap-[0px] mt-[30px] items-start ">
      <p className="ml-[10px] w-[280px] font-futurastdBook font-bold text-[33px] leading-tight text-darkgray">
        Celebrate You in Style. Bespoke & Custom Made Dresses for Any Event.
      </p>
      <div className="w-[448px] h-[384px] mt-[30px] relative ">
        <p className="w-[448px] z-150 font-futurastdBook font-light leading-snug text-[16px] text-gray text-center">
          Let us craft the perfect dress for every unforgettable moment. Whether
          you're walking down the aisle, celebrating a milestone birthday, or
          gracing a formal event, our team of skilled designers and dressmakers
          is here to transform your vision into a bespoke masterpiece. We offer
          both a curated collection of ready-to-wear pieces for those seeking
          instant style, and the personalized experience of custom-made and
          bespoke dress creation. From classic silhouettes to trendsetting
          designs, every detail is meticulously considered to flatter your
          unique figure and express your personal style. Tell us about your
          dream dress, your special occasion, and we'll guide you through the
          design process, ensuring a dress that not only fits perfectly but
          makes you feel confident and radiant.
        </p>
        <img
          className="w-[278px] h-[290px] absolute right-[2%] top-[25%]  "
          src={LargeBrandicon}
          alt="Brand Logo Icon"
        />
        <p className="font-futuraStdBook font-medium text-gray text-[12px] ml-[74%] mt-[7%] ">
          -DesignsbyEse Team
        </p>
      </div>
    </div>
  );
}

function Tabview() {
  return (
    <div className="flex flex-row gap-[0px] mt-[80px] ">
      <p className="mt-[15px] w-[268px] font-futurastdBook font-bold text-[26px] leading-tight text-darkgray">
        Celebrate You in Style. Bespoke & Custom Made Dresses for Any Event.
      </p>
      <div className=" ml-[-8px] w-[354px] h-[384px] relative ">
        <p className="w-[330px] z-150 font-futurastdBook font-light leading-snug text-[16px] text-gray text-center">
          Let us craft the perfect dress for every unforgettable moment. Whether
          you're walking down the aisle, celebrating a milestone birthday, or
          gracing a formal event, our team of skilled designers and dressmakers
          is here to transform your vision into a bespoke masterpiece. We offer
          both a curated collection of ready-to-wear pieces for those seeking
          instant style, and the personalized experience of custom-made and
          bespoke dress creation. From classic silhouettes to trendsetting
          designs, every detail is meticulously considered to flatter your
          unique figure and express your personal style. Tell us about your
          dream dress, your special occasion, and we'll guide you through the
          design process, ensuring a dress that not only fits perfectly but
          makes you feel confident and radiant.
        </p>
        <img
          className="w-[278px] h-[290px] absolute right-[8%] top-[39%]  "
          src={LargeBrandicon}
          alt="Brand Logo Icon"
        />
        <p className="font-futuraStdBook font-medium text-gray text-[12px] ml-[59%] mt-[5%] ">
          -DesignsbyEse Team
        </p>
      </div>
    </div>
  );
}

export default FeaturesCard;
