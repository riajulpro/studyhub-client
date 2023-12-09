import { useContext, useState } from "react";
import { AuthContext } from "../../context/Authentication";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ProfilePicture from "../../assets/icons/profile.svg";
import { motion } from "framer-motion";

function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={toggleMenu}
          >
            <img
              src={user.photoURL ? user?.photoURL : ProfilePicture}
              className="w-4 h-4 md:w-7 md:h-7 object-cover rounded-full border"
            />
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <span className="text-darkBlue px-4 py-2 font-semibold">
                {user?.displayName}
              </span>
              <Link
                to={"/profile"}
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                Profile
              </Link>
              <button
                type="submit"
                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-3"
                onClick={logOutBtn}
              >
                Sign out
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default ProfileMenu;
