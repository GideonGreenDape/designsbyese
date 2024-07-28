import cartoutline from "../Assets/Icons/cartoutline.png";
import ProfileIcon from "./profileIcon";
import menuicon from "../Assets/Icons/menuicon.svg";
import searchIcon from "../Assets/Icons/searchIcon.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {getSwitchState}  from "../Reducer/menuSlice";





function NavigationIconGroup({onclick}) {
  const dispatch= useDispatch()
  return (
    <div className="flex flex-row gap-[16px] justify-center items-center min-[1200px]:gap-[22px]" >
      <a
        href="#"
        onClick={(e)=>{
          e.preventDefault();
          onclick()
        }}
      >
        <img
          src={searchIcon}
          alt="search icon"
          className="w-[24px] h-[24px] hidden min-[350px]:block min-[800px]:hidden min-[1200px]:block"
        />
      </a>
      <Link to="/account_cart">
        <img
          src={cartoutline}
          alt="cart icon"
          className="w-[24px] h-[24px] hidden min-[350px]:block"
        />
      </Link>
      <Link to="/account">
        <ProfileIcon username="Sign In" />
      </Link>
      <a href="#" onClick={(e)=>{
          e.preventDefault();
          dispatch(getSwitchState());
        }}>
        <div className="w-[21px] h-[21px] shrink-0">
          <img src={menuicon} className=" w-[20px] h-[20px] min-[1200px]:hidden " alt="menu icon" />
        </div>
      </a>
    </div>
  );
}

export default NavigationIconGroup;
