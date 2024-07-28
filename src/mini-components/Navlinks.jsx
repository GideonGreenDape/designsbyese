import { Link } from "react-router-dom";


const linkItems = [
  { id:1,
    name: "Custom Made",
    link: '/custom_made'
  },
  { id:2,
    name:"Ready To Wear",
    link: '/ready_to_wear'
  },
  { id:3,
    name:"Kiddies",
    link: '/kiddies'
  },
  { id:4,
    name:"Bespoke",
    link: '/bespoke'
  },
  { id:5,
    name:"Measurement Guides",
    link: '/measurement_guides'
  },
];

function NavLinks() {
  return (
    <nav className="hidden min-[1200px]:block ">
      <ul className="flex flex-row gap-[20px] min-[1231px]:gap-[15px]">
        {linkItems.map((items) => {
          return (
            <Link to={items.link} key={items.id} >
              <li className="font-montserrat no-underline text-[13px] hover:font-black hover:underline min-[1231px]:text-[12px] text-buttondark font-bold">
                {items.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavLinks;
