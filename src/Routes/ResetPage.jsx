import Header from "../components/Header";
import inputRelated from "../mini-components/input";
import servicelogo from "../Assets/Icons/servicelogo.svg"
import { useSelector } from "react-redux";
import MenuCard from "../mini-components/menu";

function ResetPage() {
    const menuState=useSelector(state=>state.MenuSwitch.menuState)
    return(
        <>
        <Header />
        {menuState? <MenuCard />:<></> }
        <section className="mt-[90px] flex flex-col gap-[38px] items-center ml-[-6%] ">
            <Brand />
            <p className="font-montserrat text-lightblue font-bold text-[16px] min-350:w-[200px] ">Reset Password</p>
                <div className="flex flex-col ml-[-3%] gap-[26px] ">
                    <inputRelated.EmailInput textname={'Email address'} name={'email'} width={'w-[275px]  min-350:w-[320px] h-[39px]'} />
                </div>
            <div className="flex flex-col gap-[37px] items-center ">
                <SubmitButton />
            </div>
        </section>
        </>
    )
}

function Brand() {
    return(
        <div className="flex flex-col gap-[15px] items-center ">
             <img className="w-[60px] h-[60px] " src={servicelogo} alt="brandlgo" />
             <p className="font-FuturastdBook text-[13px] font-medium ">The denim brand that flatters every figure <span className="hidden  min-400:inline">- DesignsByEse</span></p>
             </div>
    )
}

function SubmitButton() {
    return(
        <p 
        onClick={(e)=>{

        }}
        className="flex flex-col items-center cursor-pointer  rounded pt-[6px] w-[95px] h-[35px] bg-lightblue text-white font-futurastdBook font-bold text-[14px] ">
            Submit
        </p>
    )
}



export default ResetPage;