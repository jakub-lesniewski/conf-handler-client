import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Layout from "./pages/layout";
import { loader as conferenceLoader } from "@/pages/(logged-in)/conference/loader";
import Conference from "./pages/(logged-in)/conference/conference";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Login /> },
      {
        path: "/conference",
        element: <Conference />,
        loader: conferenceLoader,
      },
    ],
  },
]);
