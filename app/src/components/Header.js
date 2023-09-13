"use client";
import React, { useState, useEffect } from "react";
import "../Css/Header.css";
import Image from "next/image";
const Header = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    // Code inside useEffect will run only on the client side
  }, []);

  // const [showContainer, setShowContainer] = useState(false);

  // const toggleContainer = () => {
  //   setShowContainer(!showContainer);
  // };
  return (
    <>
      {/* firstpart menu   */}
      <div className="mainarea absolute top-0 bottom-0 left-0 right-0 z-0"></div>

      <section className="container mx-auto relative z-10">
        <div className="flex justify-between my-10 mb-28">
          <p>NewsLetter</p>
          <div className="flex">
            <p className="signlog">Sign up / Log in</p>
            <span className="profileimg">
              <Image src="/asset/profile.png" width={18} height={18} />
            </span>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex justify-center relative z-10 mb-12">
        <h6 className="text-2xl text-center text-grey-title max-w-[628px]">
          Iaculis dis nunc vitae faucibus ullamcorper ac ullamcorper a tristique
          consectetur diam pulvinar parturient
        </h6>
      </section>

      <div className="container mx-auto relative z-10 mb-16">
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="searchBar"
            placeholder="Alfa Romeo, 164L, unsold…"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <div className={`underline ${isFocused ? "show" : ""}`}></div>
          <div className="">
            <Image src="/asset/btnsearchD.png" width={78} height={78} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
