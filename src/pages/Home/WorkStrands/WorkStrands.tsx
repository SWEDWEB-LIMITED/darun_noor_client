import awareness from "../../../assets/WorkStrands/dawah.png";
import unity from "../../../assets/WorkStrands/unity.jpg";
import education from "../../../assets/WorkStrands/Educattion.png";
import welfare from "../../../assets/WorkStrands/Social_Welfare.jpg";
import justice from "../../../assets/WorkStrands/justice.png";
import islamicBg from "../../../assets/islamic-new-year.png";
export default function WorkStrands() {
  const loopData = [
    {
      img: awareness,
      heading: "Awareness(Dawah)",
    },
    {
      img: unity,
      heading: "Unity",
    },
    {
      img: education,
      heading: "Education & Nurturing",
    },
    {
      img: welfare,
      heading: "Social Welfare",
    },
    {
      img: justice,
      heading: "Fairness & Justice",
    },
  ];

  return (
    <>
      <div
        className="py-[5rem]  text-white "
        style={{ background: `url(${islamicBg})` }}
      >
        <p className="text-center text-3xl font-bold ">Our Work Strands</p>

        <div className="flex justify-center items-center gap-[2rem] flex-row flex-wrap p-[3rem]">
          {loopData.map((data, index) => (
            <div key={index}>
              <img
                src={data.img}
                alt="img"
                className="w-[15rem] h-[13rem] bg-white rounded-xl"
              />
              <p className="text-center mt-3">{data.heading}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
