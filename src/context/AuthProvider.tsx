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

export const AuthContext = createContext<UserType>({
  user: { id: 1 },
  setUser: () => void 0,
});

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState({ id: 1 });
  //   navigate("/login");
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
