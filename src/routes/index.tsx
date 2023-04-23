import { createBrowserRouter } from "react-router-dom";
import SpinCarousel from "../page/SpinCarousel/SpinCarousel";

const Router = createBrowserRouter([
  {
    element: <SpinCarousel />,
    path: "/",
  },
]);

export default Router;
