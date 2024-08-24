import footerlinks from "../mini-components/servicescard";
import bottomFooter from "../mini-components/copyright";

function Footer() {
    return(
        <>
         <footer className="bg-white pl-[9%] min-1200:pl-[4%] pr-[2%] flex flex-col items-center mt-[80px] pt-[65px] pb-[55px] border-solid border-gray  border-b-[1px]">
        <div className="flex flex-row pl-[1%] justify-between flex-wrap min-700:gap-[30px] gap-y-[35px]  min-1200:gap-[132px] gap-x-[10px]  ">
          <footerlinks.UsefulLink />
          <footerlinks.Company />
          <footerlinks.Contactinfo />
          <footerlinks.Instagram />
        </div>
      </footer>
      <section className="flex flex-col items-center max-w-full">
        <div className="flex flex-row gap-[240px] justify-between ml-[8%] items-end mt-[60px] mb-[60px] max-w-full ">
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