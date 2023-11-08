import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Authentication";

const Footer = () => {
  const { user } = useContext(AuthContext);

  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <div className="md:w-9/12 mx-auto">
        <div className="flex flex-col md:flex-row justify-center mt-4">
          <Link to="/" className="mx-2 hover:scale-105">
            Home
          </Link>
          <Link to="/all-assignment" className="mx-2 hover:scale-105">
            All Assignments
          </Link>
          {user && (
            <>
              <Link to="/my-assignment" className="mx-2 hover:scale-105">
                My Assignments
              </Link>
              <Link to="/submitted-assignment" className="mx-2 hover:scale-105">
                Submitted Assignments
              </Link>
              <Link to="/create-assignment" className="mx-2 hover:scale-105">
                Create Assignment
              </Link>
              <Link to="/profile" className="mx-2 hover:scale-105">
                Profile
              </Link>
            </>
          )}
        </div>
        <div className="mt-4">
          <a href="#" className="mx-2 hover:scale-105">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="mx-2 hover:scale-105">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="mx-2 hover:scale-105">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="mt-5 p-2 text-xs md:text-sm border-t border-primary">
          &copy; 2023 Online Group Study. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
