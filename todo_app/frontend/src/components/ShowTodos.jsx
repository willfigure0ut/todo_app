
import handleToggleComplete from "../handlers/handleToggleComplete";

function ShowTodos({ todos, setTodos }) {
  if (!todos) {
    return <p>Loading todos...</p>;
  }
  
  if (todos.length === 0) {
    return <p>No todos available</p>;
  }

  const onToggleComplete = async (todoId) => {
    try {
      const updatedTodo = await handleToggleComplete(todoId);
      setTodos(prevTodos => 
        prevTodos.map(todo => 
          todo._id === updatedTodo._id ? updatedTodo : todo
        )
      );
    } catch (error) {
      console.error("Failed to toggle todo:", error);
    }
  };

  return (
    <section>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>Status: {todo.completed ? 'Completed ✅': 'Pending ❌'}</p>
            <button onClick={() => onToggleComplete(todo._id)}>
              {todo.completed ? 'Mark as Pending' : 'Mark as Completed'}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ShowTodos