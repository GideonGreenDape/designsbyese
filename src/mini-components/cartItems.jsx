export default function CartItems() {
  const cartitems = [
    {
      itemId: 123,
      itemName:
        "The Zanzibar Collection (Beach-inspired and relaxed styles with a touch of Zanzibar's cultural influence)",
      itemPrice: "N81,000.00",
    },
    {
      itemId: 123,
      itemName:
        "The Zanzibar Collection (Beach-inspired and relaxed styles with a touch of Zanzibar's cultural influence)",
      itemPrice: "N81,000.00",
    },
  ];
  return (
    <ul className="ml-[3%]">
      {cartitems.map((item) => {
        return (
          <>
            <hr className="w-[265px] min-330:w-[310px] min-360:w-[317px] min-400:w-[350px] min-450:w-[410px] min-420:w-[390px] min-560:w-[470px] border-t-[2px] px-[12px] py-[5px] border-gray min-[1110px]:w-[470px] min-[600px]:w-[382px]" />
            <li
              className="flex  flex-row gap-[22px] items-start mb-[31px] mt-[0px]"
              id={item.itemId}
            >
              <div className="w-[50px] h-[50px] mt-[5px] rounded bg-lightgray">
                {" "}
              </div>
              <div className="flex flex-col min-1110:flex-row gap-[7px] min-1200:gap-[10px] items-start">
                <p className="font-akaya w-[200px] min-330:w-[230px] min-330:text-[17px] min-360:w-[270px] min-400:w-[280px] min-450:w-[340px] min-420:w-[292px] min-560:w-[430px] leading-tight text-[18px] min-600:text-[16px] text-gray min-600:w-[320px]">
                  {item.itemName}
                </p>
                <p className="mt-[1px] font-montserrat font-bold text-gray text-[12px]">
                  {item.itemPrice}
                </p>
              </div>
            </li>
          </>
        );
      })}
    </ul>
  );
}
