import TrainingImage from "../../../assets/Traning and Development.webp";
import CommonGoodImage from "../../../assets/Promoting Common Good.webp";
import JusticeImage from "../../../assets/Seeking Fairness and Justice.webp";
import CommunityImage from "../../../assets/Collective Community Endeavour.webp";

export default function WorkStrands() {
  const loopData = [
    {
      img: TrainingImage,
      heading: "Training and Development",
    },
    {
      img: CommonGoodImage,
      heading: "Promoting Common Good",
    },
    {
      img: JusticeImage,
      heading: "Seeking Fairness and Justice",
    },
    {
      img: CommunityImage,
      heading: "Collective Community Endeavour",
    },
  ];

  return (
    <>
      <div className="py-[5rem]  text-white">
        <p className="text-center text-3xl font-bold ">Our Work Strands</p>

        <div className="flex justify-center items-center gap-[2rem] flex-row flex-wrap p-[3rem]">
          {loopData.map((data, index) => (
            <div key={index}>
              <img
                src={data.img}
                alt="img"
                className="w-[15rem] h-[13rem] rounded-xl"
              />
              <p className="text-center mt-3">{data.heading}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
