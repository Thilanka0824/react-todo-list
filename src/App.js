import { useState } from "react";
import "./App.css";

const ToDoListContainer = (props) => {


  return (
    <div>
      <h1>Todo List</h1>
      {props.toDoList.map((toDo, index) => {
        return <ToDoItem toDo={toDo} key={index} />
      })}
    </div>
  )
}

const ToDoItem = (props) => {
  
  
  return (
    <div>
    <h2>Todo: {props.toDo.title}</h2>
    <p>Priority: {props.toDo.priority}</p>
    <p>Description: {props.toDo.description}</p>
    <p>Created: {props.toDo.creationDate}</p>
    {props.toDo.completedDate && <p>Completed: {props.toDo.completedDate}</p>}
    
    {console.log(props.toDo)}
    
    </div>
    
  )
  
}

const App = () => {
  const [toDoList, setToDoList] = useState(
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
      <ToDoListContainer toDoList={toDoList}/>
    </div>
  )
}

export default App