import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/Authentication";

const User = () => {
  const { user, logOut } = useContext(AuthContext);

  const logOutBtn = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex gap-3">
      {user ? (
        <>
          <span>{user.displayName}</span>
          <button onClick={logOutBtn}>Logout</button>
        </>
      ) : (
        <>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Join</Link>
        </>
      )}
    </div>
  );
};

export default User;
