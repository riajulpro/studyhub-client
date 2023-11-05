import Navbar from "./Navbar";
import User from "./User";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gray-200 px-10">
      <div>logo</div>
      <Navbar />
      <User />
    </header>
  );
};

export default Header;
