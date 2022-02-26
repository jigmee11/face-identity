import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { Context } from "../Provider";
import "cross-fetch/polyfill";
export const SignUpScreen = () => {
  const { setErrorMessage, errorMessage, signUp } = React.useContext(Context);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  return (
    <div className="wrapper">
      <div id="container">
        <h1 style={{ width: "100%", color: "#172B4D" }}>
          SignUp to see your twin <br /> in{" "}
          <span style={{ color: "#42eaddff", margin: 0 }}>Nest Academy</span>
        </h1>
        <div
          style={{
            width: "100%",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "22px",
            color: "#172B4D",
          }}
        >
          Email:
        </div>
        <TextInput
          placeholder="email@address.com"
          type={"email"}
          value={email}
          onChange={(e) => {
            setErrorMessage("");
            setEmail(e.target.value);
          }}
        />

        <div
          style={{
            width: "100%",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "22px",
            color: "#172B4D",
          }}
        >
          Password:
        </div>
        <TextInput
          placeholder="password"
          type={"password"}
          value={password}
          onChange={(e) => {
            setErrorMessage("");
            setPassword(e.target.value);
          }}
        />
        <div
          style={{
            width: "100%",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "22px",
            color: "#172B4D",
          }}
        >
          Confirm Password:
        </div>
        <TextInput
          placeholder="password"
          type={"password"}
          value={confirmPassword}
          onChange={(e) => {
            setErrorMessage("");
            setConfirmPassword(e.target.value);
          }}
        />
        <div
          style={{
            width: "100%",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "22px",
            color: "#FF0000",
          }}
        >
          {errorMessage}
        </div>
        <Button onClick={() => signUp(email, password, confirmPassword)}>
          Sign Up
        </Button>
        <div style={{ width: "100%" }}>
          Already have an account?{" "}
          <Link to="/signIn">
            <span style={{ color: "#42eaddff" }}>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignUpScreen;
