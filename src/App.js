import { useState } from "react";
import "./App.css";
import Navbar from "./navbar";
import About from "./pages/About";
import Completed from "./pages/Completed";
import Home from "./pages/Home";
//import {Switch, Route} from "react-router-dom"

const ToDoForm = (props) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');
  

  return (

   
    <div>
      
    <label>Title: </label>
      <input type="text" value={title} onChange={(e) => {
        
        setTitle(e.target.value)
      }} />
      <br />
      <label>Priority: </label>
      <select value={priority} onChange={(e) => {
        setPriority(e.target.value)
      }}>
        <option value="">Select an Option</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <br />
      <label>Description</label>
      <textarea type="text" value={description} onChange={(e) => {
        setDescription(e.target.value)
      }} />
      <br />
      <button onClick={() => {
        props.handleAddToDo(title, priority, description)
        setTitle('')
        setPriority('')
        setDescription('')
      }}>Add ToDo</button>
      <br />


    </div>


  )



};
const Logger = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
  <div>
    <h1>Login Area</h1>
    <button onClick={() => setLoggedIn(!loggedIn)}>Log In</button>

    {loggedIn ?
      (
        <h3>Hello, Thilanka! Welcome back!!</h3>
      ) :
      (
        <h3>Please Log In, we don't know you</h3>
      )}
  </div>
  )
}
const ToDoListContainer = (props) => {
  const toDosLength = props.toDoList.length
  return (
    <div>
      <h1>Todo List</h1>
      <p>Number of ToDos: {toDosLength}</p>
      {props.toDoList.map((todo, index) => {
        return <ToDoItem todo={todo} key={index} />
      })}
    </div>
  )
};

const ToDoItem = (props) => {
  const { title, priority, description, createdDate, completedDate } = props.todo

  return (
    <div>
      <h2>{title}</h2>
      <p>Priority: {priority}</p>
      <p>Description: {description}</p>
      <p>CreatedAt: {createdDate}</p>
      {completedDate && <p>Completed: {completedDate}</p>}
      {console.log(props.todo)}
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
      createdDate: new Date().toString(),
      completedDate: null
    }]


  )
  const handleAddToDo = (title, priority, description) => {


    const newToDo = {
      title: title,
      priority: priority,
      description: description,
      createdDate: new Date().toString().substring(4, 24),
      completed: null
    }

    const toDoListCopy = [...toDoList, newToDo]
    setToDoList(toDoListCopy)

  }

  const handleUpdateToDo = (title, createdDate) => {
    // function example() {
    //   return condition1 ? value1 : condition2 ? value2
    //       : condition3 ? value3
    //         : value4;
    // }
    const toDoListCopy = [...toDoList]
    let listCopy = toDoListCopy.map((todo) => {
      if (todo.title === title && todo.createdDate === createdDate) {
        const updatedToDo = {
          ...todo //destructured object
        }
        updatedToDo.isComplete = !updatedToDo.isComplete //isComplete in the new updatedToDo object is set to the opposite 
        if (updatedToDo.isComplete === false) {
          updatedToDo.isComplete = true
          updatedToDo.completedDate = new Date().toString()
        } else {
          //updatedToDo.isComplete = false
          updatedToDo.completedDate = null
        }
        return updatedToDo
      } else {
        return todo
      }
    })
    
    console.log("List Copy: ")
    console.log(toDoListCopy)
    setToDoList(listCopy)

  }


  return (
    <div className="App-header">
      <Navbar />
      <ToDoForm handleAddToDo={handleAddToDo} handleUpdateToDo={handleUpdateToDo} />
      <ToDoListContainer toDoList={toDoList} handleUpdateToDo={handleUpdateToDo} />
      <Logger />
      {/* <Switch>
        <Route path="/about">
          <About/>
        </Route>
      </Switch> */}
    </div>
  )
};



export default App;