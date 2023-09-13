import { Swiper, SwiperSlide } from "swiper/react";
import Recentlysold from "./Recentlysold";
import RecentlyUnsold from "./RecentlyUnsold";
import Banner from "./Banner";
import "swiper/css";
import "swiper/css/pagination";
import "../CSS/swiper.css";

const data = [
  {
    image: "/asset/Bitmap (1).png",
    soldPrice: "270000",
    numberOfBids: 5,
    endTime: "3:02:35",
    currentBidPrice: 15000,
    title: "Porsche Cayman 2007",
    subheading:
      "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
    lhdOrRhdDrive: "LHD",
    numberOfMiles: 25000,
    countryIconImage: "https://example.com/flags/usa.png",
  },
  {
    image: "/asset/2007.png",
    soldPrice: "270000",
    numberOfBids: 12,
    endTime: "3:02:35",
    currentBidPrice: 27000,
    title: "Porsche Cayman 2007",
    subheading:
      "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
    lhdOrRhdDrive: "LHD",
    numberOfMiles: 1500,
    countryIconImage: "https://example.com/flags/china.png",
  },
  {
    image: "/asset/Bitmap (1).png",
    soldPrice: "270000",
    numberOfBids: 5,
    endTime: "3:02:35",
    currentBidPrice: 15000,
    title: "Porsche Cayman 2007",
    subheading:
      "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
    lhdOrRhdDrive: "LHD",
    numberOfMiles: 25000,
    countryIconImage: "https://example.com/flags/usa.png",
  },
  {
    image: "/asset/2007.png",
    soldPrice: "270000",
    numberOfBids: 12,
    endTime: "3:02:35",
    currentBidPrice: 27000,
    title: "Porsche Cayman 2007",
    subheading:
      "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
    lhdOrRhdDrive: "LHD",
    numberOfMiles: 1500,
    countryIconImage: "https://example.com/flags/china.png",
  },
  {
    image: "/asset/Bitmap (1).png",
    soldPrice: "270000",
    numberOfBids: 5,
    endTime: "3:02:35",
    currentBidPrice: 15000,
    title: "Porsche Cayman 2007",
    subheading:
      "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
    lhdOrRhdDrive: "LHD",
    numberOfMiles: 25000,
    countryIconImage: "https://example.com/flags/usa.png",
  },
  {
    image: "/asset/2007.png",
    soldPrice: "270000",
    numberOfBids: 12,
    endTime: "3:02:35",
    currentBidPrice: 27000,
    title: "Porsche Cayman 2007",
    subheading:
      "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
    lhdOrRhdDrive: "LHD",
    numberOfMiles: 1500,
    countryIconImage: "https://example.com/flags/china.png",
  },
];

const SwiperSingle = () => {
  return (
    <Swiper
      slidesPerView={3.3}
      spaceBetween={24}
      pagination={{
        clickable: true,
      }}
      loopedSlides={2}
      centeredSlides={true}
      loop={true}
      navigation={true}
      className="mySwipers"
      breakpoints={{
        1440: {
          slidesPerView: 4.3,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 3.3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 1,
        },
        420: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        360: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide className={SwiperSlide}>
          <Banner
            key={index}
            imageUrl={item.image}
            EndTime={item.endTime}
            CurrentPrice={item.currentBidPrice}
            numberOfBids={item.numberOfBids}
            title={item.title}
            description={item.subheading}
            driveMode={item.lhdOrRhdDrive}
            numberOfMiles={item.numberOfMiles}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSingle;
