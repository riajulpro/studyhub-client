import { useContext } from "react";
import { AuthContext } from "../../context/Authentication";

const Home = () => {
  const { name } = useContext(AuthContext);
  return (
    <div>
      <h1>Welcome home {name}</h1>
    </div>
  );
};

export default Home;
