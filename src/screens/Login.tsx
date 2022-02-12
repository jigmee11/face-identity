import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="containerLogin">
      <h1>Sign in</h1>
      <input />
      <input />
      <button>Log in</button>
      <h2>
        Don' have a account <Link to={"/register"}>sign up</Link>{" "}
      </h2>
    </div>
  );
};

export default Login;
