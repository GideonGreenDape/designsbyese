import closeIcon from "../Assets/Icons/closeIcon.svg";
import Designsbyeselogo from "../Assets/Icons/Designsbyeselogo.svg";
import forwardarrow from "../Assets/Icons/forwardarrow.svg";
import walletIcon from "../Assets/Icons/walletIcon.svg";
import arrowbottom from "../Assets/Icons/arrowbottom.svg";
import list from "../utilities/listscript";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSwitchState } from "../Reducer/menuSlice";

function LogoIconforMenuCard({ click }) {
  return (
    <div className="flex flex-row gap-[13px] mb-[14px] ml-[24px] pt-[28px] ">
      <div className="flex flex-row gap-[12px] items-center">
        {/* <img
          className="w-[24px] h-[24px]"
          src={Designsbyeselogo}
          alt="Brand Logo"
        /> */}
        {/* <p className="font-Peralta text-Burntpurple text-[20px]">
          DesignsbyEse
        </p>
        <img
          onClick={(e) => {
            e.stopPropagation();
            click();
          }}
          className="min-[450px]:w-[30px] hover:cursor-pointer "
          src={closeIcon}
          alt="close Icon"
        /> */}
      </div>
    </div>
  );
}

function HelpCard() {
  return (
    <div className="border-b-[0.6px] border-solid pl-[24px] py-[10px] border-gray">
      <div className="flex flex-row items-center gap-[48px]">
        <p className="font-FuturastdBook font-thin text-[15px] text-gray">
          Need help
        </p>
        <img
          className="w-[15px] h-[15px]"
          src={forwardarrow}
          alt="forward arrow"
        />
      </div>
    </div>
  );
}

function ProfileCard() {
  const username = useSelector((state) => state.loggedIn.username);
  return (
    <div className="flex flex-row items-center gap-[50px] pl-[24px] border-gray border-b-[0.6px] border-solid py-[12px] min-[450px]:w-[430px]">
      <div className="flex flex-col gap-[3px]">
        <p className="font-FuturastdBook font-thin text-[16px] gap-[10px] ">
          Welcome, {"  "}
          <span className="font-FuturastdBook text-[15px] font-semibold lig-normal">
            {username > 18 ? username.slice(0, 18) + "..." : username}
          </span>
        </p>
        <p className="font-FuturastdBook font-thin text-[15px]">
          gideoniboyi87@gmail.com
        </p>
      </div>
      <img className="w-[15px] h-[15px]" src={forwardarrow} alt="expand Icon" />
    </div>
  );
}

function ProfileBalance() {
  const details = useContext(LoginStatus);
  return (
    <div className="flex flex-row items-center gap-[5px] pl-[24px] border-gray border-b-[0.6px] border-solid py-[10px] min-[450px]:w-[430px]">
      <img
        className="w-[24px] inline-block"
        src={walletIcon}
        alt="wallet icon"
      />
      <p className="pt-[4px] font-FuturastdBook font-thin text-[15px]">
        store balance: N
        <span className="font-FuturastdBook font-medium text-[13px]">
          {details.storebalance}
        </span>
      </p>
    </div>
  );
}

function AccountLinks() {
  const [flip, setflip] = useState(true);
  return (
    <div className="pt-[17px] pl-[24px]">
      <div className="flex flex-row items-center gap-[20px] mb-[16px]">
        <p className="font-FuturastdBook font-extrabold text-[13px] min-[450px]:text-[13px]">
          MY ACCOUNT
        </p>
        <img
          onClick={(e) => {
            e.stopPropagation();
            setflip(!flip);
          }}
          className="w-[15px] hover:cursor-pointer hover:w-[18px]"
          src={arrowbottom}
          alt="drop down arrow icon"
        />
      </div>
      {flip ? (
        <ul className="flex flex-col gap-[16px] font-FuturastdBook font-thin text-[15px]">
        <Link key={1}
          to={"/order_history"}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(getSwitchState());
          }}
        >
          {" "}
          <li>Orders</li>
        </Link>
        <Link key={3}
          to={"/bespoke"}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(getSwitchState());
          }}
        >
          <li>Inbox</li>
        </Link>
        <Link key={4}
          to={"/kiddies"}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(getSwitchState());
          }}
        >
          <li>Recently viewed</li>
        </Link>
      </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

function AccountSettings() {
  const [fliptwo, setfliptwo] = useState(true);
  return (
    <div className="mt-[19px] pl-[24px] mb-[20px]">
      <div className="flex flex-row items-center gap-[20px] mb-[16px]">
        <p className="font-FuturastdBook font-extrabold text-[13px] min-[450px]:text-[13px]">
          ACCOUNT SETTINGS
        </p>
        <img
          onClick={(e) => {
            e.stopPropagation();
            setfliptwo(!fliptwo);
          }}
          className="w-[15px] hover:cursor-pointer hover:w-[18px]"
          src={arrowbottom}
          alt="drop down arrow icon"
        />
      </div>
      {fliptwo ? (
        <ul className="flex flex-col gap-[15px]  font-FuturastdBook font-thin text-[14px]">
          <a href="#">
            <li>Account Management</li>
          </a>
          <a href="#">
            <li>Address Book</li>
          </a>
          <a href="#">
            <li>Close Account</li>
          </a>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

function MenuLinks() {
  const dispatch = useDispatch();
  return (
    <div className="mt-[19px] pl-[24px] mb-[20px]">
      <div className="flex flex-row items-center gap-[35px] mb-[16px]">
        <p className="font-FuturastdBook font-extrabold text-[13px]">MENU</p>
        <img
          className="w-[15px]"
          src={arrowbottom}
          alt="drop down arrow icon"
        />
      </div>
      <ul className="flex flex-col gap-[16px] font-FuturastdBook font-thin text-[15px]">
        <Link
          to={"/custom_made"}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(getSwitchState());
          }}
        >
          {" "}
          <li>Custom Made</li>
        </Link>
        <Link
          to={"/ready_to_wear"}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(getSwitchState());
          }}
        >
          <li>Ready To Wear</li>
        </Link>
        <Link
          to={"/bespoke"}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(getSwitchState());
          }}
        >
          <li>Bespoke</li>
        </Link>
        <Link
          to={"/kiddies"}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(getSwitchState());
          }}
        >
          <li>Kiddies</li>
        </Link>
        <Link
          to={"/"}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(getSwitchState());
          }}
        >
          <li>Our Measurement Guide</li>
        </Link>
      </ul>
    </div>
  );
}

function LogOut() {
  return (
    <p className="font-FuturastdBook font-extrabold text-center mt-[20px] mb-[30px] pl-[0px] text-[12px] text-winered min-[450px]:text-start ">
      LOG OUT
    </p>
  );
}

const ComponentsForMenu = {
  LogoIconforMenuCard,
  HelpCard,
  ProfileCard,
  ProfileBalance,
  AccountLinks,
  AccountSettings,
  LogOut,
  MenuLinks,
};

export default ComponentsForMenu;
