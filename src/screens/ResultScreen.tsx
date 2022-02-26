import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
export const ResultScreen = () => {
	const navigate = useNavigate();
	return (
		<div className='wrapper'>
			<div id='container'>
				<h1>
					We Have Found Your Twin <br />
					in{" "}
					<span style={{ color: "#42eaddff", margin: 0 }}>
						Nest Academy
					</span>
				</h1>
				<div
					style={{
						width: "100%",
						height: "400px",
						border: "1px solid #42eaddff",
						borderRadius: "8px",
						marginBottom: "13.44px",
					}}
				></div>
				<Button onClick={() => navigate("/")}>
					Find Your Twin Again
				</Button>
			</div>
		</div>
	);
};
export default ResultScreen;
