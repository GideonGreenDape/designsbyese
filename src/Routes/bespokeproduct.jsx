import Footer from "../components/footer";
import Header from "../components/Header";
import BespokeCard from "../mini-components/bespokeComponent";
import Comments from "../mini-components/commentTemplates";
import ExpandedProduct from "../mini-components/expandedproductcard";
import ProductDetails from "../mini-components/Productdetails";
import productlist from "../utilities/productslist";
import MenuCard from "../mini-components/menu";
import { useSelector } from "react-redux";

function BespokeProductPage() {
  const menuState=useSelector(state=>state.MenuSwitch.menuState)
  return (
    <>
      <Header />
      {menuState? <MenuCard />:<></> }
      <section className="flex flex-col ml-[4%] min-800:items-center mt-[90px] min-1200:ml-[-10%] ">
        <div className="flex flex-row justify-between gap-[150px] ">
          <ExpandedProduct keyword={"Book us now"} />
          <VideoCard />
        </div>
      </section>
      <section className="flex flex-col  min-1200:items-center mt-[60px] min-1200:ml-[-7%] ">
        <div className="flex flex-col ml-[3%] min-360:ml-[5%] min-800:ml-[8%] min-1000:ml-[0] min-1000:flex-row  justify-between gap-[90px]">
          <ProductDetails />
          <Comments />
        </div>
      </section>
      <section className="flex flex-col mb-[450px] items-center mt-[50px]">
        <div className="flex flex-col gap-[30px]">
          <p className="font-montserrat font-semibold text-[19px] text-gray">
            Loving this look? see more
          </p>
          <div className="flex flex-row gap-[6px] min-200:gap-[3px] min-330:gap-[5px] min-400:gap-[35px] min-418px:gap-[16px] w-[297px] min-330:w-[320px] min-400:w-[370px] min-450:gap-[10px] min-450:w-[400px] min-600:gap-[10px] min-1000:gap-[45px] min-1110:gap-[75px] flex-wrap min-540:w-[540px] min-700:w-[600px] min-820:w-[760px] min-1000:w-[900px] min-1110:w-[850px] min-1200:w-[1000px] ">
            <BespokeCard products={productlist} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

function VideoCard() {
  return <div className=" min-800:w-[260px] min-850:w-[364px] h-[266px] bg-lightgray rounded "></div>;
}

export default BespokeProductPage;
