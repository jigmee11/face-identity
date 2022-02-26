import "../styles/Header.css";
import { ReactComponent as Arrow } from "../assets/arrow-down.svg";
import { useContext, useState } from "react";
import { Context } from "../Provider";
export const Header = () => {
  const [show, setShow] = useState(false);
  const { logout } = useContext(Context);
  return (
    <div id="headerContainer">
      <div id="headerMiddleContainer">
        <h2 className="headerTitle">
          Emu
          <button onClick={() => setShow(!show)} style={{ cursor: "pointer" }}>
            <Arrow />
          </button>
        </h2>
        {show && (
          <button id="dropDown" onClick={() => logout()}>
            LogOut
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;
