import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
} from "amazon-cognito-identity-js";
import * as AWS from "aws-sdk";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { poolData } from "../context/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var userPool = new CognitoUserPool(poolData);
  var cognitoUser = new CognitoUser({ Username: "test", Pool: userPool });
  const signIn = () => {
    var userData = {
      Username: "username",
      Pool: userPool,
    };
    var authenticationDetails = new AuthenticationDetails({});
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();
        console.log(accessToken);
        //POTENTIAL: Region needs to be set if not already set previously elsewhere.
        AWS.config.region = "<region>";

        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: "...", // your identity pool id here
          Logins: {
            // Change the key below according to the specific region your user pool is in.
            "cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>": result
              .getIdToken()
              .getJwtToken(),
          },
        });
      },

      onFailure: function (err) {
        alert(err.message || JSON.stringify(err));
      },
    });
  };
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
