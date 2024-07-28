import clotheIcon from "../Assets/Icons/clotheIcon.svg";
import shippingfastIcon from "../Assets/Icons/shippingfastIcon.svg";
import tagIcon from "../Assets/Icons/tagIcon.svg"
import paymentIcon from "../Assets/Icons/paymentIcon.svg"
function Brandfeature() {
  return (
    <div className="flex flex-row gap-[11px] justify-start items-start">
      <img className="w-[35px] h-[33px]" src={clotheIcon} alt="clothe icon" />
      <p className="w-[186px] h-[43px] font-FuturastdBook font-light text-[11px] text-gray">
        200+ Custom Creations Every Week, Guaranteed Bespoke brilliance, free
        and rewarding experience.
      </p>
    </div>
  );
}

function ShippingFeature() {
  return (
    <div className="flex flex-row gap-[11px] justify-start items-start">
      <img
        className="w-[35px] h-[33px]"
        src={shippingfastIcon}
        alt="fast shipping icon"
      />
      <p className="w-[186px] h-[43px] font-FuturastdBook font-light text-[11px] text-gray">
        200+ Custom Creations Every Week, Guaranteed Bespoke brilliance, free
        and rewarding experience.
      </p>
    </div>
  );
}

function Tagfeature() {
    return (
      <div className="flex flex-row gap-[11px] justify-start items-start">
        <img
          className="w-[30px] h-[30px]"
          src={tagIcon}
          alt="fast shipping icon"
        />
        <div className="flex flex-col">
        <p className="w-[186px] h-[43px] font-FuturastdBook font-light text-[11px] text-gray">
        20% discount on purchase with
        DesignsbyEse giftcards.
        </p>
        <GiftcardForm />
        </div>
      </div>
    );
  }

  function GiftcardForm() {
   return(
    <div className="flex flxe-row gap-[2px]">
     <p className="w-[73px] h-[13px] self-start font-FuturastdBook font-medium text-[11px] text-gray">Enter Code:</p>
     <input className="w-[119px] h-[18px] px-[10px] py-[3px] font-montserrat font-semibold text-[10px] text-gray border solid"
     type="search" name="giftcard" id="giftcardCode" placeholder="20xw-yzg4-3sWmo" />
    </div>
   ) 
  }

  function PaymentMethods() {
    return(
        <div className="flex flex-col justify-center h-[58px] w-[124px] gap-[2px]">
         <p className="ml-[15px] w-[138px] h-[13px] font-FuturastdBook font-light text-[11px] text-paintgray">All Payment Methods</p>
         <img src={paymentIcon} alt="payment methods icon" />
        </div>
    )
  }

const Quickfeature={
    Brandfeature,
    ShippingFeature,
    Tagfeature,
    PaymentMethods
}

export default Quickfeature;
