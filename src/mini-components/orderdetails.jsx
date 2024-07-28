import backarrow from "../Assets/Icons/backarrow.svg";
import TwodigitLocaleStringGenerator from "../utilities/twodigitLocalestring";
import deliveredOrder from "../Assets/Icons/deliveredOrder.svg";
import failedOrder from "../Assets/Icons/failedOrder.svg";
import packagedOrder from "../Assets/Icons/packagedOrder.svg";
import wechat from "../Assets/Icons/wechat.svg"

const orderdetails = [
  {
    id: 1,
    ordernumber: 23423453,
    noOfItems: 2,
    date: "21-02-2023",
    deliveryFees: 20000,
    itemPrice: 142000,
    totalprice: 162000,
    deliveryMethod: "Door Delivery",
    shippingAddress:
      "24, David cameron street off conneticut railway, united state of america.",
    deliveryAgent: "DHL Nigeria",
    paymentStatus: "Payment successful",
    itemPackaged: false,
    itemDelivered: false,
    deliveryDate: "24-10-2024",
    paymentMethod: "Bank Transfer",
    itemNames: [
      {
        itemId: 23345,
        productName:
          "The Zanzibar Collection (Beach-inspired and relaxed styles with a touch of Zanzibar's cultural influence)",
        quantityOrdered: 1,
        status: "cancelled-payment unsuccessful",
      },
      {
        itemId: 23345,
        productName:
          "The Zanzibar Collection (Beach-inspired and relaxed styles with a touch of Zanzibar's cultural influence)",
        quantityOrdered: 1,
        status: "cancelled-payment unsuccessful",
      },
    ],
  },
];

function Header() {
  return (
    <div className="flex flex-row gap-[20px] ">
      <img src={backarrow} alt="previous page icon" />
      <p className="font-FuturastdBook font-medium text-gray text-[16px] ">
        Order Details
      </p>
    </div>
  );
}

function Details() {
  return (
    <div>
      {orderdetails.map((item) => {
        return (
          <div key={item.id} className="flex flex-col gap-[4px] ">
            <div className="flex flex-col gap-[2px]">
              <p className="font-akaya text-[15px] ">
                Order No {item.ordernumber}
              </p>
              <hr className="border-t-[2px] ml-[20px] w-[100px] " />
            </div>
            <p className="font-akaya text-[16px]">{item.noOfItems} items</p>
            <p className="font-akaya text-[16px]">placed on {item.date}</p>
            <p className="font-akaya text-[16px]">
              Total: N{TwodigitLocaleStringGenerator(item.itemPrice)}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function ProductCard() {
  return (
    <div>
      {orderdetails.map((item) => {
        return (
          <div>
            {item.itemNames.map((items) => {
              return (
                <div className="flex flex-row gap-[13px] items-start">
                  <ImageTile />
                  <div className="flex flex-col gap-[8px] mt-[-6px] ">
                    <ProductName name={items.productName} />
                    <div className="flex flex-col gap-[7px] ">
                      <TransactionReason reason={items.status} />
                      <p className="font-montserrat font-bold text-[12px]">
                        QTY:{items.quantityOrdered}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function PaymentInformation() {
  return orderdetails.map((item) => {
    return (
      <div className="flex flex-col gap-[13px] ">
        <div className="flex flex-col gap-[6px] items-start ">
          <p className="font-FuturastdBook text-[12px] font-bold">
            PAYMENT INFORMATION
          </p>
          <hr className="border-t-[2px] border-gray w-[290px] min-400:w-[350px] " />
        </div>
        <div className="flex flex-col gap-[6px] ">
          <p className="font-FuturastdBook text-[14px] text-burntblack font-bold ">
            Payment Method
          </p>
          <p className="font-akaya text-[16px] text-gray ">
            {item.paymentMethod}
          </p>
        </div>
        <div className="flex flex-col gap-[6px] ">
          <p className="font-FuturastdBook text-[14px] text-burntblack font-bold ">
            Payment Details
          </p>
          <p className="font-akaya text-[16px] text-gray ">
            item total: {item.totalprice}
          </p>
          <p className="font-akaya text-[16px] text-gray ">
            Delivery fees: {item.deliveryFees}
          </p>
          <p className="font-akaya text-[16px] text-gray ">
            Total: {item.itemPrice}
          </p>
        </div>
        <div className="flex flex-col gap-[6px] items-start ">
          <p className="font-FuturastdBook text-[12px] font-bold">
            DELIVERY METHOD
          </p>
          <hr className="border-t-[2px] border-gray w-[290px] min-400:w-[350px] " />
        </div>
        <div className="flex flex-col gap-[6px] ">
          <p className="font-FuturastdBook text-[14px] text-burntblack font-bold ">
            Delivery Method
          </p>
          <p className="font-akaya text-[16px] text-gray ">
            {item.deliveryMethod}
          </p>
        </div>
        <div className="flex flex-col gap-[6px] ">
          <p className="font-FuturastdBook text-[14px] text-burntblack font-bold ">
            Shipping Address
          </p>
          <p className="font-akaya text-[16px] text-gray w-[298px] min-400:w-[360px] ">
            {item.shippingAddress}
          </p>
        </div>
        <div className="flex flex-col gap-[6px] ">
          <p className="font-FuturastdBook text-[14px] text-burntblack font-bold ">
            Shipping Details
          </p>
          <p className="font-akaya text-[16px] text-gray ">
            Door delivery,Fufiled by {item.deliveryAgent}
          </p>
        </div>
      </div>
    );
  });
}

function DeliveryStatus() {
  return (
    <div>
      {orderdetails.map((item) => {
        if (item.paymentStatus == "Payment successful" && item.itemDelivered == true) {
          return (
            <div className="flex flex-row gap-[20px] ">
              <img className="w-[50px] h-[244px] " src={deliveredOrder} alt="packaged itme" />
              <div className="flex flex-col gap-[70px] mt-[10px] ">
                <p className="font-akaya text-[15px] text-gray ">Payment successful</p>
                <p className="font-akaya text-[15px] text-gray ">order packaged</p>
                <p className="font-akaya text-[15px] text-gray w-[100px] ">
                  item delivered on - {item.deliveryDate}{" "}
                </p>
                <div className="flex flex-row ml-[-50px] self-center gap-[10px] ">
                    <p className="font-akaya text-[15px]">chat with us</p>
                    <img className="w-[24px] h-[24px]" src={wechat} alt="chat Icon" />
                </div>
              </div>
            </div>
          );
        } else if (
          item.paymentStatus == "Payment successful" &&
          item.itemDelivered == false
        ) {
          return (
            <div className="flex flex-row gap-[20px] ">
              <img className="w-[50px] h-[244px] " src={packagedOrder} alt="packaged itme" />
              <div className="flex flex-col gap-[70px] mt-[10px] ">
                <p className="font-akaya text-[15px] text-gray ">Payment successful</p>
                <p className="font-akaya text-[15px] text-gray ">order packaged</p>
                <p className="font-akaya text-[15px] text-gray w-[202px] ">
                  item ready for shipment Expected delivery date - {item.deliveryDate}{" "}
                </p>
                <div className="flex flex-row ml-[-50px] self-center gap-[10px] ">
                    <p className="font-akaya text-[15px]">chat with us</p>
                    <img className="w-[24px] h-[24px]" src={wechat} alt="chat Icon" />
                </div>
              </div>
            </div>
          );
        } else if (
          item.paymentStatus == "Payment unsuccessful" &&
          item.itemDelivered == false
        ) {
          return (
            <div className="flex flex-row gap-[20px] ">
              <img className="w-[50px] h-[244px] " src={failedOrder} alt="packaged itme" />
              <div className="flex flex-col gap-[70px] mt-[10px] ">
                <p className="font-akaya text-[15px] text-gray ">Payment successful</p>
                <p className="font-akaya text-[15px] text-gray ">order packaged</p>
                <p className="font-akaya text-[15px] text-gray ">
                  item not delivered
                </p>
                <div className="flex flex-row ml-[-50px] self-center gap-[10px]">
                    <p className="font-akaya text-[15px]">chat with us</p>
                    <img className="w-[24px] h-[24px]" src={wechat} alt="chat Icon" />
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

function ProductName({ name }) {
  return (
    <div className="font-akaya text-[19] w-[190px] min-330:w-[220px] min-350:w-[260px] min-450:w-[330px] min-500:w-[380px] ">
      {name}
    </div>
  );
}

function TransactionReason({ reason }) {
  return (
    <div className="w-[200px]  pt-[4px] pl-[6px] h-[27px] rounded-sm font-FuturastdBook font-medium text-[14px] bg-buttongreen text-white ">
      {reason}
    </div>
  );
}

function ImageTile() {
  return <div className="w-[40px] bg-gray rounded h-[40px] "></div>;
}

function OrderDate({ orderdate }) {
  return (
    <p className="font-FuturastdBook text-gray text-[12px] font-bold ">
      on -{orderdate}
    </p>
  );
}

const OrderDetails = {
  Header,
  ProductCard,
  Details,
  PaymentInformation,
  DeliveryStatus
};

export default OrderDetails;
