import HomePage from "pages/HomePage";
import PeoplePage from "pages/PeoplePage";
import NotFoundPage from "pages/NotFoundPage";
import PersonPage from "../pages/PersonPage";
import FavoritePage from "../pages/FavoritePage";

const routesConfig = [
  {
    id: 1,
    path: "/",
    element: <HomePage />,
  },
  {
    id: 2,
    path: "/people",
    element: <PeoplePage />,
  },
  {
    id: 3,
    path: "/favorites",
    element: <FavoritePage />,
  },
  {
    id: 4,
    path: "/people/:id",
    element: <PersonPage />,
  },
  {
    id: 5,
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routesConfig;
