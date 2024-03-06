import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from "../../assets/slider1.webp";
import slider2 from "../../assets/slider2.webp";
import slider3 from "../../assets/slider3.webp";

const Banner = () => {
  return (
    <Carousel
      className="text-center bg-teal-900"
      autoPlay={true}
      infiniteLoop={true}
      interval={1000}
    >
      <div>
        <img
          src={slider1}
          className="max-h-[500px] object-center object-contain"
          alt="Banner 1"
        />
      </div>
      <div>
        <img
          src={slider2}
          className="max-h-[500px] object-center object-contain"
          alt="Banner 2"
        />
      </div>
      <div>
        <img
          src={slider3}
          className="max-h-[500px] object-center object-contain"
          alt="Banner 3"
        />
      </div>
    </Carousel>
  );
};

export default Banner;
