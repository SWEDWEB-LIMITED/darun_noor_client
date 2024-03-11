import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Root from "../../layout/Root";
import LearningCenter from "../../pages/Learning Center/LearningCenter";
import AboutUs from "../../pages/AboutUs/AboutUs";

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
        path: "/learning-center",
        element: <LearningCenter></LearningCenter>,
      },
      {
        path: "about-us",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);

export default router;
