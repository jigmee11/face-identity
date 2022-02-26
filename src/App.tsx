import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  HomeScreen,
  ResultScreen,
  SignInScreen,
  SignUpScreen,
} from "./screens";
import ConfirmScreen from "./screens/ConfirmScreen";
const App = () => {
  return (
    <Routes>
      <Route path="/signIn" element={<SignInScreen />} />
      <Route path="/signUp" element={<SignUpScreen />} />
      <Route path="/result" element={<ResultScreen />} />
      <Route path="/confirm" element={<ConfirmScreen />} />
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  );
};

export default App;
