import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="flex justify-center gap-3">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/all-assignment"}>All Assignment</NavLink>
      <NavLink to={"/create-assignment"}>Create Assignment</NavLink>
      <NavLink to={"/submitted-assignment"}>Submitted Assignment</NavLink>
    </nav>
  );
};

export default Navbar;
