import { createBrowserRouter } from "react-router-dom";
import Template from "../layout/Template";
import Home from "../pages/public/Home";
import ErrorPage from "../layout/ErrorPage";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
