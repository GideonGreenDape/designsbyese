import { Link } from "react-router-dom";
import Header from "../components/Header";
import inputRelated from "../mini-components/input";
import servicelogo from "../Assets/Icons/servicelogo.svg";
import { useSelector } from "react-redux";
import MenuCard from "../mini-components/menu";
import axios from "axios";
import { useState } from "react";
import LinearDeterminate from "../mini-components/progressSlider";

function SignUpPage() {
  const menuState = useSelector((state) => state.MenuSwitch.menuState);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [serverResponse, setserverResponse] = useState(null);
  const [clicked, setclicked] = useState(false);
  const handleNetwork = () => {
    setclicked(!clicked);
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
      <Header />
      {menuState ? <MenuCard /> : <></>}
      <section className="mt-[90px] flex flex-col gap-[30px] items-center ml-[-6%] ">
        <p className="font-montserrat text-bootstrapblue font-bold text-[16px]">
          Sign Up
        </p>
        {clicked && serverResponse == null ? <LinearDeterminate /> : <></>}
        {serverResponse ? (
          <p className="bg-infoblue p-[7px] font-montserrat text-[12px] w-[320px]">
            {Array.isArray(serverResponse) == true
              ? "Please ensure your email and password are correctly formatted."
              : serverResponse}
          </p>
        ) : (
          <></>
        )}
        {serverResponse && Array.isArray(serverResponse) == false ? (
          serverResponse ==
          "Email already exists. Please log in to your account with this email." ? (
            <>
              <div className="flex flex-col ml-[-3%] gap-[24px] ">
                <inputRelated.EmailInput
                  textname={"Email"}
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
              <div className="flex flex-col gap-[30px] items-center ">
                <div className="flex flex-col items-center gap-[15px]">
                  <p className="font-futurastdBook font-medium text-[14px] text-bootstrapblue ">
                    <Link to="/account">Log in to account</Link>
                  </p>
                </div>
              </div>
            </>
          ) : (
            <></>
          )
        ) : (
          <>
            <div className="flex flex-col ml-[-3%] gap-[24px] ">
              <inputRelated.EmailInput
                textname={"Email"}
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
            <div className="flex flex-col gap-[30px] items-center ">
              <SubmitButton
                data={{
                  email: email,
                  password: password,
                }}
                handleServerResponse={handleServerResponse}
                handleNetwork={handleNetwork}
                clicked={clicked}
              />
              <div className="flex flex-col items-center gap-[15px]">
                <p className="font-futurastdBook font-medium text-[14px] text-bootstrapblue ">
                  <Link to="/account">Log in to account</Link>
                </p>
              </div>
            </div>
          </>
        )}
        <div className="mt-[5%]">
          <Brand />
        </div>
      </section>
    </>
  );
}

async function HandleSubmit(data) {
  try {
    const response = await axios.post("http://localhost:3000/signup", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

function SubmitButton({ data, handleServerResponse, clicked, handleNetwork }) {
  return (
    <div
      onClick={async (e) => {
        if (!clicked) {
          handleNetwork();
          const response = await HandleSubmit(data);
          handleServerResponse(response);
        }
      }}
      className="flex flex-col items-center cursor-pointer  rounded pt-[6px] w-[95px] h-[35px] bg-bootstrapblue text-white font-futurastdBook font-bold text-[14px] "
    >
       Submit
    </div>
  );
}

function Brand() {
  return (
    <div className="flex flex-col gap-[15px] items-center ">
      <img className="w-[60px] h-[60px] " src={servicelogo} alt="brandlgo" />
      <p className="font-FuturastdBook text-[13px] font-medium text-gray">
        The denim brand that flatters every figure{" "}
        <span className="hidden  min-400:inline">- DesignsByEse</span>
      </p>
    </div>
  );
}

export default SignUpPage;
