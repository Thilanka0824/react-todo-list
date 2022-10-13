import { useState } from "react";
import "./App.css";



const ToDoForm = (props) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div>
      <label>Title: </label>
      <input type="text" onChange={(e) => {
        setTitle(e.target.value)
      }} />
      <br />
      <label>Priority: </label>
      <select onChange={(e) => {
        setPriority(e.target.value)
      }}>
        <option value=""></option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <br />
      <label>Description</label>
      <textarea type="text" onChange={(e) => {
        setDescription(e.target.value)
      }} />
      <br />
      <button onClick={() => {
        props.handleAddToDo(title, priority, description)
      }}>Add ToDo</button>
    </div>
  )

};

const ToDoListContainer = (props) => {

  return (
    <div>
      <h1>Todo List</h1>
      {props.toDoList.map((toDo, index) => {
        return <ToDoItem toDo={toDo} key={index} />
      })}
    </div>
  )
};

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

};

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
  const handleAddToDo = (title, priority, description) => {
    const newToDo = {
      title: title,
      priority: priority,
      description: description,
      creationDate: new Date().toString(),
      completed: null
    }

    const toDoListCopy = [...toDoList, newToDo]
    setToDoList(toDoListCopy)

  }

  const handleUpdateToDo = (title, createdDate) => {
    
    const toDoListCopy = [...toDoList]
    props.toDoListCopy.map((title, createdDate)=>{
      return (
        
      )
    })
  }

  return (
    <div className="App-header">
      <ToDoForm handleAddToDo={handleAddToDo} handleUpdateToDo={handleUpdateToDo}/>
      <ToDoListContainer toDoList={toDoList} handleUpdateToDo={handleUpdateToDo} />
    </div>
  )
};

export default App;