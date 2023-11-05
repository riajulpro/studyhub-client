import { createBrowserRouter } from "react-router-dom";
import Template from "../layout/Template";
import Home from "../pages/public/Home";
import ErrorPage from "../layout/ErrorPage";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";
import PrivateRoutes from "./PrivateRoutes";
import CreateAssignment from "../pages/private/CreateAssignment";
import UpdateAssignment from "../pages/private/UpdateAssignment";
import AllAssignment from "../pages/public/AllAssignment";
import AssignmentDetails from "../pages/private/AssignmentDetails";
import SubmittedAssignment from "../pages/private/SubmittedAssignment";

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
      {
        path: "/create-assignment",
        element: (
          <PrivateRoutes>
            <CreateAssignment />
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-assignment",
        element: (
          <PrivateRoutes>
            <UpdateAssignment />
          </PrivateRoutes>
        ),
      },
      {
        path: "/assignment-details",
        element: (
          <PrivateRoutes>
            <AssignmentDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/submitted-assignment",
        element: (
          <PrivateRoutes>
            <SubmittedAssignment />
          </PrivateRoutes>
        ),
      },
      {
        path: "/all-assignment",
        element: <AllAssignment />,
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
