// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

interface SliderProps {
  slider1: string;
  slider2: string;
  slider3: string;
}

const Slider: React.FC<SliderProps> = ({ slider1, slider2, slider3 }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
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
            className="w-full max-h-[600px] object-cover"
            src={slider1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full max-h-[600px] object-cover"
            src={slider2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full max-h-[600px] object-cover"
            src={slider3}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
