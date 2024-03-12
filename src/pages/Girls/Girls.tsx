import girl1 from "../../assets/MuslimGirls/girl-1.png";
import girl2 from "../../assets/MuslimGirls/girl-2.png";
import girl3 from "../../assets/MuslimGirls/girl-3.png";
import Slider from "../../components/Shared/Slider/Slider";

const Girls = () => {
  return (
    <div>
      <Slider slider1={girl1} slider2={girl2} slider3={girl3} />
    </div>
  );
};

export default Girls;
