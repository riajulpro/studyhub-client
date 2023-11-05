import { useContext } from "react";
import { AuthContext } from "../../context/Authentication";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>
        Welcome home, {user?.displayName}, your email address is {user?.email}
      </h1>
    </div>
  );
};

export default Home;
