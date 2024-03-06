import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";

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
    </div>
  );
};

export default Home;
