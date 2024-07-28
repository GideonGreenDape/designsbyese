import { Link } from "react-router-dom"
import Designsbyeselogo from "../Assets/Icons/Designsbyeselogo.svg"
function Brandlogo() {
    return(
        <div className="hidden min-450:flex flex-row items-center gap-[5px] min-1024:hidden " >
            {/* <p className="font-Peralta text-Burntpurple">DesignsbyEse</p> */}
           <Link to= "/">
           <img src={Designsbyeselogo} className="w-[25px] h-[25px]" alt="design by ese brand logo" />
           </Link>
           </div>
    )
}

function LogoReversed(){
    return(
        <Link to="/" >
        <div className="hidden min-1024:flex flex-row items-center gap-[18px] ">
            <img src={Designsbyeselogo} className="w-[25px] h-[25px]" alt="design by ese brand logo" />
            <p className="font-Peralta text-buttondark">DesignsbyEse</p>
        </div>
        </Link>
    )
}

const logo={
    Brandlogo,
    LogoReversed
}

export default logo