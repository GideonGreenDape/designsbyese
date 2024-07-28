import tagIcon from "../Assets/Icons/tagIcon.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BespokeCard({products}) {

  return products.map((product) => {
    return (
      // <div className="w-[300px] h-[516px] bg-blue-300 pt-[9px] pl-[13px]">
      <div key={product.id} className="flex flex-col items-start w-[140px] min-330:w-[150px] min-430:w-[165px] min-450:w-[192px] gap-[18px] min-550:w-[240px]">
        <Link to={`/bespoke_products/${product.id}`} >
        <ProductImage productImage={product.productImage} />
        <ProductDiscription productName={product.productName} />
        </Link>
        
      </div>
      // {/* </div> */}
    );
  });
}

function ProductImage({ productImage }) {
  const classOne =
    "w-[190px] min-800:w-[240px] h-[302px] min-1200:w-[260px] h-[372px]";
  const classTwo =
    "w-[140px] h-[190px]  min-400:w-[165px]  min-450:w-[190px]     min-550:h-[340px]   min-550:w-[240px] min-400:h-[260px] rounded min-1200:w-[240px] min-1200:h-[352px] bg-lightgray";
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
    <p className="w-[127px] text-[15px] min-330:w-[134px] min-400:w-[150px]  min-430px:w-[190px] min-550:w-[240px] min-430px:h-[80px] min-450:w-[210px] font-akaya min-1200:w-[240px] min-400:text-[16px] leading-tight">
      {lengthChecker > 100 && width < 1200 ?slicedValue : productName }
    </p>
  );
}


export default BespokeCard;
