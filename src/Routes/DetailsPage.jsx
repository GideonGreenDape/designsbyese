import Header from "../components/Header";
import SignUpComponent from "../mini-components/signUpComponent";
import inputRelatedTwo from "../mini-components/inputtwo";
import { useSelector } from "react-redux";
import MenuCard from "../mini-components/menu";
import inputRelated from "../mini-components/input";

function DetailsPage() {
    const menuState=useSelector(state=>state.MenuSwitch.menuState)
    return(
        <>
        <Header />
        {menuState? <MenuCard />:<></> }
        <h2 className="font-futurastdBook mt-[85px] ml-[12%] font-bold text-[16px] text-lightblue min-478:ml-[3%] ">
          Create Account
        </h2>
        <main className="mt-[40px] min-560:ml-[38px] flex flex-col gap-[75px] ">
            <div className="flex flex-row min-800:gap-[150px]">
            <div className="mt-[35px] hidden min-700:block ">
            <SignUpComponent />
            </div>
            <div className="mt-[20px] flex flex-row gap-x-[20px] gap-y-[40px] min-560:w-[800px] flex-wrap">
            <inputRelated.EmailInput
            textname={"Email"}
            name={"email"}
            width={"w-[270px] min-478:w-[190px] h-[34px] drop-shadow-none"}
          />
            <inputRelatedTwo.Username textname={'Username'} name={'username'} width={'w-[270px] min-478:w-[190px] h-[34px]'} />
            <inputRelatedTwo.NameInput textname={'First name'} name={'firstname'} width={'w-[270px] min-478:w-[190px] h-[34px]'} />
            <inputRelatedTwo.Username textname={'Middle name'} name={'middlename'} width={'w-[270px] min-478:w-[190px] h-[34px]'} />
            <inputRelatedTwo.Username textname={'Last name'} name={'email'} width={'w-[270px] min-478:w-[190px] h-[34px]'} />
            <inputRelatedTwo.Username textname={'Mobile number'} name={'number'} width={'w-[270px] min-478:w-[190px] h-[34px]'} />
            <inputRelatedTwo.Date textname={'Date of Birth'} name={'DOB'} width={'w-[270px] min-478:w-[190px] h-[34px]'} />
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


export default DetailsPage;