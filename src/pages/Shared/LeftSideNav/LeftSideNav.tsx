import { NavLink } from "react-router-dom";
import "./LeftSideNav.css";

const LeftSideNav = () => {
  return (
    <div className="p-5 border rounded-lg">
      <h2 className="text-2xl text-center text-[#403F3F] font-bold mb-5">
        Activity
      </h2>
      <div>
        <ul className="text-center leftSideNavUl">
          <li className="text-[#9F9F9F] text-xl font-medium">
            <NavLink to="/" className="block h-full py-1 my-3 rounded-md">
              5-13 yrs old
            </NavLink>
          </li>
          <li className="text-[#9F9F9F] text-xl font-medium">
            <NavLink to="/13+" className="block h-full py-1 my-3 rounded-md">
              13+ yrs old
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSideNav;
