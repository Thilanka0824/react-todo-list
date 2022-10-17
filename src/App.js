import { useState } from "react";
import "./App.css";



const ToDoForm = (props) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

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
      <br />
      <div>
        <h1>Login area</h1>
        <button onClick={() => setLoggedIn(!loggedIn)}>Log In</button>

        {loggedIn ?
          (
            <h3>Hello, Thilanka! Welcome back!!</h3>
          ) :
          (
            <h3>Please Log In, we don't know you</h3>
          )}
      </div>

    </div>


  )



};

const ToDoListContainer = (props) => {

  return (
    <div>
      <h1>Todo List</h1>
      {props.toDoList.map((todo, index) => {
        return <ToDoItem todo={todo} key={index} />
      })}
    </div>
  )
};

const ToDoItem = (props) => {

  return (
    <div>
      <h2>Todo: {props.todo.title}</h2>
      <p>Priority: {props.todo.priority}</p>
      <p>Description: {props.todo.description}</p>
      <p>Created: {props.todo.createdDate}</p>
      {props.todo.completedDate && <p>Completed: {props.todo.completedDate}</p>}

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
        if (todo.isComplete === false) {
          todo.isComplete = true
          todo.completedDate = new Date().toString()
        } else {
          todo.isComplete = false
          todo.completedDate = null
        }
        return todo
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
      <ToDoForm handleAddToDo={handleAddToDo} handleUpdateToDo={handleUpdateToDo} />
      <ToDoListContainer toDoList={toDoList} handleUpdateToDo={handleUpdateToDo} />
    </div>
  )
};




export default App;