import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import animationData from "../assets/lf30_editor_ncjtqgwd.json";
import { Header } from "../components";
import axios from "axios";
import { Context } from "../Provider";
import { getApiWithUser, search, uploadWithS3 } from "../api";
export const HomeScreen = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<string | null>(null);
  const { token, user } = useContext(Context);
  const [files1, setFiles1] = useState<any>(null);
  const findTwin = async () => {
    const url = await getApiWithUser("/put-file", {
      name: `faces/${files1.name}`,
      type: files1.type,
      token: token,
    });
    await uploadWithS3(url, files1);
    await search(`faces/${files1.name}`, token).then((doc) => console.log(doc));
  };
  const readURL = (files: FileList | null) => {
    if (files && files[0]) {
      setFiles1(files[0]);
      setFile(URL.createObjectURL(files[0]));
    }
  };
  return (
    <div className="wrapper">
      <Header />
      {loading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            backgroundColor: "rgba(255, 255, 255, 0.6)",
          }}
        >
          {/* <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            isClickToPauseDisabled
            height={300}
            width={300}
          /> */}
        </div>
      )}
      <div id="container">
        <h1>
          Add Your Photo See Your Twin in{" "}
          <span style={{ color: "#42eaddff", margin: 0 }}>Nest Academy</span>
        </h1>
        <div
          style={{
            width: "100%",
            height: "400px",
            border: "2px solid #42eaddff",
            borderRadius: "8px",
            marginBottom: "13.44px",
            position: "relative",
            backgroundImage: `url(${file})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              backgroundColor: file ? "rgba(255, 255, 255, 0.5)" : "",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3>
              Tap Here To {file ? "Change" : "Add"} <br />
              Your Image
            </h3>
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => readURL(e.target.files)}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              opacity: 0,
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
        <Button onClick={() => findTwin()} disabled={file ? false : true}>
          Find Your Twin
        </Button>
      </div>
    </div>
  );
};
export default HomeScreen;
