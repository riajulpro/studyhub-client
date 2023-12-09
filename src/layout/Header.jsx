import Navbar from "./Navbar";
// import User from "./User";

const Header = () => {
  return (
    <>
      <header className="bg-darkBlue dark:bg-darkSecondary text-white hidden lg:flex justify-between items-center lg:px-8 lg:py-4 sticky top-0 z-30">
        <div className="hidden lg:block font-bold text-2xl">StudyHub</div>
        <Navbar />
      </header>
      <header className="bg-darkBlue dark:bg-darkSecondary text-white md:block lg:hidden sticky top-0 z-30">
        <div className="w-9/12 mx-auto p-3">
          <Navbar />
        </div>
      </header>
    </>
  );
};

export default Header;
