import { IndexPage } from "./pages/IndexPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  swapiResourceMetadata,
  SwapiResources,
} from "../src/utils/swapiHelpers";
import { PeoplePage } from "./pages/PeoplePage";
import { ErrorPage } from "./pages/ErrorPage";
import { MoviesPage } from "./pages/moviesPage";
import { PlanetsPage } from "./pages/PlanetsPage";
import { ShipsPage } from "./pages/ShipsPage";
import { VehiclesPage } from "./pages/VehiclesPage";
import { SpeciesPage } from "./pages/SpeciesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <p>Welcome, please select a resource to get started!</p>,
      },
      {
        path: swapiResourceMetadata[SwapiResources.People].internalUrlPath,
        element: <PeoplePage />,
      },
      {
        path: swapiResourceMetadata[SwapiResources.Films].internalUrlPath,
        element: <MoviesPage />,
      },
      {
        path: swapiResourceMetadata[SwapiResources.Planets].internalUrlPath,
        element: <PlanetsPage />,
      },
      {
        path: swapiResourceMetadata[SwapiResources.Spaceships].internalUrlPath,
        element: <ShipsPage />,
      },
      {
        path: swapiResourceMetadata[SwapiResources.Vehicles].internalUrlPath,
        element: <VehiclesPage />,
      },
      {
        path: swapiResourceMetadata[SwapiResources.Species].internalUrlPath,
        element: <SpeciesPage />,
      },
      {
        path: "*",
        element: <h1>Page not implemented</h1>,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
