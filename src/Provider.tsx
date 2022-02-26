import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CognitoUser,
  CognitoUserPool,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";

type ContextType = {
  user: CognitoUser | null;
  cognitoUser: CognitoUser | null;
  errorMessage: string;
  token: string;
  confirmCode: (code: string) => void;
  setUser: (user: null) => void;
  setErrorMessage: (errorMessage: string) => void;
  signUp: (email: string, password: string, confirmPassword: string) => void;
  signIn: (email: string, password: string) => void;
  logout: () => void;
};

const poolData = {
  UserPoolId: "ap-northeast-2_II4bm9AW3",
  ClientId: "3lql5sfh1506csst6m80kllddv",
};
const UserPool = new CognitoUserPool(poolData);
export const Context = createContext<ContextType>({
  user: null,
  errorMessage: "",
  cognitoUser: null,
  token: "",
  confirmCode: (code: string) => {},
  setErrorMessage: () => {},
  setUser: () => {},
  signUp: () => {},
  signIn: () => {},
  logout: () => {},
});
export const Provider = ({ children }: any) => {
  const [user, setUser] = useState<CognitoUser | null>(null);
  const [cognitoUser, setCongnitoUser] = useState<CognitoUser | null>(null);
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState("");
  const signUp = (email: string, password: string, confirmPassword: string) => {
    setErrorMessage("");
    UserPool.signUp(email, password, [], [], (err, data) => {
      if (err) {
        setErrorMessage(
          err.message.split(":").length === 1
            ? err.message
            : err.message.split(":")[1]
        );
      } else {
        var cognito = new CognitoUser({
          Username: email,
          Pool: UserPool,
        });
        setCongnitoUser(cognito);
        if (data?.userConfirmed) {
          navigate("/");
        } else {
          navigate("/confirm");
        }
      }
    });
  };
  const signIn = (email: string, password: string) => {
    setErrorMessage("");
    var authenticationData = {
      Username: email,
      Password: password,
    };
    var authenticationDetails = new AuthenticationDetails(authenticationData);
    var userData = {
      Username: email,
      Pool: UserPool,
    };
    var cognitoUserr = new CognitoUser(userData);
    cognitoUserr.authenticateUser(authenticationDetails, {
      onSuccess: () => {
        navigate("/");
      },
      onFailure: (err) => {
        setErrorMessage(err.message);
      },
    });
  };
  const confirmCode = (code: string) => {
    cognitoUser?.confirmRegistration(code, true, (err, result) => {
      if (err) {
        setErrorMessage(err.message);
      } else {
        navigate("/");
      }
    });
  };
  const logout = () => {
    const cognitoUser = UserPool.getCurrentUser();
    cognitoUser?.signOut();
    setUser(null);
    navigate("/signIn");
  };
  useEffect(() => {
    let currUser = UserPool.getCurrentUser();
    if (currUser) {
      currUser.getSession((error: any, session: any) => {
        if (!error) {
          setToken(session.getIdToken().getJwtToken());
        }
      });
      setUser(currUser);
      navigate("/");
    }
  }, [navigate]);
  return (
    <Context.Provider
      value={{
        user,
        setUser,
        signUp,
        confirmCode,
        cognitoUser,
        errorMessage,
        setErrorMessage,
        logout,
        signIn,
        token,
      }}
    >
      {children}
    </Context.Provider>
  );
};
