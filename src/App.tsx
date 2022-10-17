import { IndexPage } from "./pages/IndexPage";
import { Greeting } from "./components/Content/SelectedPage";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import {
  swapiResourceMetadata,
  SwapiResources,
} from "../src/utils/swapiHelpers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
    children: [
      {
        path: "/",
        element: (
          <Greeting displayText="Welcome, please select a resource to continue!" />
        ),
      },
      {
        path: swapiResourceMetadata[SwapiResources.Films].internalUrlPath,
        element: (
          <Greeting
            displayText={
              swapiResourceMetadata[SwapiResources.Films].displayName
            }
          />
        ),
      },
      {
        path: swapiResourceMetadata[SwapiResources.Planets].internalUrlPath,
        element: (
          <Greeting
            displayText={
              swapiResourceMetadata[SwapiResources.Planets].displayName
            }
          />
        ),
      },
      {
        path: swapiResourceMetadata[SwapiResources.Spaceships].internalUrlPath,
        element: (
          <Greeting
            displayText={
              swapiResourceMetadata[SwapiResources.Spaceships].displayName
            }
          />
        ),
      },
      {
        path: swapiResourceMetadata[SwapiResources.Species].internalUrlPath,
        element: (
          <Greeting
            displayText={
              swapiResourceMetadata[SwapiResources.Species].displayName
            }
          />
        ),
      },
      {
        path: swapiResourceMetadata[SwapiResources.Vehicles].internalUrlPath,
        element: (
          <Greeting
            displayText={
              swapiResourceMetadata[SwapiResources.Vehicles].displayName
            }
          />
        ),
      },
      {
        path: swapiResourceMetadata[SwapiResources.People].internalUrlPath,
        element: (
          <Greeting
            displayText={
              swapiResourceMetadata[SwapiResources.People].displayName
            }
          />
        ),
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
