import './App.css';
import { useState } from 'react';
import React from 'react'


function App() {
  // hooks
  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState('')
  const [completeList, setComplete] = useState([])

  // functions
  const addToList = (todoItem) =>{
    setTodoList((prev) => [...prev, todoItem])
  }

  const delTodoItem = (todoItem) => {
      setTodoList([...todoList.slice(0, todoList.indexOf(todoItem)), ...todoList.slice(todoList.indexOf(todoItem) + 1)])
  }
  const delCompItem = (completeItem) => {
    setComplete([...completeList.slice(0, completeList.indexOf(completeItem)), ...completeList.slice(completeList.indexOf(completeItem) + 1)])
  }

  const addToComplete = (completeItem) => {
    setTodoList([...todoList.slice(0, todoList.indexOf(completeItem)), ...todoList.slice(todoList.indexOf(completeItem) + 1)])
    setComplete((prev) => [...prev, completeItem])
  }


  return (
    <div className="App">
     <h3>Your Todo List</h3>
     <input className="todo-value" type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
     <button onClick={() => addToList(todo)} className="add-btn">Add</button>
  <h2>Todo</h2>


    <ul>
      {todoList.map((item) => (
        <li className='todo-item' key={item}>
        <span>{item}</span> <button onClick={() => addToComplete(item)}>Complete</button><button onClick={() => delTodoItem(item)} className="del-btn">X</button>
     </li>
      ))}
    </ul>


    <h2>Complete</h2>
    {completeList.map((complete) => (
      <li className='complete-item' key={complete}>
      <span>{complete}</span> <button onClick={() => delCompItem(complete)} className="del-comp-btn">X</button>
   </li>
    ))}
    </div>
  );
}

export default App;
