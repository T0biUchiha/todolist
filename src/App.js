
import './App.css';
import React, { useState } from "react";
import Todo from './componenet/Todo';

function App() {

  const [todo,setTodo] = useState("");
  const [items,setItems] =useState([]);

  const addItem=(e)=>{
    setTodo(e.target.value)
  }
  const remove =(id)=>{
    console.timeLog("deleted")
    setItems((added)=>{
      return added.filter((ele,index)=>{
        return index !== id;
      })
    })
}
  const add =() =>{
    setItems((added)=>{
      return [...added, todo]
    });
    setTodo("");
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      <input type="text" placeholder='Add task' value={todo} onChange={addItem}></input>
      <button onClick={add}>+</button>
      <ul>
        {items.map((value,i)=>{
         return (<Todo key={i} id={i} text={value} onSelect={remove}></Todo>)
        })
      }
      </ul>
      
    </div>
  );
}

export default App;
