import { createBrowserRouter } from "react-router-dom";
import TopPage from "./TopPage";
import ArticlePage from "./ArticlePage";
import AboutPage from "./AboutPage";

const routerBasic = createBrowserRouter([
  { path: "/", element: <TopPage /> },
  { path: "/article", element: <ArticlePage /> },
  { path: "/about", element: <AboutPage /> },
]);

export default routerBasic;
