import React, { useState } from "react";

import "../Css/Header.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../CSS/swiper.css";
import Image from "next/image";

import SwiperSingle from "./SwiperSingle";
import Link from "next/link";
const Heading1 = ({ title, count, showContainer, setShowContainer }) => {
  // const [showContainer, setShowContainer] = useState(false);

  const toggleContainer = () => {
    setShowContainer(!showContainer);
  };

  const handleFilterSubmit = () => {
    // Perform your filtering logic here

    // Close the filter container
    setShowContainer(false);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-7">
          {/*  */}
          <div className="flex items-center">
            <h4 className="text-white text-[32px] mr-5 ml-5">
              {title} ({count})
            </h4>
            <Link href={``} className="text-cream mr-[9px]">
              View all
            </Link>
            <span>
              <Image src="/asset/btnarrow.png" width={21.5} height={15}></Image>
            </span>
          </div>
          {/*  */}
          <div className="flex items-center">
            <span className="text-base text-primary mr-3">Filter results</span>
            <span className="mr-6 cursor-pointer">
              <Image
                onClick={toggleContainer}
                src="/asset/filterimg.png"
                width={36}
                height={36}
              />
            </span>
            <span className="text-base text-primary mr-3">View by</span>
            <span className="mr-3 cursor-pointer">
              <img src="../asset/Group 12.png"></img>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading1;
