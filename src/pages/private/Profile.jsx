import { useContext } from "react";
import { AuthContext } from "../../context/Authentication";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Welcome to the profile, {user.displayName}</h1>
    </div>
  );
};

export default Profile;
