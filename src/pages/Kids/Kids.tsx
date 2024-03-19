import React from "react";
import Slider from "../../components/Shared/Slider/Slider";
import kid1 from "../../assets/Kids/kid-1.png";
import kid2 from "../../assets/Kids/kid-2.png";
import kid3 from "../../assets/Kids/kid-3.png";

const Kids: React.FC = () => {
  return (
    <div>
      <Slider slider1={kid1} slider2={kid2} slider3={kid3} />
      <div className="mt-8 max-w-6xl mx-auto p-6 ">
        <h2 className="text-xl md:text-3xl md:text-center font-bold mb-4">
          Activities for Kids
        </h2>
        <p className="md:text-lg mb-6">
          Engage your children in enriching Islamic activities to foster
          learning and cultural understanding. Our carefully designed programs
          aim to provide valuable insights and create a positive environment for
          kids to grow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Activity Cards */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={kid1}
              alt="Activity 1"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">
                Shahih Quran Learning with Tajweed
              </h3>
              <p className="text-sm mb-4">
                Our primary focus is on providing a guided Quran learning
                experience with Tajweed principles. Children engage in
                interactive sessions to learn the Quranic verses with correct
                pronunciation and recitation.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={kid2}
              alt="Activity 2"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">
                Basic Islamic Knowledge
              </h3>
              <p className="text-sm mb-4">
                We provide a foundational understanding of essential Islamic
                teachings. Children learn about the core principles, beliefs,
                and practices in Islam, fostering a sense of identity and
                connection with their faith.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={kid3}
              alt="Activity 3"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Character Building</h3>
              <p className="text-sm mb-4">
                Our activities emphasize character development based on Islamic
                values. Through stories, discussions, and practical examples,
                kids learn virtues such as honesty, kindness, humility, and
                respect for others.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="mt-8">
          <p className="md:text-lg">
            <strong>Contact Information:</strong> For enrollment and more
            information, please feel free to contact our coordinators:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Flemingsberg:</strong> Contact Number: 073 079 94 24,
              073713 93 07
            </li>
            <li>
              <strong>Vårby gård:</strong> Contact Number: 070 7788558
            </li>
            <li>
              <strong>Bredäng:</strong> Contact Number: 0721212808
            </li>
            <li>
              <strong>Södertälje:</strong> Contact Number: 0727867454
            </li>
          </ul>
        </div> */}
        <p className="mt-8">
          We welcome you to reach out and enroll your kids in these enriching
          Islamic activities. Daar un Noor is dedicated to providing a
          supportive and educational environment for the young minds of our
          community.
        </p>
      </div>
    </div>
  );
};

export default Kids;
