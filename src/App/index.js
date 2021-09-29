import './App.css';
import { TodoListMachine } from '../views/TodoListMachine'
import { TodoProvider } from '../TodoContext'

function App() {  
  return (
    <TodoProvider>
      <TodoListMachine />
    </TodoProvider>
  );
}

export default App;
