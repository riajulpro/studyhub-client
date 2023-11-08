import Navbar from "./Navbar";
// import User from "./User";

const Header = () => {
  return (
    <>
      <header className="hidden lg:flex justify-between items-center bg-[#1D3557] text-white lg:px-8 lg:py-2">
        <div className="hidden lg:block font-bold text-2xl">StudyHub</div>
        <Navbar />
      </header>
      <header className="bg-[#1D3557] text-white md:block lg:hidden sticky top-0 z-30">
        <div className="w-9/12 mx-auto p-3">
          <Navbar />
        </div>
      </header>
    </>
  );
};

export default Header;
