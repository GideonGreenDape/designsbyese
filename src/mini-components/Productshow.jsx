import { useState } from "react";
import { motion, reverseEasing } from "framer-motion";
import imageOne from "../Assets/images/imageOne.jpg";
import imageTwo from "../Assets/images/imageTwo.jpg";
function ProductDisplaySection() {
  const [ImageIndex, setImageIndex] = useState(0);
  const Images = [imageOne, imageTwo];

  const nextImage = () => {
    setImageIndex((index) => (index + 1) % Images.length);
  };


  return (
    <div className="mt-[30px] flex flex-col gap-[69px] min-w-fit min-1200:w-[950px] min-940:w-[700px] min-815:w-[590px] min-740:w-[540px] min-664:w-[450px] min-590:w-[400px]">
      <div className="flex flex-col gap-[26px]">
        <p className="leading-tight w-[265px] text-lightbrown text-[23px] font-FuturastdBook font-bold min-350:w-[299px] min-1200:text-[23px] ">
          Never Run Out of Style. We Make Mind-Blowing Sustainable Concepts.
        </p>
        <p className="font-FuturastBook w-[200px] font-medium text-[15px] min-420:w-[350px] text-slategray min-664:w-[509px]">
          where Style Never Fades and Concepts Astound |.
        </p>
      </div>

      <div className=" flex flex-row gap-[24px] self-start min-340:self-center min-400:self-center min-590:self-center">
        <motion.div
          whileInView={{
            x: 20,
          }}
          transition={{
            duration: 1,
          }}
          className="w-[190px] h-[287px] bg-shaddygray rounded-md"
        >
          <img src={Images[1]}></img>
        </motion.div>
        <motion.div
          whileInView={{
            x: 40,
          }}
          transition={{
            duration: 1,
          }}
          className="hidden min-590:block w-[190px] h-[290px] bg-shaddygray rounded-md"
        >
          {/* <img className="" src={Images[1]}></img> */}
        </motion.div>
        <motion.div
          whileInView={{
            x: 60,
          }}
          transition={{
            duration: 1,
          }}
          className="hidden min-815:block w-[190px] h-[290px] bg-shaddygray rounded-md"
        ></motion.div> 
      </div>
    </div>
  );
}

export default ProductDisplaySection;
