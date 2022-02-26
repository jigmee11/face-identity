import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { Context } from "../Provider";
export const SignInScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { signIn, errorMessage, setErrorMessage } = useContext(Context);
  return (
    <div className="wrapper">
      <div id="container">
        <h1 style={{ width: "100%", color: "#172B4D" }}>
          SignIn to see your twin <br /> in{" "}
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
            color: "#FF0000",
          }}
        >
          {errorMessage}
        </div>
        <Button onClick={() => signIn(email, password)}>Sign in</Button>
        <div style={{ width: "100%" }}>
          Don't have an account?{" "}
          <Link to="/signUp">
            <span style={{ color: "#42eaddff" }}>Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignInScreen;
