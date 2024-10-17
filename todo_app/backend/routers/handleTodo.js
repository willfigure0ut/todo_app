import express from "express";
import Todo from "../model/todoSchema.js";

const router = express.Router();

router.post("/new-todo", async(req, res) => {
  const { title,description } = req.body;
  console.log(req.body)
  const newTodo = new Todo({
    title,
    description
  });
  try {
    console.log(newTodo)
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  }
  catch (error) {
    res.status(400).json({ message: error.message });
  }
})


router.get("/todos", async(req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
})

router.patch("/toggle-todo/:id", async(req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    todo.completed = !todo.completed;
    await todo.save();
    res.status(200).json(todo);
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }

})

export default router;

