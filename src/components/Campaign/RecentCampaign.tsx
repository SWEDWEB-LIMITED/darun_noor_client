import Campaign from "./Campaign";
import campaign1 from "../../assets/Recent/Recent1.jpg";
import campaign2 from "../../assets/Recent/Recent2.jpg";
import campaign3 from "../../assets/Recent/Recent3.jpg";
import campaign4 from "../../assets/Recent/Recent4.jpg";
import campaign5 from "../../assets/Recent/Recent5.jpg";
import campaign6 from "../../assets/Recent/Recent6.jpg";
import campaign7 from "../../assets/Recent/Recent7.jpg";
import campaign8 from "../../assets/Recent/Recent8.jpg";
import campaign9 from "../../assets/Recent/Recent9.jpg";
import campaign10 from "../../assets/Recent/Recent10.jpg";
import campaign11 from "../../assets/Recent/Recent11.jpg";

const RecentCampaign = () => {
  return (
    <div>
      <div>
        <h2 className="text-center font-bold mt-10  md:text-5xl text-xl">
          Recent Events
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
        <Campaign
          image={campaign9}
          title="Youth Iftaar and Ramadan Reflection"
          time=" 23 March 2024"
        />
        <Campaign
          image={campaign11}
          title="Waz About Ramadan"
          time=" 16 March 2024"
        />
        <Campaign
          image={campaign8}
          title="Kids & Parents Day 2024"
          time=" 9 March 2024"
        />
        <Campaign
          image={campaign1}
          title="Winter ILM Training Workshop 2024"
          time=" 3 February 2024"
        />

        <Campaign
          image={campaign4}
          title="Islamic Waz About Family"
          time=" 24 December 2023"
        />
        <Campaign
          image={campaign5}
          title="Winter PithaPuli Festival 2023"
          time=" 19 November 2023"
        />
        <Campaign
          image={campaign2}
          title="Eid Reunion & Gathering"
          time=" 29 April 2023"
        />
        <Campaign
          image={campaign10}
          title="Quran Training Workshop "
          time=" 17-18 & 24-25 April 2023"
        />
        <Campaign
          image={campaign6}
          title="Waz About Lailatul Qadar"
          time=" 9 April 2023"
        />
        <Campaign
          image={campaign3}
          title="Nordic Summer Camp"
          time=" 21-24 July 2022"
        />
        <Campaign
          image={campaign7}
          title="Eid Reunion & Picnic"
          time=" 24 July 2021"
        />
      </div>
    </div>
  );
};

export default RecentCampaign;
