import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import ShowTodos from './components/ShowTodos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/todos")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setTodos(data);
      })
      .catch(error => console.error("Fetching error:", error));
  }, []);

  return (
    <>
      <TodoInput todos={todos} setTodos={setTodos} />
      <ShowTodos todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;