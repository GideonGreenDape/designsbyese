import Header from "./components/Header"
import { useState,useEffect } from "react";
import MenuCard from "./mini-components/menu";
import ProductCard from "./mini-components/productCard";
import links from "./mini-components/servicescard";
import Product from "./mini-components/expandedproductcard";
import Quickfeature from "./mini-components/quickfeatures";
import ProductDetails from "./mini-components/Productdetails";
import CartItems from "./mini-components/cartItems";
import Comments from "./mini-components/commentTemplates";
import transactionSummary from "./mini-components/paymentSummary";
import ProductDisplaySection from "./mini-components/Productshow";
import productlist from "./utilities/productslist";
import ThisweekRelease from "./mini-components/weeklyrelease";
import Kiddies from "./mini-components/kiddiesSection";
import About from "./mini-components/about";
import SuccessfulOrderCard from "./mini-components/orders";
import OrderCard from "./mini-components/orders";
import OrderHeader from "./mini-components/orderheader";
import OrderDetails from "./mini-components/orderdetails";
import ProductMenu from "./mini-components/productMenu";
import Mobileview from "./mini-components/featuresCard";
import FeaturesCard from "./mini-components/featuresCard";
import NameInput from "./mini-components/input";
import inputRelated from "./mini-components/input";







function App() {
  const [menuflip,setmenuflip]=useState(false);
  const Details={
    firstnme: 'George',
    middlename: 'parkison',
    lastname: 'aquatic',
    username: 'quackTheRailRunners',
    email: 'jackisgotanemailtoo@gmail.com',
    storebalance: '45,678.00',
}

function editMenu() {
  setmenuflip(!menuflip);
}

  return (
     <div className="relative">
        <Header />
        <div className="mt-[100px] flex flex-col gap-[20px]">
       
        <inputRelated.NameInput textname={'First name'} name={'firstname'} width={'w-[270px] h-[38px] '} />
        <inputRelated.NameInput textname={'Last name'} name={'lastname'} width={'w-[270px] h-[38px] '} />
        <inputRelated.Username textname={'username'} name={'username'} width={'w-[270px] h-[38px] '} />
        <inputRelated.EmailInput textname={'Email'} name={'email'} width={'w-[270px] h-[38px] '} />
        <inputRelated.Date textname={'Date'} name={'Date'} width={'w-[130px] h-[38px] '} />
        <inputRelated.Password textname={'password'} name={'password'} width={'w-[270px] h-[38px] '} />
        
        </div>

     </div>
  
  )
}

export default App
