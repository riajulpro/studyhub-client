import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const Authentication = ({ children }) => {
  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const info = { name: "RiaJul Pro", createAccount, signIn };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

Authentication.propTypes = {
  children: PropTypes.node,
};

export default Authentication;
