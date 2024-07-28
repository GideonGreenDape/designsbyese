

 function Template({name,value}) {
  return (
    <form action="#">
        <div className="flex flex-row gap-[10px] ">
        <input type="radio" name={name} id="all" />
        <p className="font-futurastdBook font-light text-gray text-[14px] ">{value}</p>
        </div>
    </form>
  );
}

 function Price(){
       return(
        <div className="flex flex-col gap-[8px] ">
        <p className=" font-montserrat font-semibold text-gray text-[14px] ">Price</p>
        <Template name={'all'} value={'All'} />
        <Template name={'all'} value={'Under N30,000.00'} />
        <Template name={'all'} value={'N30,000.00 - N90,000.00'} />
        <Template name={'all'} value={'N90,000.00 - N190,000.00'} />
        <Template name={'all'} value={'N200,000.00 & Above'} />
        </div>
       )
}

function Discount() {
    return(
        <div className="flex flex-col gap-[8px] ">
        <p className=" font-montserrat font-semibold text-gray text-[14px] ">Discount</p>
        <Template name={'all'} value={'All'} />
        <Template name={'all'} value={'20% discount and more'} />
        <Template name={'all'} value={'30% discount and more'} />
        <Template name={'all'} value={'40% discount and more'} />
        </div>
    )
}

const SortProduct={
    Price,
    Discount
}

export default SortProduct;