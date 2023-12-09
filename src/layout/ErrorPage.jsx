import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import errorIcon from "../assets/lottie/errorPage.json";

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        <p className="text-2xl font-bold">You are in a wrong path.</p>
        <div>
          <Lottie animationData={errorIcon} loop={true} />
        </div>
        <Link
          to={"/"}
          className="bg-darkBlue text-white px-3 py-1 mr-1 hover:bg-darkBlue/75 active:scale-95 rounded"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
