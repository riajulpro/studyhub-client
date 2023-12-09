import { useContext } from "react";
import { AuthContext } from "../../context/Authentication";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillHome, AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Login = () => {
  const { signIn, loginWithGoogle, loginWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const login = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const user = { email };

    signIn(email, password)
      .then(() => {
        axios
          .post("https://rp-assignment-11.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data));

        Swal.fire({
          title: "Successfully Login",
          text: "You can access all the feature now",
          icon: "success",
        });

        if (location?.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Wrong Credential!",
          text: "enter correct email or password.",
          icon: "error",
        });
        console.log(error);
      });
  };

  const googleLoginFn = () => {
    loginWithGoogle()
      .then((res) => {
        const user = { email: res?.user?.email };
        axios
          .post("https://rp-assignment-11.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data));

        Swal.fire({
          title: "Successfully Login",
          text: "You can access all the feature now",
          icon: "success",
        });

        if (location?.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Something is Wrong!",
          text: "Check the internet connection",
          icon: "error",
        });
        console.log(error);
      });
  };
  const githubLoginFn = () => {
    loginWithGithub()
      .then((res) => {
        const user = { email: res?.user?.email };
        axios
          .post("https://rp-assignment-11.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data));

        Swal.fire({
          title: "Successfully Login",
          text: "You can access all the feature now",
          icon: "success",
        });

        if (location?.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Something is Wrong!",
          text: "Check the internet connection",
          icon: "error",
        });
        console.log(error);
      });
  };

  return (
    <>
      <Helmet>
        <title>Login now</title>
      </Helmet>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="bg-white border rounded-md p-3 w-3/12 shadow-md">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold mb-4">Login Now</h1>
            <Link to={"/"}>
              <AiFillHome className="w-7 h-7 hover:text-red-400" />
            </Link>
          </div>
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
              className="bg-darkBlue hover:bg-darkBlue/75 cursor-pointer text-white border p-1 my-1 w-full"
            />
          </form>
          <p>
            <h4 className="text-center my-3 text-slate-600">Or Sign In With</h4>
            <div className="flex gap-2 justify-center items-center">
              <button
                className="border p-2 flex items-center gap-2 rounded-md hover:bg-darkBlue hover:text-white active:scale-95"
                onClick={googleLoginFn}
              >
                <span>
                  <AiOutlineGoogle />
                </span>
                <span>Google</span>
              </button>
              <button
                className="border p-2 flex items-center gap-2 rounded-md hover:bg-darkBlue hover:text-white active:scale-95"
                onClick={githubLoginFn}
              >
                <span>
                  <AiFillGithub />
                </span>
                <span>GitHub</span>
              </button>
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
    </>
  );
};

export default Login;
