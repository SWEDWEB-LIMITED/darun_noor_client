import React from "react";
import Slider from "../../components/Shared/Slider/Slider";
import girl1 from "../../assets/MuslimGirls/girl-1.png";
import girl2 from "../../assets/MuslimGirls/girl-2.png";
import girl3 from "../../assets/MuslimGirls/girl-3.png";

const Girls: React.FC = () => {
  return (
    <div>
      <Slider slider1={girl1} slider2={girl2} slider3={girl3} />
      <div className="mt-8 max-w-6xl mx-auto p-6 ">
        <h2 className="text-xl md:text-3xl md:text-center font-bold mb-4">
          Activities for Muslim Girls (13+)
        </h2>
        <p className="md:text-lg mb-6 font-semibold">
          Engage your teenage girls in empowering and enriching activities that
          promote personal growth, spiritual development, and a strong sense of
          identity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Activity Cards */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={girl1}
              alt="Activity 1"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Leadership Workshops</h3>
              <p className="text-sm mb-4">
                Empower girls with leadership skills through workshops that
                focus on effective communication, decision-making, and teamwork.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={girl2}
              alt="Activity 2"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Islamic Studies</h3>
              <p className="text-sm mb-4">
                Deepen their understanding of Islam, exploring topics such as
                Quranic studies, hadith, and the life of Prophet Muhammad (peace
                be upon him).
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={girl3}
              alt="Activity 3"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Personal Development</h3>
              <p className="text-sm mb-4">
                Foster personal growth by addressing topics related to
                self-esteem, resilience, and goal setting to equip them for the
                future.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-8 font-semibold">
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
