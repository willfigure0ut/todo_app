async function handleToggleComplete(id) {
  const response = await fetch(`http://localhost:3002/toggle-todo/${id}`, {
    method: "PATCH",
  })
  
  return await response.json()
}



export default handleToggleComplete;