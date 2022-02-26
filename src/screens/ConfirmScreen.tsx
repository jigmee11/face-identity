import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, TextInput } from "../components";
import { Context } from "../Provider";
export const ConfirmScreen = () => {
  const [confirmValue, setConfirmValue] = React.useState("");
  const { confirmCode, errorMessage, cognitoUser } = useContext(Context);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!cognitoUser) {
      navigate("/signin");
    }
  }, []);
  return (
    <div className="wrapper">
      <div id="container">
        <TextInput
          value={confirmValue}
          onChange={(e) => setConfirmValue(e.target.value)}
          type={"number"}
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
        <Button onClick={() => confirmCode(confirmValue)}>Confirm</Button>
      </div>
    </div>
  );
};
export default ConfirmScreen;
