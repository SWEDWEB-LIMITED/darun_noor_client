import React from "react";

const Welcome: React.FC = () => {
  return (
    <div className="bg-teal-900 text-white  flex flex-col justify-center items-center p-8 md:p-16">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="lg:text-6xl text-4xl font-extrabold mb-4">
          Welcome to Daar-Un-Noor Sveriges
        </h1>
        <p className="lg:text-xl text-lg mb-6">
          Embracing spiritual, moral, and social renewal in the Muslim
          community.
        </p>
        <p className="lg:text-lg text-base mb-6">
          Our programs aim to enlighten minds about the profound message of
          Islam and its enduring values. We are dedicated to providing education
          that empowers Muslims to actively engage, integrate into society, and
          supports Swedish Muslims in fulfilling their religious duties.
        </p>
        <p className="lg:text-lg text-base mb-6">
          As revealed in the Quran (2:270), those who contribute to Allah’s
          cause will be rewarded without fear or grief.
        </p>
        <p className="lg:text-lg text-base mb-6">
          Join us in nurturing a united and flourishing community. If you're
          intrigued by our educational program on Islam, kindly share your name,
          address, postcode, email, and mobile/telephone number.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
