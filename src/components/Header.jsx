import brandlogo from "../Assets/Icons/brandlogo.png";
import NavLinks from "../mini-components/Navlinks";
import Logo from "../mini-components/brandlogo";
import NavigationIconGroup from "../mini-components/navigationIconsGroup";
import searchbar from "../mini-components/popupsearch";
import Searchbar from "../mini-components/searchbar";
import { useState, useEffect } from "react";

function Header() {
  const [State, setState] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [Midstate, setMidstate] = useState(false);
  const [data, setdata]= useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/loginchecker'); // Replace with your API URL
        const result = await response.json();
        setdata(result);
      } catch (error) {
        setError('Error fetching data');
      }
    };

    fetchData();
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function popUp() {
    if (width > 1199) {
      setState(!State);
      console.log(width);
    }
    if (width < 800) {
      setMidstate(!Midstate);
    }
  }
  return (
    <header className="bg-pink h-[50px] pt-[6px] pb-[4px] z-100 fixed top-0 left-0 right-0 flex flex-row justify-between  items-center px-[6%] min-350:px-[25px]  ">
      <div className="min-450:hidden">
        <img className="h-[24px] w-[24px] " src={brandlogo} alt="brandLogo" />
      </div>

      <Logo.Brandlogo />
      <Logo.LogoReversed />
      <Searchbar />
      {State ? <searchbar.PopupSearch onclick={popUp} /> : <NavLinks />}
      {Midstate && width > 350 && width < 800 ? (
        <searchbar.PopupSearchMid onclick={popUp} />
      ) : (
        <NavigationIconGroup onclick={popUp} />
      )}
    </header>
  );
}

export default Header;
