import { Link } from "react-router-dom";
import Header from "../components/Header";
import inputRelated from "../mini-components/input";
import servicelogo from "../Assets/Icons/servicelogo.svg";
import { useSelector } from "react-redux";
import MenuCard from "../mini-components/menu";

function SignInPage() {
  const menuState=useSelector(state=>state.MenuSwitch.menuState)
  return (
    <>
      <Header />
      {menuState? <MenuCard />:<></> }
      <section className="mt-[90px] flex flex-col gap-[38px] items-center ml-[-6%] ">
        <Brand />
        <p className="font-montserrat text-lightblue font-bold text-[16px] min-350:w-[200px] ">
          Log in to your account
        </p>
        <div className="flex flex-col ml-[-3%] gap-[26px] ">
          <inputRelated.EmailInput
            textname={"Email or Username"}
            name={"email"}
            width={"w-[320px] h-[39px]"}
          />
          <inputRelated.Password
            textname={"Password"}
            name={"password"}
            width={"w-[320px] h-[39px]"}
          />
        </div>
        <div className="flex flex-col gap-[37px] items-center ">
          <SubmitButton />
          <div className="flex flex-col items-center gap-[15px]">
            <p className="font-futurastdBook font-medium text-[14px] text-lightblue ">
              <Link to="/account_signUp">Create Account</Link>
            </p>

            <p className="font-akaya text-[17px] w-[189px]">
              forgot password?{" "}
              <Link to="/reset_password">
                <span className="text-lightblue">Reset now</span>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function SubmitButton() {
  return (
    <p
      onClick={(e) => {}}
      className="flex flex-col items-center cursor-pointer  rounded pt-[6px] w-[95px] h-[35px] bg-lightblue text-white font-futurastdBook font-bold text-[14px] "
    >
      Submit
    </p>
  );
}

function Brand() {
  return (
    <div className="flex flex-col gap-[15px] items-center ">
      <img className="w-[60px] h-[60px] " src={servicelogo} alt="brandlgo" />
      <p className="font-FuturastdBook text-[13px] font-medium ">
        The denim brand that flatters every figure{" "}
        <span className="hidden  min-400:inline">- DesignsByEse</span>
      </p>
    </div>
  );
}

export default SignInPage;
