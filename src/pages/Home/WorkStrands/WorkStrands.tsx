import Swal from "sweetalert2";
import awareness from "../../../assets/WorkStrands/dawah.png";
import unity from "../../../assets/WorkStrands/unity.jpg";
import education from "../../../assets/WorkStrands/Education.png";
import welfare from "../../../assets/WorkStrands/Social_Welfare.jpg";
import justice from "../../../assets/WorkStrands/justice.png";
import islamicBg from "../../../assets/islamic-new-year.png";
import React from "react";

interface WorkStrandData {
  img: string;
  heading: string;
  description: string;
}

const WorkStrands: React.FC = () => {
  const loopData: WorkStrandData[] = [
    {
      img: awareness,
      heading: "Awareness(Dawah)",
      description:
        "Spreading the message of Islam to people and increasing awareness about Islam. Inviting people to the path of Allah and fostering a correct understanding of Islam.",
    },
    {
      img: unity,
      heading: "Unity",
      description:
        "Community cohesion efforts are based on unity, brotherhood, and solidarity to work collectively for the betterment of the community.",
    },
    {
      img: education,
      heading: "Education & Nurturing",
      description:
        "We provide Islamic education and training to people to attain proximity to Allah and prepare members for community service by acquiring the necessary knowledge and skills.",
    },
    {
      img: welfare,
      heading: "Social Welfare",
      description:
        "Expansion of benevolent work for the welfare of the general public. We are establishing a peaceful united community by working towards social welfare and alleviating social maladies.",
    },
    {
      img: justice,
      heading: "Fairness & Justice",
      description:
        "Striving for justice and righteousness. Engaging in efforts for justice and humanity, irrespective of religion or ethnicity.",
    },
  ];

  // Function to handle click event on div
  const handleDivClick = (description: string) => {
    Swal.fire({
      text: description,
      icon: "info",
    });
  };

  return (
    <>
      <div
        className="py-[5rem] text-white"
        style={{ background: `url(${islamicBg})` }}
      >
        <p className="text-center text-3xl font-bold">Our Work Strands</p>

        <div className="flex justify-center items-center gap-[2rem] flex-row flex-wrap p-[3rem]">
          {loopData.map((data, index) => (
            <div key={index} onClick={() => handleDivClick(data.description)}>
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
};

export default WorkStrands;
