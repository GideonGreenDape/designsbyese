import Footer from "../components/footer";
import Header from "../components/Header";
import BespokeCard from "../mini-components/bespokeComponent";
import FeaturesCard from "../mini-components/featuresCard";
import productlist from "../utilities/productslist";
import { useSelector } from "react-redux";
import MenuCard from "../mini-components/menu";

function BespokePage() {
  const menuState=useSelector(state=>state.MenuSwitch.menuState)
    return(
        <>
        <Header />
        {menuState? <MenuCard />:<></> }
        <section className="mt-[70px] mb-[500px] min-500:mt-[110px]  flex flex-col gap-[50px] ml-[5%]">
        <p className="font-montserrat font-semibold text-gray text-[19px] w-[270px] min-400:w-[320px]  min-500:text-[21px] min-500:w-[450px] ">
          See how we've captured individual style in our previous creations.
        </p>
        <div className="flex flex-row gap-[6px] min-200:gap-[3px] min-330:gap-[5px] min-400:gap-[35px] min-418px:gap-[16px] w-[297px] min-330:w-[320px] min-400:w-[370px] min-450:gap-[10px] min-450:w-[400px] min-600:gap-[10px] min-1000:gap-[45px] min-1110:gap-[75px] flex-wrap min-540:w-[540px] min-700:w-[600px] min-820:w-[800px] min-1000:w-[950px] min-1110:w-[850px] min-1200:w-[1100px] ">
        <BespokeCard products={productlist} />
        </div>
        </section>
        <Footer />
        </>
    )
}





export default BespokePage;