function Company() {
  const company = [
    {
      id: 1,
      linkname: "Home",
    },
    {
      id: 2,
      linkname: "About Us",
    },
    {
      id: 3,
      linkname: "Work With Us",
    },
    {
      id: 4,
      linkname: "Our Blog",
    },
    {
      id: 5,
      linkname: "Terms & Condition",
    },
  ];
  return (
    <div className="flex flex-col gap-[29px] w-[121px]">
      <div className="flex flex-col gap-[10px]">
        <p className="font-opensans w-[84px] font-extrabold text-[11px] text-gray">
          COMPANY
        </p>
        <hr className="w-[50.01px] border-t-[2.8px] border-gray" />
      </div>

      <ul className="flex flex-col gap-[15px]">
        {company.map((items) => {
          return (
            <li id={items.id}>
              <a
                href="#"
                className="font-opensans text-[13px] font-bold text-gray hover:font-extrabold"
              >
                {items.linkname}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function UsefulLink() {
  const useLinks = [
    {
      id: 1,
      linkname: "Help",
    },
    {
      id: 2,
      linkname: "Track My Order",
    },
    {
      id: 3,
      linkname: "Women",
    },
    {
      id: 4,
      linkname: "Kids",
    },
    {
      id: 5,
      linkname: "Kids Accessories",
    },
  ];

  return (
    <div className="flex flex-col gap-[29px] w-[106px] min-500:w-[120px]">
      <div className="flex flex-col gap-[10px]">
        <p className="font-opensans w-[84px] font-extrabold text-[11px] text-gray">
          USEFUL LINK
        </p>
        <hr className="w-[50.01px] border-t-[2.8px] border-gray" />
      </div>
      <ul className="flex flex-col gap-[15px] w-[106px] min-500:w-[120px]">
        {useLinks.map((items) => {
          return (
            <li id={items.id}>
              <a
                href="#"
                className="font-opensans text-[13px] font-bold text-gray hover:font-extrabold"
              >
                {items.linkname}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Contactinfo() {
  const contactinfo = [
    {
      id: 1,
      linkname: "6,Rutero street Jeddo,  Delta State",
    },
    {
      id: 2,
      linkname: "DesignsbyEse@gmail.com",
    },
    {
      id: 3,
      linkname: "(+234)  34102 247",
    },
  ];

  return (
    <div className="flex flex-col gap-[29px] min-400:gap-[29px] w-[265px] ">
      <div className="flex flex-col gap-[10px]">
        <p className="font-opensans w-[84px] font-extrabold text-[11px] text-gray">
          CONTACT INFO
        </p>
        <hr className="w-[50.01px] border-t-[2.8px] border-gray" />
      </div>
      <ul className="flex flex-col gap-[15px] min-500:w-[200px] w-[145px] text-wrap">
        {contactinfo.map((item) => {
          return (
            <li
              id={item.id}
              className={
                item.linkname == "6,Rutero street Jeddo,  Delta State"
                  ? "w-[145px] min-430:w-[177px] min-500:w-[200px] leading-tight text-wrap"
                  : "w-[145px] min-430:w-[177px] min-500:w-[200px] text-wrap"
              }
            >
              <a
                href="#"
                className="w-[105px] min-400:w-[147px] block font-opensans text-[13px] font-bold text-gray hover:font-extrabold"
              >
                {item.linkname}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Instagram() {
  return (
    <div className="flex flex-col gap-[29px] ">
      <div className="flex flex-col gap-[10px]">
        <p className="font-opensans w-[84px] font-extrabold text-[11px] text-gray">
          INSTAGRAM
        </p>
        <hr className="w-[50.01px] border-t-[2.8px] border-gray" />
      </div>

      <div className="flex flex-row gap-[17px]">
        <div className="w-[40px] h-[40px] bg-gray rounded "></div>
        <div className="w-[40px] h-[40px] bg-gray rounded  "></div>
        <div className="w-[40px] h-[40px] bg-gray rounded  "></div>
      </div>
    </div>
  );
}

const footerlinks = {
  Company,
  UsefulLink,
  Contactinfo,
  Instagram,
};

export default footerlinks;
