import { useCallback, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Todo from "../Todo";
import './style.css';

interface ITodo {
	task: string;
	id: string;
}

const TodoList = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);
	const [task, setTask] = useState('');

	const handleInput = useCallback((text: string) => {
		setTask(text);
	}, [])

	const addTodo = useCallback((task: string) => {
		if(!task) return;
		setTodos(prevTodos => [...prevTodos, { task, id: new Date().toString()}])
		setTask('');
	}, []);

	const handleRemoveTodo = useCallback((id: string) => {
		setTodos(todos => todos.filter(todo => todo.id !== id));
	}, [])

	return (
		<>
		<div className="addTodoContainer">
			<Input value={task} onChange={(event) => handleInput(event.target.value)} />
			<Button onClick={() => addTodo(task)}>Adicionar</Button>
		</div>
		<div className='list'>
			{
				todos.map((todo, index) => (
					<Todo key={todo.id} onClick={() => handleRemoveTodo(todo.id)}>#{index + 1} - { todo.task }</Todo>
				))
			}
		</div>
		</>
	)
}

export default TodoList;