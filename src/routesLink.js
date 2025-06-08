import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RouterApp from "./RouterApp";
import TopPage from "./TopPage";
import ArticlePage from "./ArticlePage";
import AboutPage from "./AboutPage";

const routesLink = createBrowserRouter([
  {
    path: "/",
    element: <RouterApp />,
    children: [
      { path: "", element: <TopPage /> },
      { path: "artcile", element: <ArticlePage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);

export default routesLink;
