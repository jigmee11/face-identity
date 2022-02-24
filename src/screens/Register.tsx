import {
  CognitoUserPool,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";
import React, { useState } from "react";
import { poolData } from "../context/AuthProvider";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const register = () => {
    var userPool = new CognitoUserPool(poolData);
    var attributeEmail = new CognitoUserAttribute({
      Name: "email",
      Value: email,
    });
    var attributePhoneNumber = new CognitoUserAttribute({
      Name: "name",
      Value: name,
    });
    var attributeList = [];

    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);

    userPool.signUp(email, password, attributeList, [], function (err, result) {
      if (err) {
        console.log(err);
        alert(err.message || JSON.stringify(err));
        return;
      }
      var cognitoUser = result?.user;
      console.log("lol");
      console.log("user name is " + cognitoUser?.getUsername());
    });
  };
  return (
    <div>
      <input onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <input onChange={(e) => setName(e.target.value)} placeholder="name" />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={() => register()}>register</button>
    </div>
  );
};

export default Register;
