import { NavLink } from "react-router-dom";
import "./Navbar.css";
import {
  AiFillFileAdd,
  // AiFillEdit,
  // AiOutlineFolderView,
  AiFillHome,
  AiFillPlusCircle,
} from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import { MdBookmarkAdded, MdAssignmentTurnedIn } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/Authentication";
import ProfileMenu from "../components/Loading/ProfileMenu";
import { BsSun, BsMoon } from "react-icons/bs";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="flex items-center md:text-sm ld:text-base justify-between md:justify-center md:gap-3">
      <NavLink to={"/"} className="flex gap-2 items-center">
        <AiFillHome />
        <span className="hidden md:block">Home</span>
      </NavLink>
      <NavLink to={"/all-assignment"} className="flex gap-2 items-center">
        <TbListDetails />
        <span className="hidden md:block">All Assignment</span>
      </NavLink>
      {user ? (
        <>
          <NavLink to={"/my-assignment"} className="flex gap-2 items-center">
            <MdAssignmentTurnedIn />
            <span className="hidden md:block">My Assignment</span>
          </NavLink>
          <NavLink
            to={"/submitted-assignment"}
            className="flex gap-2 items-center"
          >
            <MdBookmarkAdded />
            <span className="hidden md:block">Submitted Assignment</span>
          </NavLink>
          <NavLink
            to={"/create-assignment"}
            className="flex gap-2 items-center"
          >
            <AiFillFileAdd />
            <span className="hidden md:block">Create Assignment</span>
          </NavLink>
          <ProfileMenu />
        </>
      ) : (
        <>
          <NavLink to={"/login"} className="flex gap-2 items-center">
            <BiLogIn />
            <span className="hidden md:block">Login</span>
          </NavLink>
          <NavLink to={"/login"} className="flex gap-2 items-center">
            <AiFillPlusCircle />
            <span className="hidden md:block">Register</span>
          </NavLink>
        </>
      )}
      <button onClick={toggleDarkMode}>
        {darkMode ? (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <BsSun />
          </motion.span>
        ) : (
          <motion.span initial={{ rotate: -15 }} animate={{ rotate: 0 }}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <BsMoon />
            </motion.div>
          </motion.span>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
