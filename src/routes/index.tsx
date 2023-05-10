import { createBrowserRouter } from "react-router-dom";
import SpinCarousel from "../page/SpinCarousel/SpinCarousel";
import VideoScrolled from "../page/VideoScrolled";

const Router = createBrowserRouter([
  {
    element: <SpinCarousel />,
    path: "/",
  },
  {
    element: <VideoScrolled />,
    path: "/videoAni",
  },
]);

export default Router;
