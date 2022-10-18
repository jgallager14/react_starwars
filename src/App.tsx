import { IndexPage } from "./pages/IndexPage";
import { Greeting } from "./components/Content/SelectedPage";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import {
  swapiResourceMetadata,
  SwapiResources,
} from "../src/utils/swapiHelpers";
import { PeoplePage } from "./pages/PeoplePage";
import { FilmsPage } from "./pages/FilmsPage";
import { ShipsPage } from "./pages/ShipsPage";
import { PlanetsPage } from "./pages/PlanetsPage";
import { SpeciesPage } from "./pages/SpeciesPage";
import { VehiclesPage } from "./pages/VehiclesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
    children: [
      {
        path: "/",
        element: <Greeting />,
      },
      {
        path: swapiResourceMetadata[SwapiResources.Films].internalUrlPath,
        element: <FilmsPage />,
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
        path: swapiResourceMetadata[SwapiResources.Species].internalUrlPath,
        element: <SpeciesPage />,
      },
      {
        path: swapiResourceMetadata[SwapiResources.Vehicles].internalUrlPath,
        element: <VehiclesPage />,
      },
      {
        path: swapiResourceMetadata[SwapiResources.People].internalUrlPath,
        element: <PeoplePage />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
