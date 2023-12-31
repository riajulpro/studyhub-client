import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Authentication";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { AiFillHome, AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createAccount } = useContext(AuthContext);

  const navigate = useNavigate();

  const register = (event) => {
    event.preventDefault();

    const form = event.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    // Email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        title: "Invalid Email!",
        text: "You must enter a valid email address",
        icon: "warning",
      });
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        title: "Invalid Password!",
        text: "You must enter 6 characters include with: a capital letter and a special character",
        icon: "warning",
      });
      return;
    }

    createAccount(email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: username,
          photoURL: photo,
        })
          .then(() => {
            Swal.fire({
              title: "Successfully Registered!",
              text: "Account created successfully now login please.",
              icon: "success",
            });
            navigate("/login");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));

    // Clear the form input field
    form.username.value = "";
    form.email.value = "";
    form.password.value = "";
    form.photo.value = "";
  };
  return (
    <>
      <Helmet>
        <title>Register an account</title>
      </Helmet>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="bg-white border rounded-md p-3 w-3/12 shadow-md">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold mb-4">Create Account</h1>
            <Link to={"/"}>
              <AiFillHome className="w-7 h-7 hover:text-red-500" />
            </Link>
          </div>
          <form onSubmit={register}>
            <input
              type="text"
              name="username"
              id=""
              placeholder="username"
              className="border p-1 my-1 w-full"
              required
            />
            <br />
            <input
              type="email"
              name="email"
              id=""
              placeholder="email address"
              className="border p-1 my-1 w-full"
            />
            <br />
            <input
              type="text"
              name="photo"
              id=""
              placeholder="enter photo url"
              className="border p-1 my-1 w-full"
            />
            <br />
            <input
              type="password"
              name="password"
              id=""
              placeholder="password"
              className="border p-1 my-1 w-full"
            />
            <br />
            <input
              type="submit"
              value="Register"
              className="bg-violet-600 hover:bg-violet-400 cursor-pointer text-white border p-1 my-1 w-full"
            />
          </form>
          <p>
            <h4 className="text-center my-2 text-slate-600">Or Sign In With</h4>
            <div className="flex gap-2 justify-center items-center">
              <button className="border p-2 flex items-center gap-2 rounded-md hover:bg-violet-400 hover:text-white">
                <span>
                  <AiOutlineGoogle />
                </span>
                <span>Google</span>
              </button>
              <button className="border p-2 flex items-center gap-2 rounded-md hover:bg-violet-400 hover:text-white">
                <span>
                  <AiFillGithub />
                </span>
                <span>GitHub</span>
              </button>
            </div>
          </p>
          <p className="text-slate-600 text-center mt-3">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-violet-700 hover:text-violet-400"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
