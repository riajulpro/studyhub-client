import Navbar from "./Navbar";
// import User from "./User";

const Header = () => {
  return (
    <>
      <header className="hidden md:flex justify-between items-center bg-gray-200 md:px-10 md:py-4">
        <div className="hidden md:block font-bold text-2xl">StudyHub</div>
        <Navbar />
        {/* <User /> */}
      </header>
      <header className="bg-gray-50 md:hidden sticky top-0">
        <div className="w-9/12 mx-auto p-3">
          <Navbar />
        </div>
      </header>
    </>
  );
};

export default Header;
