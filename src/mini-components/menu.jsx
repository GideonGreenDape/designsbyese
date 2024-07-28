import ComponentsForMenu from "./Componentformenu";
import { useState } from "react";
import {LoginStatus} from "../components/loggedincontext"
import { useSelector } from "react-redux";
import logo from "./brandlogo";


function MenuCard() {
  const loginState= useSelector(state=>state.loggedIn.loggedInState)
  return (
   
     <nav className="z-150 min-1200:hidden w-[280px] bg-milkwhite fixed top-[50px] right-0 min-430px:flex flex-col gap-[0px]  ">
      {loginState ? <></>: <ComponentsForMenu.HelpCard />}
      {loginState ? <ComponentsForMenu.ProfileCard />: <></>}
      {loginState? <ComponentsForMenu.ProfileBalance />: <></>}
      <ComponentsForMenu.AccountLinks />
      {loginState ? <ComponentsForMenu.AccountSettings />: <ComponentsForMenu.MenuLinks />}
      {loginState ?<ComponentsForMenu.LogOut />:<></> }
    </nav>
   
  );
}

export default MenuCard;
