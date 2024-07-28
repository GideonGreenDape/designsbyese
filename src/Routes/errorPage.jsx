import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import MenuCard from "../mini-components/menu";

function ErrorPage() {
    const menuState=useSelector(state=>state.MenuSwitch.menuState)
    return(
        <>
            <Header />
            {menuState? <MenuCard />:<></> }
            <section className="flex flex-col items-center mt-[90px] mb-[240px]">
                <div className="flex flex-col items-center gap-[30px] min-1200:gap-[40px] ">
                    <p className="font-futurastdBook w-[250px]  min-400:w-[370px] font-medium text-[14px] text-gray">OOPS! This request cannot be fufiled. Page Not Found</p>
                    <Link to="/" className="font-futurastdBook font-medium font-[13px] text-blue-300">Click here to return to Homepage</Link>
                </div>
            </section>
            <Footer />  
        </>
    )
}


export default ErrorPage;