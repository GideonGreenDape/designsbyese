import Header from "../components/Header";
import SignUpComponent from "../mini-components/signUpComponent";
import inputRelatedTwo from "../mini-components/inputtwo";
import { useSelector } from "react-redux";
import MenuCard from "../mini-components/menu";

function ShippingPage() {
    const menuState=useSelector(state=>state.MenuSwitch.menuState)
    return(
        <>
        <Header />
        {menuState? <MenuCard />:<></> }
        <h2 className="font-futurastdBook mt-[85px] font-bold text-[16px] text-lightblue ml-[3%] ">
          Shipping Address
        </h2>
        <main className="mt-[40px] min-560:ml-[38px] flex flex-col gap-[75px]  ">
            <div className="flex flex-row min-800:gap-[150px]">
            <div className="mt-[35px] hidden min-700:block ">
            <SignUpComponent />
            </div>
            <div className="mt-[20px] flex flex-row gap-x-[20px] gap-y-[40px] min-560:w-[800px] flex-wrap">
            <inputRelatedTwo.Username textname={'Country'} name={'username'} width={'w-[190px] h-[34px]'} />
            <inputRelatedTwo.NameInput textname={'State'} name={'firstname'} width={'w-[190px] h-[34px]'} />
            <inputRelatedTwo.Username textname={'City'} name={'middlename'} width={'w-[190px] h-[34px]'} />
            <inputRelatedTwo.Username textname={'Zip/postal code'} name={'email'} width={'w-[190px] h-[34px]'} />
            <inputRelatedTwo.Username textname={'house number'} name={'number'} width={'w-[190px] h-[34px]'} />
            <inputRelatedTwo.Username textname={'Street name'} name={'email'} width={'w-[190px] h-[34px]'} />
            <inputRelatedTwo.Date textname={'Local government'} name={'email'} width={'w-[190px] h-[34px]'} />
            </div>
            </div>
            <div className="self-end mr-[20%] ">
            <NextButton />
            </div>
        </main>
        </>
    )
}


function NextButton() {
    return(
        <p 
        onClick={(e)=>{

        }}
        className="flex flex-col items-center cursor-pointer pt-[3px] w-[70px] h-[30px] bg-lightblue text-white font-futurastdBook font-bold text-[13px] ">
            Next
        </p>
    )
}


export default ShippingPage;