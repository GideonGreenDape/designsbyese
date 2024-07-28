import TwodigitLocaleStringGenerator from "../utilities/twodigitLocalestring";

function PaymentSummary() {
  const summary = {
    subtotal: 81000,
    shipping: 11000,
    Total: 92000,
  };
  return (
    <div className="ml-[9px] ">
      <a href="#">
        <p className="mb-[7px] w-[206px] font-FuturastdBook text-[15px] font-light text-lightblue">
          Add a discount code or gift card
        </p>
      </a>
      <div className="flex flex-row gap-[44px] items-center mb-[7px]">
        <p className="font-FuturastdBook font-light text-[15px] text-gray w-[49px]">
          subtotal
        </p>
        <p className="font-FuturastdBook font-bold text-[13px]">
          N{TwodigitLocaleStringGenerator(summary.subtotal)}
        </p>
      </div>
      <div className="flex flex-row gap-[44px] items-center mb-[7px]">
        <p className="font-FuturastdBook font-light text-[15px] text-gray w-[49px]">
          shipping
        </p>
        <p className="font-FuturastdBook font-bold text-[13px]">
          N{TwodigitLocaleStringGenerator(summary.shipping)}
        </p>
      </div>
      <div className="flex flex-row gap-[44px] items-center mb-[7px]">
        <p className="font-FuturastdBook font-light text-[15px] text-gray w-[49px]">
          Total
        </p>
        <p className="font-FuturastdBook font-bold text-[13px]">
          N{TwodigitLocaleStringGenerator(summary.Total)}
        </p>
      </div>
      <div className="flex flex-row gap-[2px] items-center">
        <p className="h-[16px] text-gray">* </p>
        <p className="h-[13px] font-FuturastdBook text-gray font-light text-[11px]">
          all taxes are included to the price displayed
        </p>
      </div>
      <button className="hover:bg-lightpurpleshade hover:text-white-200 bg-lightpurple text-white mt-[13px] w-[230px] h-[42px] py-[13px] px-[85px]  font-montserrat font-extrabold text-[13px]">
        Pay now
      </button>
    </div>
  );
}

function DeliveryDetails() {
  const userDetails = {
    email: "ihavegotanemailalso@gmail.com",
    shippingAddres:
      "44 honolulu way just walk past the street and bam! you are there",
    deliveryTime: 14,
  };
  return (
    <div className="ml-[9px] flex flex-col gap-[18px]">
      <p className="font-FuturastdBook font-light text-gray text-[15px]">
        {" "}
        Delivery Details
      </p>
      <div className="flex flex-row gap-[42px] items-center">
        <p className="font-FuturastdBook font-light text-gray text-[13px]">
          Email
        </p>
        <p className="font-FuturastdBook font-light text-[14px]">
          {EmailTruncater(userDetails.email)}
        </p>
      </div>
      <div className="flex flex-row  gap-[33px] items-start">
        <p className="font-FuturastdBook font-light text-gray text-[13px]">
          Ship to
        </p>
        <div className="flex flex-col gap-[10px] min-350:flex-row">
          <p className="font-FuturastdBook font-light text-[14px] w-[178px] leading-tight">
            {userDetails.shippingAddres}
          </p>
          <a
            href="#"
            className="font-FuturastdBook font-light text-[13px] hover:text-blue-700"
          >
            Edit
          </a>
        </div>
      </div>
      <div className="flex flex-row gap-[25px] items-center">
        <p className="font-FuturastdBook font-light text-gray text-[13px]">
          Est Time
        </p>
        <p className="font-FuturastdBook font-light text-[14px]">
          {userDetails.deliveryTime} days
        </p>
      </div>
    </div>
  );
}

function EmailTruncater(emailaddress) {
  let lengthchecker = emailaddress.length;
  if (lengthchecker > 26) {
    let value = emailaddress.slice(0, 11);
    let email = value + "...@gmail.com";
    return email;
  }
  return emailaddress;
}

const transactionSummary = {
  PaymentSummary,
  DeliveryDetails,
};

export default transactionSummary;
