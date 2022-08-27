import React from "react";
import './style.css';
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<input {...props} />
	)
}

export default Input;