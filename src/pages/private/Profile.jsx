import { useContext } from "react";
import { AuthContext } from "../../context/Authentication";

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);

  const logOutBtn = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Welcome to the profile, {user.displayName}</h1>
      <button onClick={logOutBtn}>Logout</button>
    </div>
  );
};

export default Profile;
