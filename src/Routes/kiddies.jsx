import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";
import { useSelector } from "react-redux";
import MenuCard from "../mini-components/menu";
function KiddiesPage() {
  const menuState=useSelector(state=>state.MenuSwitch.menuState)
  return (
    <>
      <Header />
      {menuState? <MenuCard />:<></> }
      <section className="flex flex-col items-center mt-[90px] mb-[240px]">
        <div className="flex flex-col items-center gap-[30px] min-1200:gap-[40px] ">
          <p className="font-futurastdBook w-[250px]  min-400:w-[370px] min-1000:w-[500px] font-medium text-[14px] text-gray">
            This request cannot be fufiled. This section is currently under maintainance
          </p>
          <Link
            to="/"
            className="font-futurastdBook font-medium font-[13px] text-blue-300"
          >
            Click here to return to Homepage
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default KiddiesPage;
