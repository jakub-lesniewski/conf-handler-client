import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Layout from "./pages/layout";
import Conference from "./pages/(logged-in)/conference/conference";
import ErrorElement from "./pages/error-element";
import ProtectedRoute from "./pages/(logged-in)/protected-route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Login />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/conference",
        element: (
          <ProtectedRoute>
            <Conference />
          </ProtectedRoute>
        ),
        errorElement: <ErrorElement />,
      },
    ],
  },
]);
