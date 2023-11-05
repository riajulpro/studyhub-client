import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <p>You are in a wrong path.</p>
      <Link to={"/"}>Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
