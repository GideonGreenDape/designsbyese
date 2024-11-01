import tagIcon from "../Assets/Icons/tagIcon.svg";
import { useState, useEffect } from "react";
import TwodigitLocaleStringGenerator from "../utilities/twodigitLocalestring";
import { Link } from "react-router-dom";

function ProductCard({products}) {
     
  return products.map((product) => {
    return (
      <a onClick={(e)=>{
        e.stopPropagation();
        e.preventDefault();
        window.location.href = `/products/${product._id}`;
      }}
      className="cursor-pointer"
      >
      <div key={product.id} className="flex flex-col items-start w-[140px] min-330:w-[150px] min-430:w-[165px] min-450:w-[192px] gap-[18px] min-550:w-[240px]">
        <ProductImage productImage={product._id} />
        <ProductDiscription productName={product.productName} />
        <ProductPrice
          discount={product.discount}
          actualprice={product.actualprice}
        />
      </div>
      </a>
    );
  });
}

function ProductImage({ productImage }) {
  const classOne =
    "w-[190px] min-800:w-[240px] h-[302px] min-1200:w-[260px] h-[372px]";
  const classTwo =
    "w-[140px] h-[190px]  min-400:w-[165px]  min-450:w-[190px]  min-550:h-[340px]   min-550:w-[240px] min-400:h-[260px] rounded min-1200:w-[240px] min-1200:h-[352px] bg-milkwhite";
  return (
    <div className={classTwo}>
      {/* {productImage == "none" ? (
        <></>
      ) : (
        <img src={productImage} alt="Test Phase" />
      )} */}
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
    <p className="w-[127px] text-[15px] min-330:w-[134px] min-400:w-[150px]  min-430px:w-[190px] min-550:w-[240px] min-430px:h-[80px] min-450:w-[210px] font-akaya min-1200:w-[240px] min-400:text-[16px] leading-tight">
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
    <div className="gap-[2px] w-[130px] min-400:w-[150px] flex flex-row items-start min-1200:gap-[9px] min-430:w-[190px] min-550:w-[240px]">
      <img
        className="w-[16px]  pt-[5px] min-1200:w-[19.8px] inline-block"
        src={tagIcon}
        alt="price tag icon"
      />
      <div className="flex flex-col gap-[1px] min-1200:w-[230px]">
        <p className="text-[13px] w-[56px] min-418:text-[15px] min-430px:w-[80px]  min-1200:w-[94px] font-montserrat min-1200:text-[16px] font-semibold">
          {discount == "none" ? price : TwodigitLocaleStringGenerator(actualprice)}
        </p>
        {discount == "none" ? (
          <></>
        ) : (
          <Discount discountpercentage={discount} />
        )}
      </div>
      <p className="hidden min-330:block text-[12px] min-418:text-[15px] w-[60px] min-400:w-[97px] font-montserrat min-1200:text-[16px] font-semibold text-gray line-through">
        {TwodigitLocaleStringGenerator(amountdiscounted)}
      </p>
    </div>
  );
}

function Discount({ discountpercentage }) {
  return (
    <p className="w-[30px] min-450:w-[70px] font-montserrat text-[9.89px] text-gray font-semibold">
      {discountpercentage}%
    </p>
  );
}

const ProductComponents={
  ProductCard,
  ProductImage,
  ProductDiscription,
  ProductPrice,
  Discount
}

export default ProductComponents;
