import { IndexPage } from "./pages/IndexPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  swapiResourceMetadata,
  SwapiResources,
} from "../src/utils/swapiHelpers";
import { PeoplePage } from "./pages/PeoplePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
    children: [
      {
        path: "/",
        element: <p>Welcome, please select a resource to get started!</p>,
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
