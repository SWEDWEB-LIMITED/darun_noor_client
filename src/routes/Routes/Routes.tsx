import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Root from "../../layout/Root";
import LearningCenter from "../../pages/Learning Center/LearningCenter";
import AboutUs from "../../pages/AboutUs/AboutUs";
import Kids from "../../pages/Kids/Kids";
import Youth from "../../pages/Youth/Youth";
import Girls from "../../pages/Girls/Girls";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "learning-center",
        element: <LearningCenter></LearningCenter>,
      },
      {
        path: "about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "activity/kids",
        element: <Kids></Kids>,
      },
      {
        path: "activity/youth",
        element: <Youth></Youth>,
      },
      {
        path: "activity/girls",
        element: <Girls></Girls>,
      },
    ],
  },
]);

export default router;
