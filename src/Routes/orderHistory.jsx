import Header from "../components/Header";
import OrderDetails from "../mini-components/orderdetails";
import OrderHeader from "../mini-components/orderheader";
import OrderCard from "../mini-components/orders";
import { useSelector } from "react-redux";
import MenuCard from "../mini-components/menu";

function OrderHistory() {
  const menuState=useSelector(state=>state.MenuSwitch.menuState)
  return (
    <>
      <Header />
      {menuState? <MenuCard />:<></> }
      <div className="mt-[80px] ">
        <OrderHeader />
      </div>
      <div className="">
        <OrderCard />
      </div>
    </>
  );
}

export default OrderHistory;
