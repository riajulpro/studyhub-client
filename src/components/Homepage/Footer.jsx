import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <div className="container mx-auto">
        <div className="flex justify-center mt-4">
          <Link to="/" className="mx-2 hover:scale-105">
            Home
          </Link>
          <Link to="/all-assignment" className="mx-2 hover:scale-105">
            All Assignments
          </Link>
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
        <p className="mt-5 border-t">
          &copy; 2023 Online Group Study. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
