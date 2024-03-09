import React from "react";

const Welcome: React.FC = () => {
  return (
    <div className="bg-teal-900 text-white  flex flex-col justify-center items-center p-8 md:p-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="lg:text-6xl text-4xl font-extrabold mb-4">
          Welcome to Daar-Un-Noor Sveriges
        </h1>
        <p className="lg:text-lg text-base mb-6">
          Daar Un Noor Sweden is a grassroots social organization set up to
          encourage and facilitate Muslims to be active participants in society
          to benefit all members of humanity. It organizes members to seek the
          pleasure of Allah through worship of Him and service to humanity. Daar
          Un Noor Sweden's aims to bring about spiritual, moral, and social
          renewal through the values enshrined in the Islamic faith.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
