const Login = () => {
  const login = (event) => {
    event.preventDefault();
    console.log("login form is submitted");
  };

  return (
    <div>
      <h1>Login now</h1>
      <form onSubmit={login}>
        <input type="email" name="email" id="email" placeholder="email" />
        <br />
        <input type="password" name="password" id="password" placeholder="password" />
        <br />
        <input type="submit" value="Login" className="bg-violet-400" />
      </form>
    </div>
  );
};

export default Login;
