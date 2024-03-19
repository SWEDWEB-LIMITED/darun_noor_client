import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import bg from "../assets/pattern-1.jpg";

const Root = () => {
  return (
    <div className="font-medium" style={{ background: `url(${bg})` }}>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
