import './style.css';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    background?: string;
    color?: string;
}

const Button = (props: IButtonProps) => {
	return (
		<button 
			{...props} 
			style={{ backgroundColor: props.background, borderColor: props.color, ...props.style }}
		>
			{props.children}
		</button>
	)
}

export default Button;