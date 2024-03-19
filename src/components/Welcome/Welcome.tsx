import React from "react";

const Welcome: React.FC = () => {
  return (
    <div className="  px-3  flex flex-col justify-center items-center mt-10 ">
      <div className="text-justify max-w-4xl mx-auto">
        <h1 className="lg:text-6xl text-center text-3xl font-extrabold mb-4">
          Welcome to Daar-Un-Noor Sveriges
        </h1>
        <p className="lg:text-lg  mb-6">
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
