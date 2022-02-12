import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Home = () => {
  const navigation = useNavigate();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (!user.id) {
      navigation("/login");
    }
  }, [user]);
  return <p>lol</p>;
};
export default Home;
