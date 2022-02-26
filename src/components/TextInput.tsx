import React from "react";
import "../styles/InputText.css";
type Props = {
	type?: React.HTMLInputTypeAttribute | undefined;
	value: string;
	placeholder?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const TextInput = ({ value, onChange, type, placeholder }: Props) => {
	return (
		<input
			placeholder={placeholder}
			type={type}
			value={value}
			onChange={onChange}
			className='input'
		/>
	);
};
export default TextInput;
