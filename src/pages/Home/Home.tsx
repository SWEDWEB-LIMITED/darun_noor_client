import Banner from "../../components/Banner/Banner";
import Welcome from "../../components/Welcome/Welcome";
import WorkStrands from "./WorkStrands/WorkStrands";
import LocationGoogleMap from "./GoogleLocation/GoogleLocation";
import { ContactUs } from "../../components/ContactUs/ContactUs";
import CampaignPage from "../../components/Campaign/CampaignPage";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Welcome></Welcome>
      <WorkStrands />
      <CampaignPage></CampaignPage>
      <ContactUs></ContactUs>
      <LocationGoogleMap />
    </div>
  );
};

export default Home;
