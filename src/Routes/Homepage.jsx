import Header from "../components/Header";
import About from "../mini-components/about";
import Kiddies from "../mini-components/kiddiesSection";
import ProductComponents from "../mini-components/productCard";
import ProductDisplaySection from "../mini-components/Productshow";
import Quickfeature from "../mini-components/quickfeatures";
import ThisweekRelease from "../mini-components/weeklyrelease";
import productlist from "../utilities/productslist";
import HeaderLayout from "../mini-components/HomeLayout";
import Footer from "../components/footer";
import { useSelector } from "react-redux";
import MenuCard from "../mini-components/menu";

let ThisweekProduct = [
  {
    productName:
      "The Owambe Weekend Edit (Casual and comfortable weekend wear, inspired by Owambe social gatherings)",
    productImage: "none",
    discountPrice: "17700",
    discount: "20",
    actualprice: "101000",
  },
];

export default function HomePage() {
  const menuState=useSelector(state=>state.MenuSwitch.menuState)
  return (
    <>
      <Header />
      {menuState? <MenuCard />:<></> }
      <section className="ml-[-3%] flex flex-col pt-[30px] items-center bg-herobackground min-1000:h-[540px] bg-white-300 h-[500px]  max-w-full mt-[50px]  ">
        <HeaderLayout />
      </section>
      <section className=" shadow-md hidden max-w-full h-[90px] min-1200:flex flex-row justify-around items-start pt-[20px]">
        <Quickfeature.Brandfeature />
        <Quickfeature.Tagfeature />
        <Quickfeature.PaymentMethods />
        <Quickfeature.ShippingFeature />
      </section>
      <section className="flex flex-col items-center pt-[65px] min-w-fit">
        <div className="ml-[5px] flex flex-col gap-[49px] items-start ">
          <p className="font-montserrat font-bold text-[21px] w-[250px] min-400:w-[340px] min-540:w-[450px] min-820:max-w-full min-700:w-[500px] ">
            Fresh Arrivals! Shop Our New Ready-to-Wear Collection.
          </p>
          <div className="flex flex-row gap-[6px] min-330:gap-[11px] min-400:gap-[35px] min-418px:gap-[16px] w-[297px] min-330:w-[320px] min-400:w-[370px] min-450:gap-[10px] min-450:w-[400px] min-600:gap-[10px] min-1000:gap-[75px] flex-wrap min-540:w-[540px] min-700:w-[600px] min-820:w-[600px] min-1000:w-[850px] ">
            <ProductComponents.ProductCard products={productlist} />
          </div>
        </div>
      </section>
      <section className="mt-[70px] flex flex-col pl-[8%] min-450:pl-[15%] min-1200:pl-[17%] ">
        <ProductDisplaySection />
        <div className="mt-[125px] ml-[-7%] min-500:ml-[-6%] min-1200:self-start ">
          <ThisweekRelease product={ThisweekProduct} />
        </div>
      </section>
      <section className="mt-[110px]  flex flex-col items-center">
        <Kiddies />
      </section>
      <section className="flex flex-col items-center mt-[110px] mb-[450px]">
        <About />
      </section>
      <Footer />
    </>
  );
}
