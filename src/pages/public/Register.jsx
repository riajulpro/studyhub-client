import { Link } from "react-router-dom";

const Register = () => {
  const register = (event) => {
    event.preventDefault();
    console.log("register form is submitted");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border rounded-md p-3 w-3/12 shadow-md">
        <h1>Create Account</h1>
        <form onSubmit={register}>
          <input
            type="text"
            name="username"
            id=""
            placeholder="username"
            className="border p-1 my-1 w-full"
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
          Already have an account?{" "}
          <Link to={"/login"} className="text-violet-700 hover:text-violet-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
