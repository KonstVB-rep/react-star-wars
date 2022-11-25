import HomePage from "pages/HomePage";
import PeoplePage from "pages/PeoplePage";
import NotFoundPage from "pages/NotFoundPage";
import PersonPage from "../pages/PersonPage";
import FavoritePage from "../pages/FavoritePage";
import SearchPage from "../pages/SearchPage";
import ErrorMessage from "../components/ErrorMessage";

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
      path: "/search",
    element: <SearchPage />,
  },
  {
    id: 6,
    path: "*",
    element: <NotFoundPage />,
  },
  {
    id: 7,
    path: "/fail",
    element: <ErrorMessage />,
  },
];

export default routesConfig;
