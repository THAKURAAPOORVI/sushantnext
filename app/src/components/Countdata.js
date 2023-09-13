import React from "react";
import "../CSS/Banner.css";
import Link from "next/link";
import Image from "next/image";
const Countdata = ({ title, count }) => {
  return (
    <>
      <div className="container mb-3 mt-3">
        <div className="flex items-center ml-16">
          <h4 className="text-black text-[32px]  mr-5">
            {" "}
            {title} ({count}){" "}
          </h4>
          <Link href={``} className="text-cream mr-[9px]">
            View all
          </Link>
          <span>
            <Image src="/asset/btnarrow.png" width={21.5} height={15}></Image>
          </span>
        </div>
      </div>
    </>
  );
};

export default Countdata;
