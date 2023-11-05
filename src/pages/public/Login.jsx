import { useContext } from "react";
import { AuthContext } from "../../context/Authentication";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    console.log("login form is submitted");

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
      .then(() => {
        alert("login successful");
        navigate("/");
      })
      .catch((error) => {
        alert("user or password wrong");
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border rounded-md p-3 w-3/12 shadow-md">
        <h1>Login now</h1>
        <form onSubmit={login}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            className="border p-1 my-1 w-full"
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="border p-1 my-1 w-full"
          />
          <br />
          <input
            type="submit"
            value="Login"
            className="bg-violet-600 hover:bg-violet-400 cursor-pointer text-white border p-1 my-1 w-full"
          />
        </form>
        <p>
          <h4 className="text-center my-2 text-slate-600">Or Sign In With</h4>
          <div className="flex gap-2 justify-center items-center">
            <button className="border p-2">Google</button>
            <button className="border p-2">Github</button>
          </div>
        </p>
        <p className="text-slate-600 text-center mt-3">
          Have not an account?{" "}
          <Link
            to={"/register"}
            className="text-violet-700 hover:text-violet-400"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
