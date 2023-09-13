"use client";
import React, { useState } from "react";

import "../Css/Header.css";
import Countdata from "./Countdata";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../CSS/swiper.css";
import Heading1 from "./Heading1";
import SwiperSingle from "./SwiperSingle";
import Link from "next/link";

const CallBanner = () => {
  const [showContainer, setShowContainer] = useState(false);

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
      <section className="relative z-10">
        {/* <div className="container mx-auto">
          <div className="flex justify-between items-center">
          
            <div className="flex items-center">
              <h4 className="text-white text-[32px] mr-5">
                Live Auctions (32)
              </h4>
              <Link href={``} className="text-cream mr-[9px]">
                View all
              </Link>
              <span>
                <img src="../asset/btnarrow.png"></img>
              </span>
            </div>
            
            <div className="flex items-center">
              <span className="text-base text-primary mr-3">
                Filter results
              </span>
              <span className="mr-6 cursor-pointer">
                <img
                  onClick={toggleContainer}
                  src="../asset/filterimg.png"></img>
              </span>
              <span className="text-base text-primary mr-3">View by</span>
              <span className="mr-3 cursor-pointer">
                <img src="../asset/Group 12.png"></img>
              </span>
            </div>
          </div>
        </div> */}
        <Heading1
          title={"Live Auctions"}
          count={120}
          showContainer={showContainer}
          setShowContainer={setShowContainer}
        />

        <div className="container mx-auto">
          {showContainer && (
            <div className="w-full">
              <div className="rowfilter bg-white ml-28 mr-28 mt-12  justify-center">
                <div className="columnpart justify-center flex ">
                  <div className="row  filterrow">
                    <div className="col-2">
                      <div class="section col-2">
                        <h2 className="filtheading items-start">Vehicle</h2>
                        <ul class="checkbox-list">
                          <li>
                            <input type="checkbox" id="item1" />
                            <label className="text-xs" for="item1">
                              Car
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item2" />
                            <label className="text-xs" for="item2">
                              Bike
                            </label>
                          </li>
                        </ul>
                      </div>{" "}
                    </div>
                    <div className="col-2">
                      <div class="section col-2">
                        <h2 className="filtheading items-start">
                          Manufacturer
                        </h2>
                        <ul class="checkbox-list">
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              Porsche (20)
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item4" />
                            <label className="text-xs" for="item4">
                              Ferrari (9)
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              Bmw (7)
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              Fiat (6)
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              Mercedes-Benz (12)
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              Lamborghini (5)
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              Jaguar (3)
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              Lancia (3)
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              Audi (2)
                            </label>
                          </li>
                        </ul>
                        <div className="viewall">
                          <img src="./asset/viewall.png"></img>
                        </div>
                      </div>{" "}
                    </div>
                    <div className="col-2">
                      <div class="section col-2">
                        <h2 className="filtheading items-start">
                          Auction status
                        </h2>
                        <ul class="checkbox-list">
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              Live
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item4" />
                            <label className="text-xs" for="item4">
                              Comming soon
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item4" />
                            <label className="text-xs" for="item4">
                              Sold
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item4" />
                            <label className="text-xs" for="item4">
                              Unsold
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item4" />
                            <label className="text-xs" for="item4">
                              About to go
                            </label>
                          </li>
                        </ul>
                      </div>{" "}
                    </div>
                    <div className="col-2">
                      <div class="section col-2">
                        <h2 className="filtheading items-start">Seller type</h2>
                        <ul class="checkbox-list">
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              Private (4)
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              Trade (8)
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              Managed (4)
                            </label>
                          </li>
                        </ul>
                      </div>{" "}
                    </div>
                    <div className="col-2">
                      <div class="section col-2 lt">
                        <h2 className="filtheading items-start">Location</h2>
                        <ul class="checkbox-list">
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              United Kingdom (20)
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item4" />
                            <label className="text-xs" for="item4">
                              Australia (9)
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              Italy (7)
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              Germany (6)
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              Spain (12)
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              Hongkong (5)
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              Ireland (3)
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              Netherlands (3)
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              Sweden (2)
                            </label>
                          </li>
                        </ul>
                        <div className="viewall">
                          <img src="./asset/viewall.png"></img>
                        </div>
                      </div>{" "}
                    </div>
                    <div className="col-2">
                      <div class="section col-2">
                        <h2 className="filtheading items-start">
                          Auction site
                        </h2>
                        <ul class="checkbox-list">
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              Auction site 01
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              Auction site 02
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="item3" />
                            <label className="text-xs" for="item3">
                              Auction site 03
                            </label>
                          </li>
                        </ul>
                      </div>{" "}
                    </div>{" "}
                  </div>
                </div>

                <div className="btnpart">
                  <div className="divpart mb-8" onClick={handleFilterSubmit}>
                    <img src="./asset/submitbtn.png"></img>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="slider-container max-w-full">
          <SwiperSingle />
        </div>

        {/* Make the below code as a component which take title, link and total count as props */}

        {/* <div className="container mx-auto mb-3">
          <div className="flex items-center">
            <h4 className="text-black text-[32px] mr-5">Recently sold (32) </h4>
            <Link href={``} className="text-cream mr-[9px]">
              View all
            </Link>
            <span>
              <img src="../asset/btnarrow.png"></img>
            </span>
          </div>
        </div> */}
        <Countdata title={"Recently sold"} count={32} />

        <div className="slider-container">
          <SwiperSingle />
        </div>
        {/* Reuse above component */}

        <Countdata title={"Recently unsold "} count={821} />
        <div className="slider-container">
          <SwiperSingle />
        </div>

        <Countdata title={"Comming Soon"} count={123} />
        <div className="slider-container">
          <SwiperSingle />
        </div>
        <div class="image-container">
          <div class="overlay-text">
            <div class="content">
              <h2 class="signuptxt mt-6">
                Signup to Our <span class="newsletter">newsletter</span>
              </h2>
              <div class="p-container">
                <h5 class="industry">
                  Industry insight straight to your inbox. We’ll provide you
                  with key information to help you determine whether and how
                  much to bid.
                </h5>
              </div>
              <div class="input-row">
                <input type="text" placeholder="" />
                <input type="email" placeholder="" />
              </div>
              <div class="buttonlast mb-9 mt-11">
                <div class="submit">
                  <button class="no-hover" type="submit">
                    Submit details
                  </button>
                </div>
                <div class="arrowsubmit mt-6 ">
                  <span className="mr-8">
                    <img src="/asset/buttonlastarrow.png" alt="Arrow" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="green-div">
          <img
            src="../asset/footerlogo.png"
            alt="Small Image"
            class="center-image"
          />
          <hr className="horizontal-line" />
        </div>
      </section>
    </>
  );
};

export default CallBanner;
