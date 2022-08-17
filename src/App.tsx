import { useState, useEffect } from "react";
import CreateTask from "./components/CreateTask"

interface ToDoItem {
  id: number,
  task: string,
  completed: boolean
}



function App(): JSX.Element {
  const [todos, setTodos] = useState<ToDoItem[]>([])

  const baseUrl = process.env.NODE_ENV === "production"
	? "http://when-its-ready.herokuapp.com"
	: "http://localhost:4000"


  useEffect(() => {
    fetch (`${baseUrl}/items`)
    .then((response)=>response.json())
    .then((jsonBody: ToDoItem[]) => setTodos(jsonBody));
  }, [baseUrl])

  return (
    <>
      <CreateTask/>
      <div className="todo-list">
        <h1>My To-Do List</h1>
        {todos && todos.map((todo)=>(<li key={todo.id}>{todo.task}</li>))}
      </div>
    </>
  )
  }

export default App;

/*</div>
    <div className = "searchBar">
      <input type="text" onChange={(event) => {setInputToDo(event.target.value)}} value={inputToDo} />
      <button onClick={handleAddToDo}>Add To-Do</button>
    </div>
    <div className="mainList">
      <h2>To Dos:</h2>
      <div>
        {todos.map((todos,index) => (<li key={index}>{todos.task}</li>))}
      
      </div>
      */