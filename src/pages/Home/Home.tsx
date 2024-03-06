import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Banner from "../../components/Banner/Banner";
import Welcome from "../../components/Welcome/Welcome";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="my-28 hidden">
            <LeftSideNav></LeftSideNav>
          </div>
          {/* something is coming here */}
        </div>
      </div>
      <Banner></Banner>
      <Welcome></Welcome>
    </div>
  );
};

export default Home;
