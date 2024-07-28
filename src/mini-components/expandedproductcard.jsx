import ProductComponents from "./productCard";
import heartIcon from "../Assets/Icons/heartIcon.svg";
import tagIcon from "../Assets/Icons/tagIcon.svg";
import cartoutline from "../Assets/Icons/cartoutline.png"
import { useState,useEffect } from "react";
import TwodigitLocaleStringGenerator from "../utilities/twodigitLocalestring";


function ExpandedProduct({keyword}) {
  const product = {
    productName:
      "The Zanzibar Collection (Beach-inspired and relaxed styles with a touch of Zanzibar's cultural influence)",
    productImage: "none",
    discountPrice: "N91,000.00",
    discount: "20",
    actualprice: "101000",
  };
  return (
    <div className="flex flex-col gap-[19px]">
        <div className="flex flex-row min-400:gap-[29px] min-584:gap-[0px] min-1200:gap-[20px]">
        <div className="flex flex-col items-start gap-[11px]">
      <ProductImage productImage={product.productImage} />
      < ProductDiscription productName={product.productName} />
      <ProductPrice discount={product.discount} actualprice={product.actualprice}
      />
    </div>
    <ProductAdditionalFeatures />
    </div>
    <div className="flex flex-row gap-[7px] h-[42.01px]">
     <AddtoCart value={keyword} />
     <SaveComponent />
    </div>
    </div>
  );
}

function AddtoCart({value}) {
    return(
        <div className="flex flex-col items-center justify-center bg-buttondark cursor-pointer w-[210px]  h-[40px] hover:border-[.9px] hover:border-gray">
            <p className="font-montserrat text-[13px] text-white font-extrabold w-[95px] h-[16px]">{value}</p>
        </div>
    )
}

function SaveComponent() {
    return(
        <div className="w-[68px] h-[40.01px] bg-white px-[22px] py-[10.5px] border-[.9px] border-gray">
           <img className="w-[24px] h-[21.01px]" src={cartoutline} alt="save item icon" />
        </div>
    )
}

function ProductAdditionalFeatures() {
    return(
        <div className= "min-300:hidden min-330:flex flex-col items-start w-[80px] gap-[16px]">
        <div className="w-[45px] h-[45px] min-1200:w-[50px] w-[45px] h-[45px] min-1200:h-[50px] bg-lightgray rounded "></div>
        <div className="w-[45px] h-[45px] min-1200:w-[50px] w-[45px] h-[45px] min-1200:h-[50px] bg-lightgray rounded "></div>
        <div className="w-[45px] h-[45px] min-1200:w-[50px] w-[45px] h-[45px] min-1200:h-[50px] bg-lightgray rounded "></div>
        <div className="w-[45px] h-[45px] min-1200:w-[50px] w-[45px] h-[45px] min-1200:h-[50px] bg-lightgray rounded "></div>
      </div>
    )
}

function ProductImage({ productImage }) {
  const classOne =
    " w-[220px] min-1200:w-[260px] rounded h-[352px] ";
  const classTwo =
    "min-200:w-[220px] min-440:w-[280px] min-584:w-[220px] min-1200:w-[260px] rounded h-[352px] bg-lightgray";
  return (
    <div className={productImage == "none" ? classTwo : classOne}>
      {productImage == "none" ? (
        <></>
      ) : (
        <img src={productImage} alt="Test Phase" />
      )}
    </div>
  );
}


function ProductDiscription({ productName }) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const lengthChecker = productName.length;
  let slicedValue;
  if (lengthChecker > 100) {
    const product = productName.slice(0, 98);
    slicedValue = product + "...";
  }

  return (
    <p className="font-akaya w-[230px] min-1200:w-[260px] min-400:text-[16px] leading-tight">
      {lengthChecker > 100 && width < 1200 ?slicedValue : productName }
    </p>
  );
}

function ProductPrice({ discount, actualprice }) {
  let price= actualprice;
  let digitprice=parseFloat(price);
  let digitDiscount=parseFloat(discount);
  let amountdiscounted= digitprice * (digitDiscount/100);
  return (
    <div className="flex flex-row items-start gap-[9px] w-[220px]">
      <img
        className="pt-[5px] w-[19.8px] inline-block"
        src={tagIcon}
        alt="price tag icon"
      />
      <div className="flex flex-col gap-[1px] w-[150px]">
        <p className="w-[80px] font-montserrat text-[16px] font-semibold">
          {discount == "none" ? price : TwodigitLocaleStringGenerator(actualprice)}
        </p>
        {discount == "none" ? (
          <></>
        ) : (
          <ProductComponents.Discount discountpercentage={discount} />
        )}
      </div>
      <p className="w-[80px] font-montserrat text-[16px] font-semibold text-gray line-through">
        {TwodigitLocaleStringGenerator(amountdiscounted)}
      </p>
    </div>
  );
}

export default ExpandedProduct;