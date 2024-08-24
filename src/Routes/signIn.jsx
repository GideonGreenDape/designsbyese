import { Link,useNavigate } from "react-router-dom";
import Header from "../components/Header";
import inputRelated from "../mini-components/input";
import servicelogo from "../Assets/Icons/servicelogo.svg";
import { useSelector } from "react-redux";
import MenuCard from "../mini-components/menu";
import axios from "axios";
import { useState } from "react";
import LinearDeterminate from "../mini-components/progressSlider";

function SignInPage() {
  const menuState = useSelector((state) => state.MenuSwitch.menuState);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [serverResponse, setserverResponse] = useState(null);
  const [clicked, setclicked] = useState(false);

  const handleNetwork = (value) => {
    setclicked(value);
  };
  const handleinput = (value) => {
    setemail(value);
  };
  const handlePassword = (value) => {
    setpassword(value);
  };
  function handleServerResponse(response) {
    setserverResponse(response);
  }
  return (
    <>
      {/* <Header /> */}
      {/* <Brand /> */}
      {menuState ? <MenuCard /> : <></>}
      <section className=" mt-[90px] flex flex-col gap-[32px] items-center ml-[-6%] ">
        <p className="font-montserrat text-bootstrapblue font-bold text-[22px]  ">
          Sign in
        </p>
        {clicked && serverResponse == null ? <LinearDeterminate /> : <></>}
        {serverResponse && serverResponse != "ok" ? (
          <p className="bg-infoblue p-[7px] font-montserrat text-[12px] w-[310px]">
            {serverResponse}
          </p>
        ) : (
          <></>
        )}
        <div className="flex flex-col ml-[-3%] gap-[26px] ">
          <inputRelated.EmailInput
            textname={"Email or Username"}
            name={"email"}
            width={"w-[300px] h-[39px]"}
            handleInput={handleinput}
          />
          <inputRelated.Password
            textname={"Password"}
            name={"password"}
            width={"w-[300px] h-[39px]"}
            handlePassword={handlePassword}
          />
        </div>
        <div className="flex flex-col gap-[37px] items-center ">
          <SubmitButton
            data={{
              email: email,
              password: password,
            }}
            handleNetwork={handleNetwork}
            handleServerResponse={handleServerResponse}
          />
          <div className="flex flex-col items-center gap-[15px]">
            <p className="font-montserrat font-bold text-[14px] text-bootstrapblue ">
              <Link to="/account_signUp">Create Account</Link>
            </p>

            <p className="font-montserrat text-[14px] w-[199px]">
              forgot password?{" "}
              <Link to="/reset_password">
                <span className="text-bootstrapblue">Reset now</span>
              </Link>
            </p>
          </div>
        </div>
        
      </section>
    </>
  );
}

async function HandleSubmit(data) {
  try {
    const response = await axios.post("http://localhost:3000/login", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

function SubmitButton({ data, clicked, handleNetwork, handleServerResponse }) {
  const navigate= useNavigate();
  return (
    <div
      onClick={async (e) => {
        if (!clicked) {
          handleNetwork(true);
          const response = await HandleSubmit(data);
          if (response== 'ok') {
            navigate('/')
          }
          else{
            handleServerResponse(response);
            handleNetwork(false)
          }
          
        }
      }}
      className="flex flex-col items-center cursor-pointer  rounded pt-[6px] w-[300px] h-[38px] bg-bootstrapblue text-white font-futurastdBook font-bold text-[14px] "
    >
      Submit
    </div>
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
