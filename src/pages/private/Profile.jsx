import { useContext } from "react";
import { AuthContext } from "../../context/Authentication";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const logOutBtn = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Logout",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Welcome to the profile, {user.displayName}</h1>
      <button
        onClick={logOutBtn}
        className="bg-primary hover:bg-primary/75 active:scale-95 cursor-pointer text-white font-semibold px-3 py-1"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
