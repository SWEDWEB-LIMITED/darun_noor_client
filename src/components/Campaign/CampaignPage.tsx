import React from "react";
import Campaign from "./Campaign";
import campaign1 from "../../assets/Upcoming/Upcoming1.jpg";
import campaign2 from "../../assets/Upcoming/Upcoming2.jpg";
import campaign3 from "../../assets/Upcoming/Upcoming3.jpg";

const CampaignPage: React.FC = () => {
  return (
    <div>
      <div>
        <h2 className="text-center font-bold mt-10  md:text-5xl text-xl">
          Upcoming Events
        </h2>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Campaign
          image={campaign3}
          title="Kids & Parents Day"
          time="25 June 2024"
        />
        <Campaign
          image={campaign2}
          title="Linkoping Summer Camp"
          time="25-28 July 2024"
        />
        <Campaign
          image={campaign1}
          title="Youth Conference 2024"
          time=" 28 December 2024"
        />
      </div>
    </div>
  );
};

export default CampaignPage;
