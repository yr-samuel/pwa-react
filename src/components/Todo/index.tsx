import { ReactNode } from 'react';
import './style.css';

interface ITodoProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}

const Todo: React.FC<ITodoProps> = ({ children, ...restProps }: ITodoProps) => {
	return <div {...restProps}>
		{children}
	</div>
}

export default Todo;