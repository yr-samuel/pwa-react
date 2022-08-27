import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
     <header style={{ padding: '1rem'}}>
      TODO list
     </header>
		 <TodoList/>
    </div>
  );
}

export default App;
