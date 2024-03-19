import React from "react";
import Slider from "../../components/Shared/Slider/Slider";
import youth1 from "../../assets/Youth/youth-1.png";
import youth2 from "../../assets/Youth/youth-2.png";
import youth3 from "../../assets/Youth/youth-3.png";

const Youth: React.FC = () => {
  return (
    <div>
      <Slider slider1={youth1} slider2={youth2} slider3={youth3} />
      <div className="mt-8 max-w-5xl mx-auto p-6">
        <h2 className="text-xl md:text-3xl md:text-center font-bold mb-4">
          Activities for Youth (13+)
        </h2>
        <p className="md:text-lg mb-6 font-semibold">
          Empower and inspire the youth aged 13 and above with engaging
          activities that foster personal development, community engagement, and
          a sense of purpose.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Activity Cards */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={youth1}
              alt="Activity 1"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">
                Leadership and Mentorship Programs
              </h3>
              <p className="text-sm mb-4">
                Cultivate leadership skills through mentorship programs,
                workshops, and opportunities for youth to take on leadership
                roles.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={youth2}
              alt="Activity 2"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">
                Social and Recreational Activities
              </h3>
              <p className="text-sm mb-4">
                Create a sense of community through social events, sports, and
                recreational activities that promote teamwork and camaraderie.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={youth3}
              alt="Activity 3"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">
                Islamic Studies and Discussions
              </h3>
              <p className="text-sm mb-4">
                Engage in thought-provoking discussions and in-depth Islamic
                studies to strengthen their faith and understanding of Islam.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-8 font-semibold">
          We invite youth aged 13 and above to join us in these transformative
          activities that contribute to their personal and communal growth. Daar
          un Noor is committed to providing a supportive and inspiring
          environment for our youth community members.
        </p>
      </div>
    </div>
  );
};

export default Youth;
