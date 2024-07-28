import Ratings from "./rating";
import tagIcon from "../Assets/Icons/tagIcon.svg";
import listcartIcon from "../Assets/Icons/listcartIcon.svg";
import clickdown from "../Assets/Icons/clickdown.svg";
import paymentmethod from "../Assets/Icons/paymentmethod.svg"
import arrowup from "../Assets/Icons/arrowup.svg"
import { useState, useEffect } from "react";
import TwodigitLocaleStringGenerator from "../utilities/twodigitLocalestring";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";

function ProductDetails() {
  const product = {
    productName:
      "The Zanzibar Collection (Beach-inspired and relaxed styles with a touch of Zanzibar's cultural influence)",
    price: "84326",
    usersLocation: "Nigeria",
    numberOfReviews: "500",
    noOfRatings: 4.5,
    discount: "5",

    fabricType: "65% Cotton, 35% Polyester",
    careInstruction: "Dry Clean Only",
    origin: "Made by DesignsbyEse",

    aboutItems: [
      {
        name: "Material:",
        text: "Cotton + Polyester, Blend, Soft Comfortable, High Quality Boutique,Constructed of a light weight,soft poly cotton fabric that gently drapes.",
      },
      {
        name: "Features:",
        text: "This lace top for women featuring with cut out details, short sleeves, regular fit, sexy style, casual style, fashion style, basic style, v-neck top.",
      },
      {
        name: "StylingOccasions:",
        text: "This lace top for women featuring with cut out details, short sleeves, regular fit, sexy style, casual style, fashion style, basic style, v-neck top.",
      },
    ],
  };

  const price= parseFloat(product.price);
  const discount=parseFloat(product.discount);
  const discountedvalue= price * (discount/100);
  const realvalue= price - discountedvalue;
  let formattedRealvalue = TwodigitLocaleStringGenerator(realvalue);
  let formattedprice= TwodigitLocaleStringGenerator(price);
  let formattedDiscountedvalue= TwodigitLocaleStringGenerator(discountedvalue)

  const [discountState,setdiscountState]= useState(false);

  const [toggle, settoggle] = useState(true);
  return (
    <div className="flex flex-col gap-[14px]  min-[380]:w-[370px] min-[900px]:w-[440px] ">
      <div className="flex flex-col gap-[12px]">
        <p className="font-akaya text-[18px] text-teal min-300:w-[270px] min-330:w-[290px] min-390:w-[340px] min-440:w-[380px] min-[500px]:w-[440px] min-900:w-[445px] min-1200:w-[460px]">{product.productName}</p>
        <hr className="min-200:w-[260px] min-330:w-[289px] min-390:w-[322px] min-440:w-[380px] min-900:w-[443.01px] border-t-[2px] border-gray" />
      </div>
      <div className="flex flex-col gap-[22px]">
        <div className="flex flex-row gap-[18px] ">
        <p className="min-200:text-[18px] text-claybrown min-200:font-bold min-360:text-[20px] min-390:text-[24px]  text-[27px]  font-montserrat font-semibold min-900:text-[32px] ">
        {'N'}{discountState ? formattedRealvalue : formattedprice}
        </p>
       {
        discountState ? <p className="min-200:text-[14px] min-200:font-bold min-390:text-[17px] min-900:text-[24px] font-montserrat font-semibold text-gray">
         {'- '}<span className="line-through">{'N'}{formattedDiscountedvalue}</span>
      </p>: <></>
       }
          </div> 
        <p className="min-200:w-[180px] min-390:w-[220px] font-montserrat font-medium text-[14px] w-[223px]">
          Shipping and tax to {product.usersLocation}
        </p>
        <div className="flex flex-col gap-[12px] min-450:flex-row ">
        <div className="min-200:w-[180px] flex flex-row gap-[5px] items-center w-[400px]">
          <Ratings value={product.noOfRatings} />
          <p className="w-[250px] font-FuturastdBook font-light text-[14px] text-gray">
            {product.numberOfReviews} Reviews
          </p>
        </div>
        <BuyNow />
        </div>
        <div className="flex flex-row items-start gap-[8px]">
          <img
            className="w-[20px] h-[20px]"
            src={tagIcon}
            alt="price tag Icon"
          />
          <input
             onClick={(e)=>{
                e.stopPropagation();
                 setdiscountState(!discountState)
             }}
            className="border border-transparent cursor-pointer hover:border-2 hover:border-blue-500"
            title="dicount"
            type="checkbox"
            name="discount"
            id="discount"
          />
          <p className=" min-200:w-[190px] min-390:w-[240px] min-200:leading-normal min-200:h-[40px] w-[242px] h-[34px] mt-[-2px] leading-tight font-FuturastdBook font-light text-[12px] text-black">
            {product.discount}% discount on purchase with DesignsbyEse giftcards, and first time
            signup.
          </p>
        </div>
        <hr className="min-300:w-[260px] min-330:w-[289px] min-390:w-[322px] min-440:w-[380px] min-900:w-[443.01px]   border-t-[2px] border-gray" />
      </div>
      <div className="flex flex-col gap-[10px]">
        <p className="font-bold font-montserrat text-[19x] text-gray">
          Product details
        </p>
        <div className="flex flex-col gap-[6px]">
          <div className="flex flex-row min-500:gap-[66px] min-300:gap-[60px]">
            <p className="font-montserrat font-semibold text-[14px] text-gray w-[85px]">
              Fabric Type
            </p>
            <p className="font-FuturastBook font-light text-[14px] min-390:w-[220px] min-200:w-[120px] min-300:w-[140px]">
              {product.fabricType}
            </p>
          </div>
          <div className="flex flex-row gap-[24px]">
            <p className="min-200:w-[120px] min-500:w-[127px] font-montserrat font-semibold text-[14px] text-gray ">
              Care instructions
            </p>
            <p className="font-FuturastBook font-light text-[14px]">
              {product.careInstruction}
            </p>
          </div>
          <div className="flex flex-row min-500:gap-[66px] min-200:gap-[58px]">
            <p className="]font-montserrat font-semibold text-[14px] text-gray w-[85px]">
              Origin
            </p>
            <p className=" min-200:w-[80px] min-390:w-[220px] font-FuturastBook font-light text-[14px]">
              {product.origin}
            </p>
          </div>
        </div>
        <hr className="min-300:w-[260px] min-330:w-[289px] min-390:w-[322px] min-440:w-[380px] min-900:w-[440.01px] border-t-[2px] border-gray mt-[17px]" />
      </div>
      <div className=" flex flex-col gap-[14px]">
        <p className="font-bold font-montserrat text-[19x] text-gray min-200:w-[200px]">
          About this item
        </p>
        <div className="flex flex-col gap-[8px] ml-[13px] min-200:w-[194px]">
          <ul className="flex flex-col gap-[19px]">
            {product.aboutItems.map((list) => {
              return (
                <li
                  className={
                    list.name == "StylingOccasions:" && toggle
                      ? "hidden"
                      : "list-disc w-[350px] list-outside min-200:w-[200px] min-300:w-[295px] min-390:w-[320px] min-500:w-[390px]  min-900:w-[470px] font-montserrat text-[13px] font-regular"
                  }
                >
                  <span className=" font-montserrat  text-[15] font-semibold">
                    {list.name}
                  </span>{" "}
                  {list.text}
                </li>
              );
            })}
          </ul>
          <div
            onClick={(e) => {
              e.stopPropagation();
              settoggle(!toggle);
            }}
            className="ml-[40%] flex flex-row gap-[11px] items-center hover:cursor-pointer"
          >
            <img src={toggle ? clickdown : arrowup} alt="arrow down image" />
            <p className="w-[99px] font-montserrat font-regular text-[13px]">
              {toggle ? "Show more" : "Hide"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BuyNow() {
  const loginState= useSelector(state=> state.loggedIn.loggedInState)
  return(
    <div onClick={(e)=>{
         e.stopPropagation();
         if (loginState) {
          
         }
         else{
          redirect('localhost:5173/account_signUp',200)
         }
    }} className="flex flex-row gap-[0px] items-center cursor-pointer " >
      <p className="w-[79px] h-[32px] bg-buttondark pt-[5px] text-center font-bold font-futurastdBook text-white text-[13px] ">
        Buy Now
      </p>
      <img className="w-[124px] h-[48px] " src={paymentmethod} alt="payment method Icon" />
    </div>
  )
}

export default ProductDetails;
