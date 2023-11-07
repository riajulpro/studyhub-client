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
import Profile from "../pages/private/Profile";
import MyAssignment from "../pages/private/MyAssignment";

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
        path: "/all-assignment",
        element: <AllAssignment />,
        loader: () => fetch("http://localhost:5000/documentCount"),
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
        path: "/update-assignment/:id",
        element: (
          <PrivateRoutes>
            <UpdateAssignment />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/assignment/${params.id}`),
      },
      {
        path: "/assignment-details/:id",
        element: (
          <PrivateRoutes>
            <AssignmentDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/assignment/${params.id}`),
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
        path: "/my-assignment",
        element: (
          <PrivateRoutes>
            <MyAssignment />
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
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
