import fabricicon from "../Assets/Icons/fabricicon.svg"
import vehicleicon from "../Assets/Icons/vehicleicon.svg"
import manequinicon from "../Assets/Icons/manequinicon.svg"
import servicelogo  from "../Assets/Icons/servicelogo.svg"
import { useState,useEffect } from "react"
function About() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
  
      window.addEventListener("resize", handleResize);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    if(width < 600){
      return(
        <Mobileview />
      )
    }
    else if(width >= 600 && width < 1200){
      return (
        <Tabview />
      )
    }
    else if(width >= 1200){
        return (
          <Pcview />
        )
    }
    return(
        <div>

        </div>
    )
}

function Pcview() {
    return(
        <div className="flex flex-col gap-[46px] items-center ">
            <Heading />
            <MainLine />
            <div className="flex flex-row gap-[40px] w-[740px]">
                <ServiceLeft /> 
                <ServiceRight />
            </div>
            <ButtomParagraph />
            <div className="flex flex-row gap-[20px] items-end">
                <ServiceOne />
                <ServiceTwo />
                <ServiceThree />
            </div>
            <div className="mt-[20px]">
            <Brand />
            </div>
        </div>
    )
}


function Tabview() {
    return(
        <div className="flex flex-col items-center gap-[25px]">
        <Heading />
        <MainLine />
        <div className="flex flex-row gap-[20px]">
          <ServiceTwo />
          <ServiceThree />
        </div>
        <ServiceOne />
        </div>
    )
}

function Mobileview() {
    return(
        <div className="flex flex-col gap-[35px] items-center ">
           <Heading />
           <MainLine />
           <div className="flex flex-col gap-[20px] items-center">
           <ServiceOne />
                <ServiceTwo />
                <ServiceThree />
           </div>
        </div>
    )
}

function Heading() {
    return(
        <p className="font-FuturastdBook min-1200:font-medium font-bold text-[16px]">
            WHY WE ARE UNIQUE
        </p>
    )
}


function MainLine() {
    return(
        <div className="flex flex-col gap-[10px] w-[290px] min-340:w-[300px] min-360:w-[335px] min-400:w-[350px] min-450:w-[400px] min-500:w-[460px] min-600:w-[570px] min-664:w-[629px] min-1200:w-[869px]">
            <p className="font-FuturastdBook font-thin text-gray text-center text-[15px] ">
            Fall in love with the art of dressmaking 
            at DesignsbyEse, Warri's premier destination 
            for custom-made, bespoke, and ready-to-wear dresses. 
            Our skilled artisans collaborate with you to craft 
            the dress of your dreams, whether it's a 
            timeless classic or a trendsetting masterpiece.
            </p>
            <p className="font-FuturastdBook font-thin text-gray text-center text-[15px] ">
            Unlike impersonal online stores, 
            DesignsbyEse offers a personalized experience. 
            Whether you seek a timeless silhouette or 
            a show-stopping statement dress, 
            our skilled tailors and designers 
            collaborate with you to bring your 
            vision to life. Explore our curated 
            collection of ready-to-wear pieces, 
            or embark on a bespoke journey to create a 
            one-of-a-kind dress tailored just for you.
            </p>
        </div>
    )
}

function ServiceOne() {
    return(
        <div className="w-[282px] flex flex-col items-center gap-[12px] ">
            <img className="w-[30px] h-[36px] " src={manequinicon} alt="manequin icon" />
            <p className="font-FuturastdBook text-gray font-thin text-[12px] w-[247px] text-center">
            Choose your ideal material, then 
            let Designs by Ese bring your vision to life.
            </p>
        </div>
    )
}

function ServiceTwo() {
    return(
        <div className="w-[282px] flex flex-col items-center gap-[12px] ">
            <img  className="w-[30px] h-[36px] "src={vehicleicon} alt="manequin icon" />
            <p className="font-FuturastdBook text-gray font-thin text-[12px] w-[247px] text-center">
            Choose your ideal material, then 
            let Designs by Ese bring your vision to life.
            </p>
        </div>
    )
}

function ServiceThree() {
    return(
        <div className="w-[282px] flex flex-col items-center gap-[12px] ">
            <img  className="w-[30px] h-[36px] " src={fabricicon} alt="manequin icon" />
            <p className="font-FuturastdBook text-gray font-thin text-[12px] w-[247px] text-center">
            Choose your ideal material, then 
            let Designs by Ese bring your vision to life.
            </p>
        </div>
    )
}


function ServiceLeft() {
    return(
        <div>
            <p className="font-FuturastdBook text-[13px] font-medium ">SERVICES AND QUALITY</p>
            <ul className="flex flex-col ">
                <li className="list-disc list-inside w-[416px] font-FuturastdBook text-[14px] font-thin text-gray">Unparalleled Support: We offer hassle-free returns within 30 days.</li>
                <li className="list-disc list-inside w-[416px] font-FuturastdBook text-[14px] font-thin text-gray">Guaranteed Bespoke Brilliance.</li>
                <li className="list-disc list-inside w-[416px] font-FuturastdBook text-[14px] font-thin text-gray">From the initial consultation to the final fitting, 
                    we ensure a stress-free and rewarding experience.</li>
                <li className="list-disc list-inside w-[416px] font-FuturastdBook text-[14px] font-thin text-gray">dedicated customer service to answer all your questions 
                    and guide you through the process.</li>
            </ul>
        </div>
    )
}

function ServiceRight() {
    return(
        <div>
            <p className="font-FuturastdBook text-[13px] font-medium ">UNIQUE SHOPPING EXPERIENCE</p>
            <ul className="flex flex-col ">
                <li className="list-disc list-inside w-[416px] font-FuturastdBook text-[14px] font-thin text-gray">200+ Custom Creations Every Week</li>
                <li className="list-disc list-inside w-[416px] font-FuturastdBook text-[14px] font-thin text-gray">Exclusive, Ready-to-Wear Delights</li>
                <li className="list-disc list-inside w-[350px] font-FuturastdBook text-[14px] font-thin text-gray">Rest assured, your DesignsbyEse dress is authentic 
                    and a true reflection of your unique style</li>
                <li className="list-disc list-inside w-[416px] font-FuturastdBook text-[14px] font-thin text-gray">Guaranteed Bespoke Brilliance</li>
            </ul>
        </div>
    )
}


function ButtomParagraph() {
    return(
        <div className="flex flex-col gap-[10px] ">
            <p className="font-FuturastdBook font-thin text-[14px] text-center w-[869px] text-gray">
            At DesignsbyEse, the possibilities are endless. 
            Discover a spectrum of styles, from romantic 
            gowns to effortless everyday pieces that enhance 
            your personal flair. 
            We use only the finest materials and 
            employ meticulous craftsmanship to ensure your dress 
            becomes a cherished part of your wardrobe.
            </p>
            <p className="font-FuturastdBook font-thin text-[14px] text-center w-[869px] text-gray">
            Forget sifting through endless designer collections. 
            At DesignsbyEse, the spotlight is on you. 
            We create stunning dresses 
            that perfectly capture your individual style, 
            whether you crave a timeless 
            classic or a runway-inspired showstopper.
            </p>
        </div>
    )
}

function Brand() {
    return(
        <div className="flex flex-col gap-[15px] items-center ">
            <img className="w-[81px] h-[81px] " src={servicelogo} alt="brandlgo" />
            <p className="font-FuturastdBook text-[13px] font-medium ">The denim brand that flatters every figure - DesignsByEse</p>
        </div>
    )
}


export default About;