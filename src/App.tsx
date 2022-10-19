import { IndexPage } from "./pages/IndexPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  swapiResourceMetadata,
  SwapiResources,
} from "../src/utils/swapiHelpers";
import { PeoplePage } from "./pages/PeoplePage";
import { ErrorPage } from "./pages/ErrorPage";

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
        path: "*",
        element: <h1>Page not implemented</h1>,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
