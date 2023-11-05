import PropTypes from "prop-types";
import { createContext } from "react";

export const AuthContext = createContext();

const info = { name: "RP" };

const Authentication = ({ children }) => {
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

Authentication.propTypes = {
  children: PropTypes.node,
};

export default Authentication;
