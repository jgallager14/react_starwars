import { IndexPage } from "./pages/IndexPage";
import { Greeting } from "./components/Content/SelectedPage";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

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
        path: "/movies/",
        element: <Greeting displayText="Movies" />,
      },
      {
        path: "/planets/",
        element: <Greeting displayText="Planets" />,
      },
      {
        path: "/ships/",
        element: <Greeting displayText="Ships" />,
      },
      {
        path: "/species/",
        element: <Greeting displayText="Species" />,
      },
      {
        path: "/vehicles/",
        element: <Greeting displayText="Vehicles" />,
      },
      {
        path: "/characters/",
        element: <Greeting displayText="Characters" />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
