async function addTodoHandler(title,description) {
  const response = await fetch("http://localhost:3002/new-todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      description: description,
    })
  })
  
  return await response.json()
}

export default addTodoHandler;