import * as AWS from "aws-sdk/global";
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";
import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from "react";

type UserType = {
  user: { id: number };
  setUser: Dispatch<SetStateAction<{ id: number }>>;
};

export const poolData = {
  UserPoolId: "ap-northeast-2_II4bm9AW3", // Your user pool id here
  ClientId: "3lql5sfh1506csst6m80kllddv", // Your client id here
};

export const AuthContext = createContext<UserType>({
  user: { id: 1 },
  setUser: () => void 0,
});

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState({ id: 1 });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
