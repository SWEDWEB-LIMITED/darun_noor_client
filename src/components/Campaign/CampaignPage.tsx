import React from "react";
import Campaign from "./Campaign";
import campaign1 from "../../assets/slider1.png";
import campaign3 from "../../assets/slider3.png";
import campaign2 from "../../assets/camapaign2.png";

const CampaignPage: React.FC = () => {
  return (
    <div>
      <div>
        <h2 className="text-center text-extrabold  md:text-3xl text-xl">
          Upcoming Events
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Campaign
          image={campaign1}
          title="Summer Camp"
          time="July 25, 2024 - July 28, 2024"
        />
        <Campaign
          image={campaign2}
          title="Kids & Parents Day"
          time="9th March 2024"
        />
        <Campaign
          image={campaign3}
          title="Islamic Waz"
          time="24 December 2023"
        />
      </div>
    </div>
  );
};

export default CampaignPage;
