import { Outlet } from "react-router-dom";
import Header from "./Header";

const Template = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Template;
