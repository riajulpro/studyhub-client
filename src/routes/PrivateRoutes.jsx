import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../context/Authentication";
import { Navigate } from "react-router-dom";
import LoadingSpin from "../components/Loading/LoadingSpin";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingSpin />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
