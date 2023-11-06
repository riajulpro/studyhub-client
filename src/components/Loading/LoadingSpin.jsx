import Lottie from "lottie-react";
import loadingSpin from "../../assets/lottie/loadingSpin.json";

const LoadingSpin = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)]">
      <Lottie animationData={loadingSpin} loop={true} className="w-96 h-96" />
    </div>
  );
};

export default LoadingSpin;
