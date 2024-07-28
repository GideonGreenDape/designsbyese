import { useState } from "react";

function Coypright() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <p className="font-opensans font-regular text-[12px] text-gray">Copyright &copy; 2020-{year} DesignsbyEse.all right reserved</p>
    </div>
  );
}


function EmailSubscription() {
    return(
        <div>
         <input
         className="w-[135px] h-[26px] font-opensans font-bold text-[12px] border-solid border-b-[1px] border-gray focus:outline-none "
         type="email" name="email" placeholder="Enter Your Email " />
        </div>
    )
}


function OrderButton() {
    let styleOne="w-[72px] h-[30px] pt-[7px] text-center hover:cursor-pointer bg-gray font-FuturastdBook text text-[12px] font-light text-white"
    let styleTwo="w-[72px] h-[30px] pt-[7px] text-center hover:cursor-pointer bg-vibrantpink font-FuturastdBook text text-[12px] font-light text-white"
    const [clicked,setclicked]=useState(false);
    return (
        <p onClick={(e)=>{
           setclicked(true)
        }} className={clicked?styleTwo:styleOne} >
          Order Now
        </p>
      
    );
}


const bottomFooter={
    Coypright,
    EmailSubscription,
    OrderButton
}

export default bottomFooter;