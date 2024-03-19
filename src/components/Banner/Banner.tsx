// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full max-h-[600px] object-contain"
            src={slider1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full max-h-[600px] object-contain"
            src={slider2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full max-h-[600px] object-contain"
            src={slider3}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
