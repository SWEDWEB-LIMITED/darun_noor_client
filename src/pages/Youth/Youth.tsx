import React from "react";
import Slider from "../../components/Shared/Slider/Slider";
import youth1 from "../../assets/Youth/youth-1.png";
import youth2 from "../../assets/Youth/youth-2.png";
import youth3 from "../../assets/Youth/youth-3.png";

const Youth: React.FC = () => {
  return (
    <div>
      <Slider slider1={youth1} slider2={youth2} slider3={youth3} />
      <div className="mt-8 max-w-5xl mx-auto p-6 text-white rounded-md shadow-md">
        <h2 className="text-xl md:text-3xl md:text-center font-bold mb-4">
          Activities for Youth (13+)
        </h2>
        <p className="md:text-lg mb-6">
          Empower and inspire the youth aged 13 and above with engaging
          activities that foster personal development, community engagement, and
          a sense of purpose.
        </p>
        <div className="space-y-6">
          <p className="md:text-lg">
            <strong>Program Overview:</strong> Daar un Noor offers a diverse
            range of activities for youth, providing a platform for personal
            growth, leadership development, and positive community engagement.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Leadership and Mentorship Programs:</strong> Cultivate
              leadership skills through mentorship programs, workshops, and
              opportunities for youth to take on leadership roles.
            </li>
            <li>
              <strong>Social and Recreational Activities:</strong> Create a
              sense of community through social events, sports, and recreational
              activities that promote teamwork and camaraderie.
            </li>
            <li>
              <strong>Islamic Studies and Discussions:</strong> Engage in
              thought-provoking discussions and in-depth Islamic studies to
              strengthen their faith and understanding of Islam.
            </li>
            <li>
              <strong>Community Service and Outreach:</strong> Instill a sense
              of responsibility and empathy through involvement in community
              service projects and outreach initiatives.
            </li>
          </ul>
        </div>
        <p className="mt-8">
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
