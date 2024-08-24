import Footer from "../components/footer";
import Header from "../components/Header";
import ProductComponents from "../mini-components/productCard";
import productlist from "../utilities/productslist";
import { useSelector } from "react-redux";
import MenuCard from "../mini-components/menu";
import arrow from "../Assets/Icons/arrowup.svg";
import clickdown from "../Assets/Icons/clickdown.svg";
import slider from "../Assets/Icons/Slider.png";
import { useState } from "react";
import CustomizedSwitches from "../mini-components/availabilty";
import SliderSizes from "../mini-components/priceslider";

function CustomMade() {
  const menuState = useSelector((state) => state.MenuSwitch.menuState);
  const [trigger, settrigger] = useState(false);
  const [slides, setslides] = useState(false);
  const [availabilty,setavailability]= useState(false);
  return (
    <>
      <Header />
      {menuState ? <MenuCard /> : <></>}
      <section className=" flex flex-col  mt-[70px] mb-[400px] min-500:mt-[110px]   ">
        <div className="bg-white z-100 fixed top-[50px] w-[100vw] pt-[20px] shadow-sm">
          <div className="flex flex-col gap-[10px] items-center justify-center">
            <p className="font-montserrat text-center  text-[15px] text-gray w-[440px]">
              The Owambe Weekend Edit (Casual and comfortable weekend wear,
              inspired by Owambe social gatherings)
            </p>
            <p className="font-montserrat font-thin" >(8/8)</p>
          </div>
          <div className=" ml-[7%] flex flex-row gap-[9px] align-center bg-white h-[40px] ">
            <div
              onClick={(e) => {
                e.stopPropagation();
                settrigger(!trigger);
                setslides(true);
              }}
              className="flex items-center  pl-[4px] pr-[4px] gap-[6px] cursor-pointer "
            >
              <p className="font-montserrat text-[15px] text-gray">Sort By</p>
              <img className="w-[15px] h-[15px]" src={clickdown} alt="" />
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                settrigger(!trigger);
                setslides(false);
              }}
              className="flex items-center pl-[4px] pr-[4px] gap-[6px] cursor-pointer "
            >
              <p className="font-montserrat text-[15px] text-gray">Filter</p>
              <img className="w-[25px] h-[25px]" src={slider} alt="" />
            </div>
          </div>
        </div>
        {trigger ? (
          <div className="bg-white fixed pl-[4%] pr-[3%] z-150 top-[0px] pt-[90px]  h-[100vh] pb-[20px] w-[310px]  ">
            {slides ? (
              <div className="flex flex-col pt-[60px] gap-[50px] ">
                <div className="flex items-center align-center justify-between gap-[20px]">
                  <p className="font-montserrat text-[19px] ">Sort By</p>
                  <p
                    onClick={(e) => {
                      e.stopPropagation();
                      settrigger(!trigger);
                    }}
                    className="cursor-pointer font-montserrat font-medium border-[1px] px-[4px] py-[2px] text-[14px] "
                  >
                    Cancel
                  </p>
                </div>
                <ul className="flex flex-col gap-[19px] font-montserrat text-[15px] text-gray ">
                  <li>Best Selling</li>
                  <li>Price, Low to high</li>
                  <li>Price, high to low</li>
                  <li>Date, old to new</li>
                  <li>Date, new to old</li>
                </ul>
              </div>
            ) : (
              <div className="flex flex-col gap-[40px] pt-[60px] h-[400px]">
                <div className="flex items-center align-center justify-between gap-[20px]">
                  <p className="font-montserrat text-[19px] ">Filter</p>
                  <p
                    onClick={(e) => {
                      e.stopPropagation();
                      settrigger(!trigger);
                    }}
                    className="cursor-pointer font-montserrat font-medium border-[1px] px-[4px] py-[2px] text-[14px] "
                  >
                    Cancel
                  </p>
                </div>
                <div className="flex flex-col h-[390px] justify-between">
                  <div>
                    <div className="cursor-pointer flex flex-col border-t-[1px] border-b-[1px] border-lightgray">
                      <div onClick={(e)=>{
                        e.stopPropagation();
                        setavailability(!availabilty);
                      }} className="flex flex-row align-center py-[10px] justify-between ">
                        <p className="font-montserrat">Availabilty</p>
                        <img src={clickdown} alt="click icon" />
                      </div>
                      {availabilty? <div className="mt-[5px] mb-[5px] border-t-[1px] border-lightgray pl-[15px] py-[5px] flex items-center ">
                        <CustomizedSwitches />
                        <p className="font-montserrat font-medium text-gray text-[13px]">in stock</p>
                       </div>: <></>}
                    </div>
                    {/* <div className=" py-[10px]  border-b-[1px] border-lightgray">
                      <div className="flex flex-row align-center justify-between ">
                      <p className="font-montserrat">Price</p>
                      <img src={clickdown} alt="click icon" />
                      </div>
                      <div className= "flex flex-col pt-[15px] mb-[5px] border-t-[1px] border-lightgray pl-[2px] py-[5px] flex items-center ">
                      <SliderSizes />
                      <div className="flex flex-row items-center gap-[28px]">
                        <input className="w-[60px] h-[36px] border-[1px] " placeholder="0.00" type="text" name="text" id="text" />
                        <p className="font-montserrat">to</p>
                        <input className="w-[60px] h-[36px] border-[1px] " type="text" name="text" id="text" />
                      </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="cursor-pointer h-[40px] font-montserrat flex flex-col items-center justify-center bg-pink text-white ">
                    View Results
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <></>
        )}
        <div className="mt-[115px] border w-[95vw] flex min-1200:mr-[8vw] pl-[2px] gap-x-[10px] gap-y-[40px] min-1200:gap-x-[60px] flex-wrap ">
          <ProductComponents.ProductCard products={productlist} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default CustomMade;
