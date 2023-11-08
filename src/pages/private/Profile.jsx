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
    <div className="my-5 md:w-9/12 mx-auto border p-3 rounded-md flex gap-2 bg-gray-50">
      <div>
        <img
          src={user?.photoURL}
          alt=""
          className="w-24 h-24 border object-cover rounded-full"
        />
      </div>
      <div>
        <h1 className="text-primary font-bold text-3xl">{user.displayName}</h1>
        <p className="text-slate-600 py-2">{user?.email}</p>
        <button
          onClick={logOutBtn}
          className="bg-primary hover:bg-primary/75 active:scale-95 cursor-pointer text-white font-semibold px-3 py-1"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Profile;
