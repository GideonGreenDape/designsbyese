import footerlinks from "../mini-components/servicescard";
import bottomFooter from "../mini-components/copyright";

function Footer() {
    return(
        <>
         <footer className="ml-[4%] min-1200:ml-[7%] mr-[2%] flex flex-col items-center mt-[80px] pt-[65px] pb-[55px] border-solid border-gray border-t-[1px] border-b-[1px]">
        <div className="flex flex-row justify-between flex-wrap min-700:gap-[30px]  min-1200:gap-[132px] gap-[20px]  ">
          <footerlinks.UsefulLink />
          <footerlinks.Company />
          <footerlinks.Instagram />
          <footerlinks.Contactinfo />
        </div>
      </footer>
      <section className="flex flex-col items-center max-w-full">
        <div className="flex flex-row gap-[240px] justify-between  items-end mt-[60px] mb-[60px] max-w-full ">
          <bottomFooter.Coypright />
          <div className="hidden min-1200:flex flex-row items-end">
            <bottomFooter.EmailSubscription />
            <bottomFooter.OrderButton />
          </div>
        </div>
      </section>                      
        </>
    )
}


export default Footer;