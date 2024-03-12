import Slider from "../../components/Shared/Slider/Slider";
import kid1 from "../../assets/Kids/kid-1.png";
import kid2 from "../../assets/Kids/kid-2.png";
import kid3 from "../../assets/Kids/kid-3.png";

const Kids = () => {
  return (
    <div>
      <Slider slider1={kid1} slider2={kid2} slider3={kid3} />
    </div>
  );
};

export default Kids;
