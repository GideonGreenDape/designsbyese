import Header from "../components/Header";
import ExpandedProduct from "../mini-components/expandedproductcard";
import ProductDetails from "../mini-components/Productdetails";
import productlist from "../utilities/productslist";
import ProductComponents from "../mini-components/productCard";
import Footer from "../components/footer";
import Comments from "../mini-components/commentTemplates";
import { useSelector } from "react-redux";
import MenuCard from "../mini-components/menu";

function BuyProduct() {
  const menuState=useSelector(state=>state.MenuSwitch.menuState)
  return (
    <>
      <Header />
      {menuState? <MenuCard />:<></> }
      <main className="pt-[100px]  flex flex-col min-200:ml-[4%] min-584:ml-[0]  min-584:items-center  ">
        <div className="flex flex-row min-664:gap-[50px] min-1000:gap-[150px] ">
          <ExpandedProduct keyword={'Buy Now'} />
          <div className="hidden min-800:block ">
            <ProductDetails />
          </div>
        </div>
      </main>
      <div className="mt-[40px] ml-[4%] min-584:ml-[25px] min-700:ml-[8%] min-800:hidden">
        <ProductDetails />
      </div>
       <section className=" flex flex-col items-start mt-[50px] ml-[9%]">
       <div className="mt-[40px] flex flex-row items-start justify-between max-w-fit ">
       <Comments />
       </div>
       </section>
      <section className="mt-[70px] mb-[280px] flex flex-col gap-[35px] items-start ml-[7%]  min-1200:items-center">
        <p className=" font-montserrat font-semibold text-gray min-300:text-[18px] text-[22px]">
          Loving this look? Shop similar pieces now!
        </p>
        <div className="flex flex-row gap-[6px] min-330:gap-[11px] min-400:gap-[35px] min-418px:gap-[16px] w-[297px] min-330:w-[320px] min-400:w-[370px] min-450:gap-[10px] min-450:w-[400px] min-600:gap-[10px] min-1000:gap-[75px] flex-wrap min-540:w-[540px] min-700:w-[600px] min-820:w-[600px] min-1000:w-[850px] min-1200:w-[900px] ">
          <ProductComponents.ProductCard products={productlist} />
        </div>
      </section>
      <Footer />
    </>
  );
}


export default BuyProduct;
