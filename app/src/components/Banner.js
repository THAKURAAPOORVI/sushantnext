import React from "react";
import "../Css/Banner.css";
import Image from "next/image";

const Banner = ({
  imageUrl,
  title,
  EndTime,
  CurrentPrice,
  numberOfBids,
  driveMode,
  numberOfMiles,
  description,
}) => {
  return (
    <>
      <div className="cardsection">
        <div className="card">
          <div className="card-image">
            <Image
              className="cardimg w-100"
              src={imageUrl}
              alt={title}
              width={100}
              height={150}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="radiopill">
            <div className="main-pill">
              <div className="pill-text row">
                {/* <div className='col-4 para-text'>
                                    <p>Ends in</p>
                                    <h1 className='time'>{EndTime}</h1>

                                </div> */}

                <div className="col-4 currentbid">
                  <p className="endsin">ENDS IN</p>
                  <p className="endstime">{EndTime}</p>
                </div>
                <span className="line">|</span>
                <div className="col-4 currentbid">
                  <p className="currentsbids">CURRENT BID</p>
                  <p className="rupess">£ {CurrentPrice}</p>
                </div>
                <span className="line">|</span>
                <div className="col-4">
                  <p className="bids">BIDS</p>
                  <p className="notime">{numberOfBids}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-content">
            <div className="TITLE-DESC ">
              <h2 className="card-title">{title}</h2>
              <p className="card-description">{description}</p>
            </div>

            <div className="row lastrow  pb-5">
              <div className="col-4 last-col">
                <div className="wheelimg">
                  <span className="mt-1">
                    <Image src="/asset/wheel (2).png" width={17} height={17} />{" "}
                  </span>
                  <span className="lhd ml-2 w-6">
                    <h5>{driveMode}</h5>
                  </span>
                </div>
              </div>
              <span className="line">|</span>

              <div className="col-4 speedimg speedometer ml-3.5">
                <span className="ml-3.5">
                  <Image src="/asset/icon miles.png" width={24} height={14}></Image>{" "}
                </span>
                <span className="speeds ml-3.5">
                  <h5>{numberOfMiles} Miles</h5>
                </span>
              </div>
              <span className="line">|</span>
              <div className="col-4 mr-8  ">
                <span className="">
                  <Image
                    src="/asset/flag.png"
                    width={24}
                    height={24}
                    layout="responsive"
                    objectFit="cover"
                  />{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
