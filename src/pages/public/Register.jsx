const Register = () => {
  const register = (event) => {
    event.preventDefault();
    console.log("register form is submitted");
  };
  return (
    <div>
      <h1>Login now</h1>
      <form onSubmit={register}>
        <input type="text" name="username" id="" placeholder="username" />
        <br />
        <input type="email" name="email" id="" placeholder="email address" />
        <br />
        <input type="text" name="photo" id="" placeholder="enter photo url" />
        <input type="password" name="password" id="" placeholder="password" />
        <br />
        <input type="submit" value="Login" className="bg-violet-400" />
      </form>
    </div>
  );
};

export default Register;
