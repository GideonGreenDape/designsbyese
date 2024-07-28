import { useState } from "react";

function OrderHeader() {
  const [OnorOFF, setOnorOff] = useState(false);

  function Flip() {
    setOnorOff(!OnorOFF);
  }
  return (
    <div className="ml-[30px] mb-[15px]  flex flex-col gap-[24px] ">
      <p className="font-FuturastdBook text-gray font-medium text-[15px] ">
        Order history
      </p>
      <div className=" flex flex-row gap-[20px] items-start ">
        <OngoingOrDelivered click={Flip} trigger={OnorOFF} />
        <CancelledOrReturned click={Flip} trigger={OnorOFF} />
      </div>
    </div>
  );
}

function OngoingOrDelivered({ trigger,click }) {
  let styleOne =
    "font-FuturastdBook font-medium text-[12px] hover:cursor-pointer";
  let styleTwo = "font-FuturastdBook font-bold text-[12px]";
  return (
    <div onClick={(e)=>{
        e.stopPropagation();
        click();
    }} className="flex flex-col gap-[3px] items-start pr-[4px] ">
      <p className={trigger ? styleTwo : styleOne}>ONGOING/DELIVERED</p>
      {trigger ? (
        <hr className="border-t-[2px] border-solid ml-[33px] w-[121px] " />
      ) : (
        <></>
      )}
    </div>
  );
}

function CancelledOrReturned({ trigger,click }) {
  let styleOne =
    "font-FuturastdBook font-medium text-[12px] hover:cursor-pointer";
  let styleTwo = "font-FuturastdBook font-bold text-[12px]";
  return (
    <div onClick={(e)=>{
        e.stopPropagation();
        click();
    }} className="flex flex-col gap-[3px] items-start h-[29px] pl-[4px] ">
      <p className={trigger ? styleOne : styleTwo}>CANCELLED/RETURNED</p>
      {trigger ? (
        <></>
      ) : (
        <hr className="border-t-[2px] border-solid w-[121px]" />
      )}
    </div>
  );
}

export default OrderHeader;
