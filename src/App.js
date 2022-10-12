import { useState } from "react";
import "./App.css";

const ToDoListContainer = (props) => {


  return (
    <div>
      <h1>Todo List</h1>     
    </div>
  )
}

const App = () => {
  const [toDoList, useToDoList] = useState(
    [{
      title: "Implement ToDo List",
      priority: "High",
      isComplete: false,
      description: "Implement the todo list application",
      creationDate: new Date().toString(),
      completedDate: null
    }]

  )

  return (
    <div className="App-header">
      <ToDoListContainer />
    </div>
  )
}

export default App