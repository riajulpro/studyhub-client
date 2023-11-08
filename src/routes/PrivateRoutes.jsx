import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../context/Authentication";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpin from "../components/Loading/LoadingSpin";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <LoadingSpin />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={location.pathname}></Navigate>;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
