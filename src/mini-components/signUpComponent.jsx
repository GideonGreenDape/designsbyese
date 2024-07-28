function SignUpComponent() {
  const component = [
    {
      id: 1,
      name: "Basic information",
    },
    {
      id: 2,
      name: "Shipping Address",
    },
    {
      id: 3,
      name: "Payment Method",
    },
   
  ];
  return (
    <ul className="flex flex-col gap-[27px] w-[145px] ">
      {component.map((item) => {
       return(
        <li
        key={item.id}
        className="font-montserrat w-[140px] cursor-pointer hover:text-lightblue hover:text-[13px] hover:font-bold font-medium text-[13px] text-gray "
      >
        {item.name}
      </li>
       )
      })}
    </ul>
  );
}

export default SignUpComponent;
