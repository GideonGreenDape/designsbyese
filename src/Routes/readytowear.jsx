import Footer from "../components/footer";
import Header from "../components/Header";
import ProductComponents from "../mini-components/productCard";
import ProductMenu from "../mini-components/productMenu";
import SortProduct from "../mini-components/productSort";
import productlist from "../utilities/productslist";
import { useSelector } from "react-redux";
import MenuCard from "../mini-components/menu";


function ReadyToWear() {
    const menuState=useSelector(state=>state.MenuSwitch.menuState)
    return(
        <>
        <Header />
        {menuState? <MenuCard />:<></> }
        <section className="mt-[100px] flex flex-col min-1200:items-end">
         <ProductMenu />
        </section>
         <section className="flex flex-col mb-[550px] min-200:ml-[2px] min-330:ml-[10px] min-700:ml-[3%] min-1110:items-center mt-[80px]  ">
         <div className="flex flex-row min-1200:gap-[75px] ">
         <div className="hidden min-1200:flex flex-col gap-[30px]">
         <SortProduct.Price />
         <SortProduct.Discount />
         </div>
         `<div className="flex flex-row gap-[6px] min-200:gap-[3px] min-330:gap-[5px] min-400:gap-[35px] min-418px:gap-[16px] w-[297px] min-330:w-[320px] min-400:w-[370px] min-450:gap-[10px] min-450:w-[400px] min-600:gap-[10px] min-1000:gap-[45px] min-1110:gap-[75px] flex-wrap min-540:w-[540px] min-700:w-[600px] min-820:w-[800px] min-1000:w-[950px] min-1110:w-[850px] ">
            <ProductComponents.ProductCard products={productlist} />
          </div>`
         </div>
         </section>
         <Footer />
        </>
    )
}



export default ReadyToWear;