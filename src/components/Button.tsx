import React from "react";
import "../styles/Button.css";
type Props = {
	children: React.ReactChild;
	disabled?: boolean;
	onClick: () => void;
};
export const Button = ({ children, onClick, disabled }: Props) => {
	return (
		<button
			onClick={onClick}
			className='buttonContainer'
			style={{ opacity: disabled ? 0.5 : 1 }}
		>
			{children}
		</button>
	);
};
export default Button;
