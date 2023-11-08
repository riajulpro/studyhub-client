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
import { useContext } from "react";
import { AuthContext } from "../context/Authentication";
import ProfileMenu from "../components/Loading/ProfileMenu";

const Navbar = () => {
  const { user } = useContext(AuthContext);

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
    </nav>
  );
};

export default Navbar;
