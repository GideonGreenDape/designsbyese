import Header from "../components/Header";
import inputRelated from "../mini-components/input";
import servicelogo from "../Assets/Icons/servicelogo.svg";
import { useSelector } from "react-redux";
import MenuCard from "../mini-components/menu";

function VerificationPage() {
  const menuState=useSelector(state=>state.MenuSwitch.menuState)
  return (
    <>
      <Header />
      {menuState? <MenuCard />:<></> }
      <section className="mt-[90px] flex flex-col gap-[38px] items-center ml-[-6%] ">
        <Brand />
        <p className="font-montserrat text-black font-bold text-[16px] min-350:w-[200px] ">
          Verify Email address
        </p>
        <p className="font-montserrat font-medium text-[14px]">
          Email address: ufuomaiboyi23@yahoo.com
        </p>
        <SubmitButton />
      </section>
    </>
  );
}

function Brand() {
  return (
    <div className="flex flex-col gap-[15px] items-center ">
      <img className="w-[60px] h-[60px] " src={servicelogo} alt="brandlgo" />
      <p className="font-FuturastdBook text-[13px] font-medium ">
        The denim brand that flatters every figure <span className="hidden  min-400:inline">- DesignsByEse</span>
      </p>
    </div>
  );
}

function SubmitButton() {
  return (
    <p
      onClick={(e) => {}}
      className="flex flex-col items-center cursor-pointer  rounded pt-[6px] w-[105px] h-[35px] bg-lightgreen text-white font-futurastdBook font-bold text-[14px] "
    >
      click to verify
    </p>
  );
}

export default VerificationPage;
