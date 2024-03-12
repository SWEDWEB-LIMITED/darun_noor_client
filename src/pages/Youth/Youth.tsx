import youth1 from "../../assets/Youth/youth-1.png";
import youth2 from "../../assets/Youth/youth-2.png";
import youth3 from "../../assets/Youth/youth-3.png";
import Slider from "../../components/Shared/Slider/Slider";

const Youth = () => {
  return (
    <div>
      <Slider slider1={youth1} slider2={youth2} slider3={youth3} />
    </div>
  );
};

export default Youth;
