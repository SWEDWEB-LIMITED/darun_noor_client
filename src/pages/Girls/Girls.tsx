import React from "react";
import Slider from "../../components/Shared/Slider/Slider";
import girl1 from "../../assets/MuslimGirls/girl-1.png";
import girl2 from "../../assets/MuslimGirls/girl-2.png";
import girl3 from "../../assets/MuslimGirls/girl-3.png";

const Girls: React.FC = () => {
  return (
    <div>
      <Slider slider1={girl1} slider2={girl2} slider3={girl3} />
      <div className="mt-8 max-w-5xl mx-auto p-6 text-white  rounded-md shadow-md">
        <h2 className=" text-xl md:text-3xl md:text-center font-bold mb-4">
          Activities for Muslim Girls (13+)
        </h2>
        <p className="md:text-lg mb-6">
          Engage your teenage girls in empowering and enriching activities that
          promote personal growth, spiritual development, and a strong sense of
          identity.
        </p>
        <div className="space-y-6">
          <p className="md:text-lg">
            <strong>Program Overview:</strong> At Daar un Noor, we provide a
            nurturing environment for Muslim girls aged 13 and above, offering a
            variety of activities to help them navigate their teenage years with
            confidence and faith.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Leadership Workshops:</strong> Empower girls with
              leadership skills through workshops that focus on effective
              communication, decision-making, and teamwork.
            </li>
            <li>
              <strong>Islamic Studies:</strong> Deepen their understanding of
              Islam, exploring topics such as Quranic studies, hadith, and the
              life of Prophet Muhammad (peace be upon him).
            </li>
            <li>
              <strong>Personal Development:</strong> Foster personal growth by
              addressing topics related to self-esteem, resilience, and goal
              setting to equip them for the future.
            </li>
            <li>
              <strong>Community Service:</strong> Instill the value of giving
              back to the community through various volunteer and community
              service opportunities.
            </li>
          </ul>
        </div>
        <p className="mt-8">
          We encourage Muslim girls aged 13 and above to join us in these
          activities that promote holistic development and a strong sense of
          sisterhood. Daar un Noor is committed to providing a supportive and
          empowering space for our teenage community members.
        </p>
      </div>
    </div>
  );
};

export default Girls;
