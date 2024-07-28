import { useState } from "react";



const allorderlist = [
  {
    id:1,
    productName:
      "The Zanzibar Collection (Beach-inspired and relaxed styles with a touch of Zanzibar's cultural influence)",
    status: "failed",
    reason: "Cancelled - payment unsuccessful",
    transactonDate: "21-02-2023",
    imageUrl: " ",
  },
  {
    id:2,
    productName:
      "The Zanzibar Collection (Beach-inspired and relaxed styles with a touch of Zanzibar's cultural influence)",
    status: "delivered",
    reason: "Delivered",
    transactonDate: "21-02-2023",
    orderNumber: "23423453 ",
    imageUrl: "",
  },
  {
    id:3,
    productName:
      "The Zanzibar Collection (Beach-inspired and relaxed styles with a touch of Zanzibar's cultural influence)",
    status: "processing",
    reason: "processing",
    transactonDate: "21-02-2023",
    orderNumber: "23423453 ",
    imageUrl: "",
  },
  {
    id:4,
    productName:
      "The Zanzibar Collection (Beach-inspired and relaxed styles with a touch of Zanzibar's cultural influence)",
    status: "returned",
    reason: "Returned",
    transactonDate: "21-02-2023",
    orderNumber: "23423453 ",
    imageUrl: "",
  },
];

function OrderCard() {
const [Orderstate, setOrderstate] = useState(false);
  return (
    <div className="ml-[20px] mt-[20px] w-[456px]" >
      <ul className="flex flex-col gap-[18px] ">
        {allorderlist.map((value) => {
          if (Orderstate) {
            if (value.status == "delivered" || value.status == "processing" ) {
                if (value.status == "delivered") {
                    return <SuccessfulOrderCard order={value} />
                }
                if (value.status == "processing") {
                    return <ProcessingOrders order={value} />
                }
              } 
          }
          else if (!Orderstate) {
            if (value.status == "failed" || value.status == "returned" ) {
                if (value.status == "failed") {
                    return <FailedOrderCard order={value} />
                }
                if (value.status == "returned") {
                    return <ReturnedOrderCard order={value} />
                }
              } 
          }
        })}
      </ul>
    </div>
  );
}

function FailedOrderCard({ order }) {
  return (
    <li key={order.id} className="ml-[20px] mb-[30px] flex flex-row gap-[13px] ">
      <ImageTile />
      <div className="flex flex-col gap-[11px] ">
        <ProductName name={order.productName} />
        <div className="flex flex-col gap-[11px] min-1200:flex-row min-1200:items-center min-1200:justify-between">
          <PaymentUnsuccessful reason={order.reason} />
          <OrderDate orderdate={order.transactonDate} />
        </div>
      </div>
    </li>
  );
}

function SuccessfulOrderCard({ order }) {
  return (
    <li key={order.id} className="ml-[20px] mb-[30px] flex flex-row gap-[13px] ">
      <ImageTile />
      <div className="flex flex-col gap-[11px] ">
        <ProductName name={order.productName} />
        <div className="flex justify-between min-1200:flex-row min-1200:items-center min-1200:justify-between">
          <SuccessfulPayment reason={order.reason} />
          <OrderNumber ordernumber={order.orderNumber} />
        </div>
        <OrderDate orderdate={order.transactonDate} />
      </div>
    </li>
  );
}

function ReturnedOrderCard({ order }) {
  return (
    <li key={order.id} className="ml-[20px] mb-[30px] flex flex-row gap-[13px] ">
      <ImageTile />
      <div className="flex flex-col gap-[11px] ">
        <ProductName name={order.productName} />
        <div className="flex justify-between min-1200:flex-row min-1200:items-center min-1200:justify-between">
          <Returned reason={order.reason} />
          <OrderNumber ordernumber={order.orderNumber} />
        </div>
        <OrderDate orderdate={order.transactonDate} />
      </div>
    </li>
  );
}

function ProcessingOrders({ order }) {
  return (
    <li key={order.id} className="ml-[20px] mb-[30px] flex flex-row gap-[13px] ">
      <ImageTile />
      <div className="flex flex-col gap-[11px] ">
        <ProductName name={order.productName} />
        <div className="flex justify-between min-1200:flex-row min-1200:items-center min-1200:justify-between">
          <Processing reason={order.reason} />
          <OrderNumber ordernumber={order.orderNumber} />
        </div>
        <OrderDate orderdate={order.transactonDate} />
      </div>
    </li>
  );
}

function ProductName({ name }) {
  return (
    <div className="font-akaya text-[19] w-[190px] min-330:w-[220px] min-350:w-[260px] min-450:w-[330px] min-500:w-[380px] ">
      {name}
    </div>
  );
}

function PaymentUnsuccessful({ reason }) {
  return (
    <p className=" w-[198px] min-300:w-[196px] min-330:w-[200px] pt-[4px] pl-[6px] h-[27px] rounded-sm font-FuturastdBook font-medium text-[13px] bg-gray text-white ">
      {reason}
    </p>
  );
}

function SuccessfulPayment({ reason }) {
  return (
    <div className=" w-[67px] pt-[4px] pl-[6px] h-[27px] rounded-sm font-FuturastdBook font-medium text-[14px] bg-buttongreen text-white ">
      {reason}
    </div>
  );
}

function Returned({ reason }) {
  return (
    <div className=" w-[67px] pt-[2px] pl-[6px] h-[25px] rounded-sm font-FuturastdBook font-medium text-[14px] bg-buttonred text-white ">
      {reason}
    </div>
  );
}

function Processing({ reason }) {
  return (
    <div className=" w-[75px] pt-[2px] pl-[6px] h-[25px] rounded-sm font-FuturastdBook font-medium text-[14px] bg-buttonblue text-white ">
      {reason}
    </div>
  );
}

function OrderDate({ orderdate }) {
  return (
    <p className="font-FuturastdBook text-gray text-[12px] font-bold ">
      on -{orderdate}
    </p>
  );
}

function OrderNumber({ ordernumber }) {
  return (
    <p className="font-FuturastdBook font-medium text-[14px] text-gray">
      order : <span className="text-[11px] font-bold">{ordernumber}</span>
    </p>
  );
}

function ImageTile() {
  return <div className="w-[40px] bg-gray rounded h-[40px] "></div>;
}

export default OrderCard;
