import { useState } from "react"; 
import addTodoHandler from "../handlers/addTodoHandler.js";

function TodoInput({todos,setTodos}) {
  const [title, setTitle] = useState(""); 
  const [description, setDescription] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    try {
      const updatedTodo = await addTodoHandler(title, description);
      
      setTodos(todos => [...todos,updatedTodo])
      
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding todo:", error);
     
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />
      <input 
        type="text"
        className="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter description"
      />
      
      <button type="submit">Add Todo</button>
    </form>
  ); 
}

export default TodoInput;