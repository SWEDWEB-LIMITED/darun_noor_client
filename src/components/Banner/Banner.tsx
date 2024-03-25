import campaign1 from "../../assets/Upcoming/Upcoming1.jpg";
import campaign2 from "../../assets/Upcoming/Upcoming2.jpg";
import campaign3 from "../../assets/Upcoming/Upcoming3.jpg";
import Slider from "../Shared/Slider/Slider";

const Banner = () => {
  return (
    <>
      <Slider slider1={campaign1} slider2={campaign2} slider3={campaign3} />
    </>
  );
};

export default Banner;
