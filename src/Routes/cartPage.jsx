import Footer from "../components/footer";
import Header from "../components/Header";
import CartItems from "../mini-components/cartItems";
import transactionSummary from "../mini-components/paymentSummary";
import { useSelector } from "react-redux";
import MenuCard from "../mini-components/menu";

function CartPage() {
  const menuState=useSelector(state=>state.MenuSwitch.menuState)
  return (
    <>
      <Header />
      {menuState? <MenuCard />:<></> }
      <main className="mt-[90px] ml-[3%] pr-[5%]">
        <h2 className="font-futurastdBook font-medium text-[16px] text-gray mb-[20px] ml-[3%] ">
          Cart Items
        </h2>
        <div className="flex flex-col gap-[45px] min-890:flex-row min-890:gap-[0px] justify-between min-890:mr-[5%]">
          <CartItems />
          <div className="flex flex-col gap-[40px] mt-[-6px] ">
            <transactionSummary.DeliveryDetails />
            <transactionSummary.PaymentSummary />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CartPage;
